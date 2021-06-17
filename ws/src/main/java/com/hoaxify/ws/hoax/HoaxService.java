package com.hoaxify.ws.hoax;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import com.hoaxify.ws.file.FileAttachment;
import com.hoaxify.ws.file.FileAttachmentRepository;
import com.hoaxify.ws.file.FileService;
import com.hoaxify.ws.hoax.vm.HoaxSubmitVM;
import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserService;

@Service
public class HoaxService {

	HoaxRepository hoaxRepository;

	UserService userService;

	FileAttachmentRepository fileAttachmentRepository;

	FileService fileService;

	public HoaxService(HoaxRepository hoaxRepository, FileAttachmentRepository fileAttachmentRepository,
			FileService fileService, UserService userService) {
		super();
		this.hoaxRepository = hoaxRepository;
		this.fileAttachmentRepository = fileAttachmentRepository;
		this.fileService = fileService;
		this.userService = userService;
	}

	// Daha sonra UserService initialize edilince set edilecek..
	// Constructor'da tanimlamamamizin sebebi: ikisindede olunca spring uygulama
	// baslarken hata veriyordu
	// HoaxService -> UserService, UserService -> HoaxService ?
	// bunu duzeltmek icin setterda inject yaptik
	// Tabi sonradan silme islemlerini jpaya biraktigimiz icin UserService'te
	// hoaxService'i kullanmamiz bosa cikti o yuzden bu islemede gerek kalmadi.
	// ancak silmiyorum bilgi icin birakiyorum. (burada constructora geri ekledim.)
//	@Autowired
//	public void setUserService(UserService userService) {
//		this.userService = userService;
//	}

	public void save(HoaxSubmitVM hoaxSubmitVM, User user) {
		Hoax hoax = new Hoax();
		hoax.setContent(hoaxSubmitVM.getContent());
		hoax.setTimestamp(new Date());
		hoax.setUser(user);
		hoaxRepository.save(hoax);
		// Yuklenen fileAttachment'i hoax ile iliskilendirmesini ayarlamak icin;
		// Biz clientte resmi secer secmez database'e kaydettik, buradan oyle bir
		// fileAttachment varmi yokmu kontrol ettik,
		// Varsa o fileAttachment'in hoax_id'sine kaydedecegimiz hoax'i set ediyoruz
		// (guncellemis oluyoruz, cunku image secilir secilmez kaydedttigimiz icin ondan
		// sonra kaydedilen hoaxin id sini vermek icin update yapmis oluyoruz)
		// OneToOne baglanti oldugu icin fileAttachment tablosunda hoax_id'sine
		// kaydettigimiz hoax'in id'sini vermis oluyoruz..
		Optional<FileAttachment> optionalFileAttachment = fileAttachmentRepository
				.findById(hoaxSubmitVM.getAttachmentId());
		if (optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setHoax(hoax);
			fileAttachmentRepository.save(fileAttachment); // bu entry icin o tabloyu guncellemis olacak
		}
	}

	public Page<Hoax> getHoaxes(Pageable pageable) {
		return hoaxRepository.findAll(pageable);
	}

	public Page<Hoax> getHoaxesOfUser(String username, Pageable pageable) {
		User inDB = userService.getByUsername(username);
		return hoaxRepository.findByUser(inDB, pageable);
	}

	public Page<Hoax> getOldHoaxes(long id, String username, Pageable pageable) {
		Specification<Hoax> specification = idLessThan(id);
		if (username != null) {
			User inDB = userService.getByUsername(username);
			specification = specification.and(userIs(inDB));
		}
		return hoaxRepository.findAll(specification, pageable);
	}

	public long getNewHoaxesCount(long id, String username) {
		Specification<Hoax> specification = idGreaterThan(id);
		if (username != null) {
			User inDB = userService.getByUsername(username);
			specification = specification.and(userIs(inDB));
		}
		return hoaxRepository.count(specification);
	}

	public List<Hoax> getNewHoaxes(long id, String username, Sort sort) {
		Specification<Hoax> specification = idGreaterThan(id);
		if (username != null) {
			User inDB = userService.getByUsername(username);
			specification = specification.and(userIs(inDB));
		}
		return hoaxRepository.findAll(specification, sort);
	}

	Specification<Hoax> idLessThan(long id) {
		return (root, query, criteriaBuilder) -> {
			return criteriaBuilder.lessThan(root.get("id"), id);
		};
	}

	Specification<Hoax> idGreaterThan(long id) {
		return (root, query, criteriaBuilder) -> {
			return criteriaBuilder.greaterThan(root.get("id"), id);
		};
	}

	Specification<Hoax> userIs(User user) {
		return (root, query, criteriaBuilder) -> {
			return criteriaBuilder.equal(root.get("user"), user);
		};
	}

	// delete islemininde id'nin null olup olmamasini kontrol etmek cokta mantikli
	// degil sonucta silmek istediginde oyle bir id yoksa yoktur silinmistir
	// diyebiliriz.
	public void delete(long id) {
		Hoax inDB = hoaxRepository.getOne(id);
		if (inDB.getFileAttachment() != null) {
			String fileName = inDB.getFileAttachment().getName();
			fileService.deleteAttachmentFile(fileName);
		}
		hoaxRepository.deleteById(id);
	}

//	User tablosuna ekledigimiz hoax listesindeki cascade type sayesinde bu fonksiyona gerek kalmadi..
//	public void deleteHoaxOfUser(String username) {
//		// User silinmek istendiginde once hoaxlarinin silinmesi gerekiyor;
//		User inDB = userService.getByUsername(username);
//		Specification<Hoax> userOwned = userIs(inDB);
//		List<Hoax> hoaxesToBeRemoved = hoaxRepository.findAll(userOwned);
//		hoaxRepository.deleteAll(hoaxesToBeRemoved);
//	}
}
