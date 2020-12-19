package proekt_wp.demo.bootstrap;

import lombok.Getter;
import org.springframework.stereotype.Component;
import proekt_wp.demo.models.Hotel;
import proekt_wp.demo.models.Restoran;
import proekt_wp.demo.models.Trip;
import proekt_wp.demo.repository.HotelRepository;
import proekt_wp.demo.repository.RestoranRepository;
import proekt_wp.demo.repository.TripRepository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
@Getter
public class DataHolder {

    public static final List<Trip> trips = new ArrayList<>();
    public static final List<Hotel> hoteli = new ArrayList<>();
    public static final List<Restoran> restorani = new ArrayList<>();

    public final TripRepository jpaPatuvanjaRepository;
    public final HotelRepository jpaHotelRepository;
    public final RestoranRepository restoranRepository;

    public DataHolder(TripRepository jpaPatuvanjaRepository, HotelRepository jpaHotelRepository, RestoranRepository restoranRepository) {
        this.jpaPatuvanjaRepository = jpaPatuvanjaRepository;
        this.jpaHotelRepository = jpaHotelRepository;
        this.restoranRepository = restoranRepository;
    }

    @PostConstruct
    public void init() {
        trips.add(new Trip(11L,"TripToSkopje","lalalala",null,null,null,null));
        hoteli.add(new Hotel(2L,"Molika",5));

    }
}
