package proekt_wp.demo.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import javax.persistence.*;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idTrip;
    private String name;
    private String description;

    @Column(name = "image")
    @Lob
    private String imageBase64;
    @ManyToOne
    private Hotel hotel;
    @OneToOne
    private Grad grad;
    @ManyToOne
    private Restoran restoran;
//    @Onetomany


    public Long getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(Long idTrip) {
        this.idTrip = idTrip;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public Grad getGrad() {
        return grad;
    }

    public void setGrad(Grad grad) {
        this.grad = grad;
    }

    public Restoran getRestoran() {
        return restoran;
    }

    public void setRestoran(Restoran restoran) {
        this.restoran = restoran;
    }
}
