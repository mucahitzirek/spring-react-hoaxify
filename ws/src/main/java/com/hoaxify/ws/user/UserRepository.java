package com.hoaxify.ws.user;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	// arka tarafta bu methoda karsilik gelen query olusturulacak
	User findByUsername(String username);

	// ismi username olmayanlari getirir
	Page<User> findByUsernameNot(String username, Pageable page);


}
