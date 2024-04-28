package com.bolsadeideas.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Cliente;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Region;

public interface IClienteDao extends JpaRepository<Cliente, Long>{

	@Query("from Region")
	public List<Region> findAllRegiones();
	

    
	@Query("SELECT region.nombre AS nombre_region, COUNT(clientes.id) AS cantidad_clientes " +
	           "FROM Region region " +
	           "LEFT JOIN region.clientes clientes " +
	           "GROUP BY region.nombre")
     List<Object[]> getCantidadClientesPorRegion();
}
