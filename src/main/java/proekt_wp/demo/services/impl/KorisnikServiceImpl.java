package proekt_wp.demo.services.impl;
import org.springframework.stereotype.Service;
import proekt_wp.demo.models.Korisnik;
import proekt_wp.demo.models.Trip;
import proekt_wp.demo.models.exceptions.ExceptionTripNotFound;
import proekt_wp.demo.repository.KorisnikRepository;
import proekt_wp.demo.services.KorisnikService;
import proekt_wp.demo.services.tripService;

import java.io.IOException;
import java.util.List;

@Service
public class KorisnikServiceImpl implements KorisnikService {

    private final KorisnikRepository korisnikRepository;
    private final tripService tripService;
    public KorisnikServiceImpl(KorisnikRepository korisnikRepository, proekt_wp.demo.services.tripService tripService) {
        this.korisnikRepository = korisnikRepository;
        this.tripService = tripService;
    }

    @Override
    public List<Korisnik> getAllKorisnici() {
        return this.korisnikRepository.findAll();
    }

    @Override
    public Korisnik findById(Long id) {
        return this.korisnikRepository.findById(id).orElseThrow(()->new ExceptionTripNotFound(id));
    }

    @Override
    public Korisnik saveKorisnik(Korisnik korisnik) {
        Trip trip = this.tripService.findById(korisnik.getTrips().getIdTrip());
        if(trip != null){
        korisnik.setTrips(trip);}
        return this.korisnikRepository.save(korisnik);
    }

    @Override
    public Korisnik updateKorisnik(Long id, Korisnik korisnik) throws IOException {
        Korisnik k = this.findById(id);
        k.setName(korisnik.getName());
        k.setLastname(korisnik.getLastname());
        return this.saveKorisnik(k);
    }

    @Override
    public void deleteById(long id) {
        this.korisnikRepository.deleteById(id);
    }
}


