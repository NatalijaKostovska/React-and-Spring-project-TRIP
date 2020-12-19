//package proekt_wp.demo.web_controller;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.*;
//import proekt_wp.demo.models.Korisnik;
//import proekt_wp.demo.models.Trip;
//import proekt_wp.demo.services.KorisnikService;
//import proekt_wp.demo.services.tripService;
//
//import javax.validation.Valid;
//import java.io.IOException;
//import java.util.List;
//
//@Controller
//@RequestMapping("/customers")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CustomerController {
//
//
//    private final KorisnikService korisnikService;
//    private final tripService tripService;
//    public CustomerController(KorisnikService korisnikService, tripService tripService) {
//        this.korisnikService = korisnikService;
//        this.tripService = tripService;
//    }
//    @GetMapping
//    public String showAllCustomer(Model model){
//        List<Korisnik> korisnikList = this.korisnikService.getAllKorisnici();
//        model.addAttribute("korisnikList", korisnikList);
//        return "customers";
//    }
//    @GetMapping("add-new-customer")
//    public String addNewCustomer(Model model){
//        List<Trip>tripList = this.tripService.findAllTrips();
//        model.addAttribute("tripList",tripList);
//        model.addAttribute("korisnik", new Korisnik());
//        return "add-customer";
//    }
//
//    @PostMapping("add-new-customer")
//    public String saveCustomer(
//            @Valid Korisnik korisnik,
//            BindingResult bindingResult,
//            Model model) throws IOException {
//        if(bindingResult.hasErrors()){
//            List<Trip>tripList = this.tripService.findAllTrips();
//            model.addAttribute("tripList",tripList);
//            return "customers";
//        }
//        this.korisnikService.saveKorisnik(korisnik);
//        return "redirect:/customers";
//    }
//    @PostMapping("/{id}/delete")
//    public String deleteCustomer(@PathVariable Long id){
//        this.korisnikService.deleteById(id);
//        return "redirect:/customers";
//    }
//     @GetMapping("/{id}/edit")
//    public String editCustomer(Model model, @PathVariable Long id){
//        try{
//            Korisnik korisnik = this.korisnikService.findById(id);
//            List<Trip> trip = this.tripService.findAllTrips();
//            model.addAttribute("tripList",trip);
//            model.addAttribute("korisnik", korisnik);
//            return "add-customer";
//        }catch(RuntimeException ex){
//            return "redirect:/customers?error=" + ex.getMessage();
//        }
//    }
//}
