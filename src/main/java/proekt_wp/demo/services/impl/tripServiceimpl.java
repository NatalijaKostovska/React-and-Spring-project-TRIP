package proekt_wp.demo.services.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import proekt_wp.demo.models.*;
import proekt_wp.demo.models.exceptions.ExceptionTripNotFound;
import proekt_wp.demo.repository.TripRepository;
import proekt_wp.demo.services.*;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
public class tripServiceimpl implements tripService {
    private final TripRepository tripRepository;
    private final  hotelService hotelService;
    private final GradService gradService;
    private final ResoranService restoranService;
    public tripServiceimpl(TripRepository tripRepository, hotelService hotelService, GradService gradService, ResoranService restoranService) {
        this.tripRepository = tripRepository;
        this.hotelService = hotelService;
        this.gradService = gradService;
        this.restoranService = restoranService;
    }

    @Override
    public Trip saveTrip(Trip trip, MultipartFile image) throws IOException {
     Hotel hotel = this.hotelService.findById(trip.getHotel().getIdHotel());
     Grad grad = this.gradService.findById(trip.getGrad().getIdGrad());
     Restoran restoran = this.restoranService.findById(trip.getRestoran().getIdRestoran());
     trip.setGrad(grad);
     trip.setRestoran(restoran);
     trip.setHotel(hotel);
        if (image != null && !image.getName().isEmpty()) {
            byte[] bytes = image.getBytes();
            String base64Image = String.format("data:%s;base64,%s", image.getContentType(), Base64.getEncoder().encodeToString(bytes));
            trip.setImageBase64(base64Image);
        }


        return this.tripRepository.save(trip);
    }

    @Override
    public List<Trip> findAllTrips() {
        return this.tripRepository.findAll();    }

    @Override
    public Trip findById(Long id) {
        return this.tripRepository.findById(id).orElseThrow(()->new ExceptionTripNotFound(id));

    }

    @Override
    public Trip updateTrip(Long id, Trip trip, MultipartFile image) throws IOException {
        Trip p = this.findById(id);
        if (image != null && !image.getName().isEmpty()) {
            byte[] bytes = image.getBytes();
            String base64Image = String.format("data:%s;base64,%s", image.getContentType(), Base64.getEncoder().encodeToString(bytes));
            p.setImageBase64(base64Image);
        }
        return this.tripRepository.save(p);
    }

    @Override
    public void deleteById(long id) {
        this.tripRepository.deleteById(id);
    }
}
