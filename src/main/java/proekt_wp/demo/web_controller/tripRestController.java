package proekt_wp.demo.web_controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import proekt_wp.demo.models.*;
import proekt_wp.demo.services.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class tripRestController {
    private final tripService tripService;
    private final hotelService hotelService;
    private final ResoranService resoranService;
    private final GradService gradService;
    private final KorisnikService korisnikService;
    public tripRestController(tripService tripService, hotelService hotelService, ResoranService resoranService, GradService gradService, KorisnikService korisnikService) {
        this.tripService = tripService;
        this.hotelService = hotelService;
        this.resoranService = resoranService;
        this.gradService = gradService;
        this.korisnikService = korisnikService;
    }
    @GetMapping("/customers")
    public List<Korisnik> findAllCustomers() {
        return this.korisnikService.getAllKorisnici();
    }
    @PostMapping("/customer")
    public Korisnik saveKorisnik(@RequestBody  Korisnik korisnik){
        return this.korisnikService.saveKorisnik(korisnik);
    }
    @GetMapping("/trips")
    public List<Trip> findAll() {
        return this.tripService.findAllTrips();
    }
    @GetMapping("/trips/hotels")
    public List<Hotel> findAllHotels() {
        return this.hotelService.findAllHotels();
    }
    @GetMapping("/trips/restaurants")
    public List<Restoran> findAllRestaurants () {
        return this.resoranService.getAllRestorani();
    }
    @GetMapping("/trips/cities")
    public List<Grad> findAllCities () {
        return this.gradService.findAll();
    }

    @GetMapping("/trips/{id}")
    public Trip findById(@PathVariable Long id) {
        return this.tripService.findById(id);
    }
    @GetMapping("/trips/hotel/{id}")
    public Hotel findByIdHotel(@PathVariable Long id) {
        return this.hotelService.findById(id);
    }
    @GetMapping("/trips/restaurants/{id}")
    public Restoran findByIdRestaurants(@PathVariable Long id) {
        return this.resoranService.findById(id);
    }
    @GetMapping("/trips/cities/{id}")
    public Grad findByIdCities(@PathVariable Long id) {
        return this.gradService.findById(id);
    }

    @PostMapping("/trip")
    public Trip save(@RequestBody @Valid Trip trip, @RequestParam(required = false) MultipartFile image) throws IOException {
        return this.tripService.saveTrip(trip, image);
    }
    @PostMapping("/trips/hotel")
    public Hotel saveHotel(@RequestBody @Valid Hotel hotel) {
        return this.hotelService.saveHotel(hotel);
    }
    @PostMapping("/trips/city")
    public Grad saveGrad(@RequestBody @Valid Grad grad){
        return this.gradService.save(grad);
    }

    @PostMapping("/trips/restaurants")
    public Restoran saveRetoran(@RequestBody @Valid Restoran restoran){
        return this.resoranService.saveRestoran(restoran);
    }


    @PutMapping("/city/{id}")
    public Grad update(@PathVariable Long id, @Valid Grad grad) {
        return this.gradService.update(id, grad);
    }


    @PutMapping("restoran/{id}")
    public Restoran update(@PathVariable Long id, @Valid Restoran restoran) throws IOException {
        return this.resoranService.updateRestoran(id, restoran);
    }

    @PutMapping("/trips/{id}")
    public Trip update(@PathVariable Long id,
                       @Valid Trip trip,
                       @RequestParam(required = false) MultipartFile image) throws IOException {
        return this.tripService.updateTrip(id, trip, image);
    }
    @DeleteMapping("/trips/{id}")
    public void delete(@PathVariable Long id) {
        this.tripService.deleteById(id);
    }
    @DeleteMapping("/trips/hotel/{id}")
    public void deleteHotel(@PathVariable Long id) {
        this.hotelService.deleteById(id);
    }
    @DeleteMapping("/trips/restaurants/{id}")
    public void deleteRestaurants(@PathVariable Long id) {
        this.resoranService.deleteById(id);
    }
    @DeleteMapping("/trips/city/{id}")
    public void deleteCity(@PathVariable Long id) {
        this.gradService.deleteById(id);
    }

}