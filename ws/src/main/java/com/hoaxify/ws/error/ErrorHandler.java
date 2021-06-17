package com.hoaxify.ws.error;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.error.ErrorAttributeOptions.Include;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

@RestController
public class ErrorHandler implements ErrorController {

	@Autowired
	private ErrorAttributes errorAttributes;
	// Springin DefaultErrorAttributes olan ErrorAttributes arayuzunun default
	// gerceklestiriminden ornek alarak handleError metodunu olusturduk Kendi
	// projemize ozel olarak bir ErrorController yazmis olduk
	// Boylece springin basicError classiyla bir isimiz kalmiyor
	// Daha standart bir hata modellemesi yapabildik.
	// Hem Authentication'dan gelen hemde validationli fail durumlarini ApiErrora
	// modelleyen bir classimiz oldu.

	@RequestMapping("/error")
	ApiError handleError(WebRequest webRequest) {

		// Authorization'daki errorlari ApiErrore modelledik
		Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(webRequest,
				ErrorAttributeOptions.of(Include.MESSAGE, Include.BINDING_ERRORS));
		String message = (String) attributes.get("message");
		String path = (String) attributes.get("path");
		int status = (int) attributes.get("status");

		// Validation durumlarini ApiErrore modelledik
		ApiError error = new ApiError(status, message, path);
		// (bu attributeslarin icinde errors varsa)
		// bu if ile fieldErrors'in null olup olmadigini kontrol etmis olduk
		if (attributes.containsKey("errors")) {
			List<FieldError> fieldErrors = (List<FieldError>) attributes.get("errors");
			Map<String, String> validationErrors = new HashMap<>();
			for (FieldError fieldError : fieldErrors) {
				validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
			}
			error.setValidationErrors(validationErrors);
		}

		return error;
	}

	@Override
	public String getErrorPath() { // Spring securityin errorlari ilettigi pathe ulasmak icin kullandik

		return "/error";
	}

}
