package com.bolsadeideas.springboot.backend.apirest.models.services;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Producto;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Proveedor;

public interface IClienteService {

	public List<Producto> findAll();
	
	public Page<Producto> findAll(Pageable pageable);
	
	public Producto findById(Long id);
	
	public Producto save(Producto producto);
	
	public void delete(Long id);
	
	public List<Proveedor> findAllProveedores();
	
	public Map<String, Long> getCantidadClientesPorRegion();

}
