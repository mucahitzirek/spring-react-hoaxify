package com.hoaxify.ws.error;

import java.util.Date;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL) // null olmayan objeleri dahil eder. // loginde validateError listesi nulldir
											// onun gonderilmesini engelledik.
public class ApiError {
	
	public int status;
	
	private String message;
	
	private String path;
	
	private long timsetamp = new Date().getTime();

	private Map<String, String> validationErrors;

	public ApiError(int status, String message, String path) {
		this.status = status;
		this.message = message;
		this.path = path;
	}

}
