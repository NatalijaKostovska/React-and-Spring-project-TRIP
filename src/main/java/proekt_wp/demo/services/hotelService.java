package proekt_wp.demo.services;

import proekt_wp.demo.models.Hotel;

import java.io.IOException;
import java.util.List;

public interface hotelService {
    List<Hotel> findAllHotels();
    Hotel findById(Long id);
    //Hotel saveHotel(Long id, String HotelName, Integer numberOfStars, Grad gradHotel);
    Hotel saveHotel(Hotel hotel);
    Hotel updateHotel(Long id, Hotel hotel) throws IOException;
    void deleteById(Long id);
}
