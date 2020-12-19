package proekt_wp.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proekt_wp.demo.models.Restoran;

import java.util.List;
import java.util.Optional;

@Repository
public interface RestoranRepository extends JpaRepository<Restoran,Long> {
    Optional<Restoran> findById(Long id);
    List<Restoran> findAll();
    Restoran save(Restoran restoran);
    void deleteById(long id);

}

