package proekt_wp.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proekt_wp.demo.models.Korisnik;

import java.util.List;
import java.util.Optional;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik,Long> {
    List<Korisnik> findAll();
    Optional<Korisnik> findById(Long id);
    Korisnik save(Korisnik korisnik);
    void deleteById(long id);


}
