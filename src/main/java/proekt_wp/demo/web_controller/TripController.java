package proekt_wp.demo.web_controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import proekt_wp.demo.models.*;
import proekt_wp.demo.services.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/trips")
@CrossOrigin(origins = "http://localhost:3000")
public class TripController {
    private final tripService tripService;
    private final hotelService hotelService;
    private final GradService gradService;
    private final ResoranService restoranService;
    private final KorisnikService korisnikService;

    public TripController(tripService tripService, hotelService hotelService, GradService gradService, ResoranService restoranService, KorisnikService korisnikService) {
        this.tripService = tripService;
        this.hotelService = hotelService;
        this.gradService = gradService;
        this.restoranService = restoranService;
        this.korisnikService = korisnikService;
    }
    @GetMapping
    public String showAll(Model model){
        List<Trip> trips = this.tripService.findAllTrips();
        model.addAttribute("trips",trips);
        return "trips";
    }
    @GetMapping("/hotels")
    public String showAllHoteli(Model model){
        List<Hotel> hotels = this.hotelService.findAllHotels();
        model.addAttribute("hotels", hotels);
        return "hotels";
    }

    @GetMapping("/towns")
    public String showAllCities(Model model){
        List<Grad> cities = this.gradService.findAll();
        model.addAttribute("city", cities);
        return "gradovi";
    }

    @GetMapping("/restaurants")
    public String showAllRestaurants(Model model){
        List<Restoran> restorani = this.restoranService.getAllRestorani();
        model.addAttribute("restorani", restorani);
        return "restorani";
    }

    @GetMapping("/customers")
    public String showAllCustomers(Model model){
        List<Korisnik> korisnikList = this.korisnikService.getAllKorisnici();
        model.addAttribute("korisnikList", korisnikList);
        return "customers";
    }

    @GetMapping("/add-new-trip")
    public String addNewTrip(Model model){
        List<Hotel>hotelList = this.hotelService.findAllHotels();
        List<Grad>gradList = this.gradService.findAll();
        List<Restoran>restoranList = this.restoranService.getAllRestorani();
        model.addAttribute("gradList",gradList);
        model.addAttribute("hotel",hotelList);
        model.addAttribute("restoran",restoranList);
        model.addAttribute("trip", new Trip());
        return "add-trip";
    }
    @GetMapping("/add-new-hotel")
    public String addNewHotel(Model model){
        model.addAttribute("hotel", new Hotel());
        return "add-hotel";
    }
    @GetMapping("/add-new-customer")
    public String addNewCustomer(Model model){
        model.addAttribute("tripList", this.tripService.findAllTrips());
        model.addAttribute("korisnik", new Korisnik());
        return "add-customer";
    }
    @GetMapping("/add-new-city")
    public String addNewCity(Model model){
        model.addAttribute("city", new Grad());
        return "add-city";
    }
    @GetMapping("/add-new-restoran")
    public String addNewRestoran(Model model){
        model.addAttribute("restoran", new Restoran());
        return "add-restoran";
    }
    @PostMapping("/add-new-restoran")
    public String saveRestoran(@Valid Restoran restoran,BindingResult bindingResult, Model model){
        if(bindingResult.hasErrors()){
            model.addAttribute("restoran", new Restoran());
            return "add-restoran";
        }
        this.restoranService.saveRestoran(restoran);
        return "redirect:/trips";
    }
    @PostMapping("/{id}/delete")
    public String deleteTrip(@PathVariable Long id){
        this.tripService.deleteById(id);
        return "redirect:/trips";
    }
    @PostMapping("/add-new-city")
    public String saveCity(
            @Valid Grad city,
            BindingResult bindingResult,
            Model model) throws IOException {
        if(bindingResult.hasErrors()){
            model.addAttribute("city", new Grad());
            return "add-city";
        }
        this.gradService.save(city);
        return "redirect:/trips";
    }

    @PostMapping("/add-new-hotel")
    public String saveHotel(
            @Valid Hotel hotel,
            BindingResult bindingResult,
            Model model) throws IOException {
        if(bindingResult.hasErrors()){
            model.addAttribute("hotel", new Hotel());
            return "add-hotel";
        }
        this.hotelService.saveHotel(hotel);
        return "redirect:/trips";
    }
    @PostMapping("/add-new-customer")
    public String saveCustomer(
            @Valid Korisnik korisnik,
            BindingResult bindingResult,
            Model model) throws IOException {
        if(bindingResult.hasErrors()){
            model.addAttribute("korisnik", new Korisnik());
            return "add-customer";
        }
        this.korisnikService.saveKorisnik(korisnik);
        return "redirect:/trips";
    }
    @GetMapping("/{id}/edit")
    public String editTrip(Model model, @PathVariable Long id){
        try{
            Trip trip = this.tripService.findById(id);
            List<Hotel>hotelList = this.hotelService.findAllHotels();
            List<Grad>gradList = this.gradService.findAll();
            List<Restoran>restoranList = this.restoranService.getAllRestorani();
            model.addAttribute("hotel",hotelList);
            model.addAttribute("trip",trip);
            model.addAttribute("city", gradList);
            model.addAttribute("restoran", restoranList);


            return "add-trip";
        }catch(RuntimeException ex){
            return "redirect:/trips?error=" + ex.getMessage();
        }
    }
    @PostMapping("/add-new-trip")
    public String save(@Valid Trip patuvanja,
                       Model model,
                       BindingResult bindingResult,
                       @RequestParam MultipartFile image) {
        if (bindingResult.hasErrors()) {
            List<Hotel>hotelList = this.hotelService.findAllHotels();
            List<Grad>gradList = this.gradService.findAll();
            List<Restoran>restoranList = this.restoranService.getAllRestorani();
            model.addAttribute("hotelList", hotelList);
            model.addAttribute("gradList", gradList);
            model.addAttribute("restoranList", restoranList);
            return "add-trip";
        }
        try {
            this.tripService.saveTrip(patuvanja,image);
        } catch ( IOException e ) {
            e.printStackTrace();
        }
        return "redirect:/trips";

    }
}
