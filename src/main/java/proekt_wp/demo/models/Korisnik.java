package proekt_wp.demo.models;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
@Entity
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class Korisnik {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="idKorisnik", nullable=false, updatable=false)
    private Long idKorisnik;
    private String name;
    private String lastname;
    @ManyToOne
    private Trip trips;

    public Long getIdKorisnik() {
        return idKorisnik;
    }

    public void setIdKorisnik(Long idKorisnik) {
        this.idKorisnik = idKorisnik;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Trip getTrips() {
        return trips;
    }

    public void setTrips(Trip trips) {
        this.trips = trips;
    }
}
