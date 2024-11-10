CREATE PROCEDURE Crear_Ofertas_Completo
AS
BEGIN
	DELETE FROM Ofertas_empleo_completo

	INSERT INTO Ofertas_empleo_completo (
		Codigo_Oferta,
		Titulo_Oferta,
		Descripcion_Oferta,
		Experiencia,
		Salario_Ingresado,
		Cantidad_Ofertas,
		Teletrabajo,
		Discapacidad,
		Cargo,
		Fecha_Publicacion,
		Fecha_Vencimiento,
		ID_Prestador,
		Prestadores,
		Tipo_Contrato,
		Nivel_Estudios,
		Disciplinas,
		ID_Empleador,
		Empleador,
		Tipo_Documento_Empleador,
		Departamentos,
		Municipios,
		Regiones
	)
	SELECT 
		oed.Codigo_Oferta,
		oed.Titulo_Oferta,
		oed.Descripcion_Oferta,
		oed.Experiencia,
		oed.Salario_Ingresado,
		oed.Cantidad_Ofertas,
		oed.Teletrabajo,
		oed.Discapacidad,
		oed.Cargo,
		oed.Fecha_Publicacion,
		oed.Fecha_Vencimiento,
		p.ID_Prestador,
		p.Nombre,
		tc.Nombre,
		ne.Nombre,
		di.Nombre,
		e.ID_Empleador,
		e.Nombre,
		td.Nombre,
		d.Nombre,
		m.Nombre,
		r.Nombre

	FROM Ofertas_Empleo_Desglosado oed
		JOIN Prestadores p ON oed.ID_Prestador = p.ID_Prestador
		JOIN Tipo_Contrato tc ON oed.ID_Tipo_Contrato = tc.ID_Tipo_Contrato
		JOIN Nivel_Estudios ne ON oed.ID_Nivel_Estudios = ne.ID_Nivel_Estudios
		JOIN Departamentos d ON oed.ID_Departamento = d.ID_Departamento
		JOIN Empleador e ON oed.ID_Empleador = e.ID_Empleador
		JOIN Municipios m ON oed.ID_Municipio = m.ID_Municipio
		JOIN Regiones r ON oed.ID_Region = r.ID_Region
		JOIN Disciplinas di ON oed.ID_Disciplina = di.ID_Disciplina
		JOIN Tipo_Documento td ON e.Tipo_Documento = td.ID_Tipo_Documento
END;