package proekt_wp.demo.models.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class ExceptionTripNotFound  extends RuntimeException{
    public ExceptionTripNotFound(Long id) {
        super(String.format("Product with %d was not found!", id));
    }

}
