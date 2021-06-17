package com.hoaxify.ws.configuration;

import java.io.IOException;
import org.springframework.boot.jackson.JsonComponent;
import org.springframework.data.domain.Page;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@JsonComponent
public class PageSerializer extends JsonSerializer<Page<?>> {

	// JsonVıew'i kullanmanin 1. Yolu  

	// Page tipindeki objeleri jsona cevirirken nasil bir Serielization yontemi
	// uygulayacaginin classini olusturduk..

	@Override
	public void serialize(Page<?> value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
		// Hangi fieldlari almak istiyorsak onlari ekliyoruz...
		gen.writeStartObject();
		gen.writeFieldName("content");
		serializers.defaultSerializeValue(value.getContent(), gen);
		gen.writeObjectField("pageable", value.getPageable());
		gen.writeBooleanField("last", value.isLast());
		gen.writeNumberField("totalPages", value.getTotalPages());
		gen.writeNumberField("totalPages", value.getTotalElements());
		gen.writeNumberField("size", value.getNumber());
		gen.writeNumberField("number", value.getNumber());
		gen.writeObjectField("sort", value.getSort());
		gen.writeNumberField("numberOfElements", value.getNumberOfElements());
		gen.writeBooleanField("first", value.isFirst());
		gen.writeBooleanField("empty", value.isEmpty());
		gen.writeEndObject();
	}

}
