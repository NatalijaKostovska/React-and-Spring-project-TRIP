package proekt_wp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proekt_wp.demo.models.Hotel;
import proekt_wp.demo.models.Trip;

import java.util.List;
import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel,Long> {
    Optional<Hotel> findById(Long id);
    List<Hotel> findAll();
    Hotel save(Hotel hotel);
    void deleteById(long id);

}
