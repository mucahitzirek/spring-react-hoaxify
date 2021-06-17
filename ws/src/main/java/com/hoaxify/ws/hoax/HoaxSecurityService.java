package com.hoaxify.ws.hoax;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hoaxify.ws.user.User;

@Service(value = "hoaxSecurity")
public class HoaxSecurityService {

	@Autowired
	HoaxRepository hoaxRepository;

	public boolean isAllowedToDelete(long id, User loggedInUser) {
		Optional<Hoax> optionalHoax = hoaxRepository.findById(id);// Database'den hoaxi bulduk
		if (!optionalHoax.isPresent()) { // yoksa false
			return false;
		}
		Hoax hoax = optionalHoax.get();
		if (hoax.getUser().getId() != loggedInUser.getId()) { // loggedUnUserin idsiyle karsilastiriyoruz
			return false;
		}
		return true;
	}

}
