package com.hoaxify.ws.file.vm;

import com.hoaxify.ws.file.FileAttachment;

import lombok.Data;

// clientte yolladigimiz hoaxSubmit kisminda gonderdigimiz cevap buradaki fieldlar, image'in name ve fileType ozellikleri

@Data
public class FileAttachmentVM {

	private String name;

	private String fileType;

	public FileAttachmentVM(FileAttachment fileAttachment) {
		this.setName(fileAttachment.getName());
		this.fileType = fileAttachment.getFileType();
	}
}
