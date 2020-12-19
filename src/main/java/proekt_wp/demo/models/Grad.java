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
public class Grad {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="idGrad", nullable=false, updatable=false)
    private Long idGrad;
    private String gradIme;

    public Long getIdGrad() {
        return idGrad;
    }

    public void setIdGrad(Long idGrad) {
        this.idGrad = idGrad;
    }

    public String getGradIme() {
        return gradIme;
    }

    public void setGradIme(String gradIme) {
        this.gradIme = gradIme;
    }
}