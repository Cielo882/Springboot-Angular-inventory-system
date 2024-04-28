package com.bolsadeideas.springboot.backend.apirest.models.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bolsadeideas.springboot.backend.apirest.models.dao.IClienteDao;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Producto;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Proveedor;

@Service
public class ClienteServiceImpl implements IClienteService {

	@Autowired
	private IClienteDao clienteDao;

	@Override
	@Transactional(readOnly = true)
	public List<Producto> findAll() {
		return (List<Producto>) clienteDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Page<Producto> findAll(Pageable pageable) {
		return clienteDao.findAll(pageable);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Producto findById(Long id) {
		return clienteDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Producto save(Producto producto) {
		return clienteDao.save(producto);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		clienteDao.deleteById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Proveedor> findAllProveedores() {
		return clienteDao.findAllProveedores();
	}

	@Override
    @Transactional(readOnly = true)
    public Map<String, Long> getCantidadClientesPorRegion() {
        List<Object[]> results = clienteDao.getCantidadClientesPorRegion();
        Map<String, Long> cantidadPorRegion = new HashMap<>();
        for (Object[] result : results) {
            String region = (String) result[0];
            Long cantidad =  (Long) result[1];
            cantidadPorRegion.put(region, cantidad);
        }
        return cantidadPorRegion;
    }
}
