package proekt_wp.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proekt_wp.demo.models.Trip;

import java.util.List;
import java.util.Optional;

@Repository
public interface TripRepository extends JpaRepository<Trip,Long> {
//    Trip save(Trip trip);
    List<Trip> findAll();
    Optional<Trip> findById(Long id);
    void deleteById(long id);

}