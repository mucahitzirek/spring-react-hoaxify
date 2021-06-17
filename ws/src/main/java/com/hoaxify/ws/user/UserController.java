package com.hoaxify.ws.user;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hoaxify.ws.shared.CurrentUser;
import com.hoaxify.ws.shared.GenericResponse;
import com.hoaxify.ws.user.vm.UserUpdateVM;
import com.hoaxify.ws.user.vm.UserVM;

@RestController
@RequestMapping("/api/1.0")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("users")
	public GenericResponse createUser(@Valid @RequestBody User user) {
		userService.save(user);
		return new GenericResponse("user created");

	}

	@GetMapping("users")
	Page<UserVM> getUsers(Pageable page, @CurrentUser User user) {
		// map fonksiyonu icerde tekil olarak tek tek user objelerini
		// UserVM'in constructor'ina bagliyor boylece
		// UserVM User objesini UserVM'e donusturmus oluyoruz
		return userService.getUsers(page, user).map(UserVM::new);
	}

	@GetMapping("/users/{username}")
	UserVM getUser(@PathVariable String username) {
		User user = userService.getByUsername(username);
		return new UserVM(user);
	}

	@PutMapping("/users/{username}")
	@PreAuthorize("#username == principal.username") // Bu method execute edilmeden once security araya girerek o an
	// request atan kullanicinin yetkisi olup olmadigini kontrol eder securitynin,
	// yetkisi yoksa
	// forbidden 403 cevabi donecek ... Kisacasi update islemi isteyen userin o an
	// gercekten o userin kendisimi istek atiyor onun guvenligi saglanmis olur(login
	// olan user)
	UserVM updateUser(@Valid @RequestBody UserUpdateVM updateUser, @PathVariable String username) {
		User user = userService.updateUser(username, updateUser);
		return new UserVM(user);
	}

	@DeleteMapping("/users/{username}")
	@PreAuthorize("#username == principal.username")
	GenericResponse deleteUser(@PathVariable String username) {
		userService.deleteUser(username);
		return new GenericResponse("User is removed");
	}

}