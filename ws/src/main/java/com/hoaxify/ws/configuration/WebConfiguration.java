package com.hoaxify.ws.configuration;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

	@Autowired
	AppConfiguration appConfiguration;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// http://localhost>8080/images/profile.png
		registry.addResourceHandler("/images/**") // images ile basliyan herseye uploadpathin altinda bak
				.addResourceLocations("file:./" + appConfiguration.getUploadPath() + "/")
				.setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS)); // surekli backendden istek ile resmi almak
																			// yerine
		// resmimizi browserda saklanabilmesini sagladik
	}

	@Bean
	CommandLineRunner createStorageDirectories() {
		// klasor yoksa o klasoru olusturmak icin...
		return (args) -> {
			createFolder(appConfiguration.getUploadPath()); // storage-dev
			createFolder(appConfiguration.getProfileStoragePath());
			createFolder(appConfiguration.getAttachmentStoragePath());
		};
	}

	private void createFolder(String path) {
		File folder = new File(path);
		boolean folderExist = folder.exists() && folder.isDirectory();
		if (!folderExist) {
			folder.mkdir();
		}
	}

}
