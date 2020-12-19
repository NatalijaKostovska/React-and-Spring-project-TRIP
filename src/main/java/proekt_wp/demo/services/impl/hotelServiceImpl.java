package proekt_wp.demo.services.impl;

import org.springframework.stereotype.Service;
import proekt_wp.demo.models.Hotel;
import proekt_wp.demo.models.exceptions.ExceptionTripNotFound;
import proekt_wp.demo.repository.HotelRepository;
import proekt_wp.demo.services.hotelService;

import java.io.IOException;
import java.util.List;

@Service
public class hotelServiceImpl implements hotelService {
    private final HotelRepository hotelRepository;

    public hotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public List<Hotel> findAllHotels() {
        return this.hotelRepository.findAll();
    }

    @Override
    public Hotel findById(Long id) {
        return this.hotelRepository.findById(id).orElseThrow(()->new ExceptionTripNotFound(id));
    }

    @Override
    public Hotel saveHotel(Hotel hotel) {

        return this.hotelRepository.save(hotel);
    }

    @Override
    public Hotel updateHotel(Long id, Hotel hotel) throws IOException {
        Hotel h = this.findById(id);
        h.setHotelName(hotel.getHotelName());
        h.setNumberOfStars(hotel.getNumberOfStars());
        return this.saveHotel(h);
    }


    @Override
    public void deleteById(Long id) {
        this.hotelRepository.deleteById(id);
    }
}
