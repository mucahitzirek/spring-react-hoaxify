package com.hoaxify.ws.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Data
@Configuration
@ConfigurationProperties(prefix = "hoaxify") // Benim boyle bir konfigurasyonum oldu artik tanimlamalarimi buna gore
												// yapabilirim
public class AppConfiguration {

	// Kendi Configuration dosyamiz -- uploadpath'in degerini yaml dosyasinda verdik
	private String uploadPath;

	private String profileStorage = "profile";

	private String attachmentStorage = "attachments";

	public String getProfileStoragePath() { // Relative path for profile
		return uploadPath + "/" + profileStorage;
	}

	public String getAttachmentStoragePath() {
		return uploadPath + "/" + attachmentStorage;
	}

}
