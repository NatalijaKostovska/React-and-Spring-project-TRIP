package proekt_wp.demo.services.impl;

import org.springframework.stereotype.Service;
import proekt_wp.demo.models.Restoran;
import proekt_wp.demo.models.exceptions.ExceptionTripNotFound;
import proekt_wp.demo.repository.RestoranRepository;
import proekt_wp.demo.services.ResoranService;

import java.io.IOException;
import java.util.List;

@Service
public class RestoranServiceImpl implements ResoranService {
    private final RestoranRepository restoranRepository;

    public RestoranServiceImpl(RestoranRepository restoranRepository) {
        this.restoranRepository = restoranRepository;
    }

    @Override
    public List<Restoran> getAllRestorani() {
        return this.restoranRepository.findAll();
    }

    @Override
    public Restoran findById(Long id) {
        return this.restoranRepository.findById(id).orElseThrow(()->new ExceptionTripNotFound(id));
    }


    @Override
    public Restoran saveRestoran(Restoran restoran) {
        return this.restoranRepository.save(restoran);
    }

    @Override
    public Restoran updateRestoran(Long id, Restoran restoran) throws IOException {
        Restoran r = this.findById(id);
        r.setName(restoran.getName());
        r.setOpis(restoran.getOpis());
        r.setStars(restoran.getStars());
        return this.saveRestoran(r);

    }

    @Override
    public void deleteById(long id) {
        this.restoranRepository.deleteById(id);
    }
}
