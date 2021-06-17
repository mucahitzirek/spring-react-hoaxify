package com.hoaxify.ws.file;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hoaxify.ws.user.User;

public interface FileAttachmentRepository extends JpaRepository<FileAttachment, Long> {

	// Bizim verdigimiz Date'ten az olanlar yani onceki tarihliler ve hoaxi null
	List<FileAttachment> findByDateBeforeAndHoaxIsNull(Date date);

	//Bu usera ait olan hoaxlarin FileAttachmentlari
	List<FileAttachment> findByHoaxUser(User user);
	
}
