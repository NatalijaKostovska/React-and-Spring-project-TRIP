package proekt_wp.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proekt_wp.demo.models.Grad;

import java.util.List;
import java.util.Optional;

@Repository
public interface GradRepository extends JpaRepository<Grad,Long> {
    Optional<Grad> findById(Long id);
    List<Grad> findAll();
    Grad save(Grad restoran);
    void deleteById(long id);

}
