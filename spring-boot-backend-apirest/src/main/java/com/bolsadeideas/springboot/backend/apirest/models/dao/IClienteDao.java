package com.bolsadeideas.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Producto;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Proveedor;

public interface IClienteDao extends JpaRepository<Producto, Long>{

	@Query("from Proveedor")
	public List<Proveedor> findAllProveedores();
	

    
	@Query("SELECT proveedor.nombre AS nombre_proveedor, COUNT(productos.id) AS cantidad_productos " +
	           "FROM Proveedor proveedor " +
	           "LEFT JOIN proveedor.productos productos " +
	           "GROUP BY proveedor.nombre")
     List<Object[]> getCantidadClientesPorRegion();
}
