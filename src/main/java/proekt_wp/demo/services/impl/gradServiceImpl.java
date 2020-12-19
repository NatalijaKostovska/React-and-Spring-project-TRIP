package proekt_wp.demo.services.impl;
import org.springframework.stereotype.Service;
import proekt_wp.demo.models.Grad;
import proekt_wp.demo.models.exceptions.ExceptionTripNotFound;
import proekt_wp.demo.repository.GradRepository;
import proekt_wp.demo.services.GradService;

import java.io.IOException;
import java.util.List;

@Service
public class gradServiceImpl implements GradService {
    private final GradRepository gradRepository;

    public gradServiceImpl(GradRepository gradRepository) {
        this.gradRepository = gradRepository;
    }


    @Override
    public Grad findById(Long id) {
        return this.gradRepository.findById(id).orElseThrow(()->new ExceptionTripNotFound(id));
    }
    @Override
    public Grad update(Long id, Grad grad) {
        Grad m = this.findById(id);
        m.setGradIme(grad.getGradIme());
        return this.gradRepository.save(m);
    }


    @Override
    public List<Grad> findAll() {
        return this.gradRepository.findAll();
    }

    @Override
    public Grad save(Grad grad) {
        return this.gradRepository.save(grad);
    }

    @Override
    public void deleteById(Long id) {
        this.gradRepository.deleteById(id);
    }

    @Override
    public Grad updateProduct(Long id, Grad grad) throws IOException {
        Grad g = this.findById(id);
        grad.setGradIme(grad.getGradIme());
        return this.gradRepository.save(g);
    }
}
