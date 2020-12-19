package proekt_wp.demo.services;


import proekt_wp.demo.models.Grad;

import java.io.IOException;
import java.util.List;

public interface GradService {
    Grad findById(Long id);
    List<Grad> findAll();
    Grad save(Grad grad);
    Grad update(Long id, Grad grad);

    void deleteById(Long id);
    Grad updateProduct(Long id, Grad grad) throws IOException;

}
