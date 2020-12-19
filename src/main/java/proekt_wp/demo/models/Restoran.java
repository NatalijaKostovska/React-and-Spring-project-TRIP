package proekt_wp.demo.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class Restoran {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="idRestoran", nullable=false, updatable=false)
    private Long idRestoran;
    private String name;
    private Integer stars;
    private String opis;

    public Long getIdRestoran() {
        return idRestoran;
    }

    public void setIdRestoran(Long idRestoran) {
        this.idRestoran = idRestoran;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getStars() {
        return stars;
    }

    public void setStars(Integer stars) {
        this.stars = stars;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }
}
