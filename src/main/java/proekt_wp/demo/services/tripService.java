package proekt_wp.demo.services;

import org.springframework.web.multipart.MultipartFile;
import proekt_wp.demo.models.Trip;

import java.io.IOException;
import java.util.List;

public interface tripService {
    Trip saveTrip(Trip trip, MultipartFile image)throws IOException;
    List<Trip> findAllTrips();
    Trip findById(Long id);
    Trip updateTrip(Long id,Trip trip, MultipartFile image) throws IOException;
    void deleteById(long id);
}
