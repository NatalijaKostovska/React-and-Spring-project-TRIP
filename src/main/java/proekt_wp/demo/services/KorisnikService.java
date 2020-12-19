package proekt_wp.demo.services;
import proekt_wp.demo.models.Korisnik;

import java.io.IOException;
import java.util.List;

public interface KorisnikService {
    List<Korisnik> getAllKorisnici();
    Korisnik findById(Long id);
    Korisnik saveKorisnik(Korisnik korisnik);
    Korisnik updateKorisnik(Long id, Korisnik korisnik) throws IOException;
    void deleteById(long id);
}
