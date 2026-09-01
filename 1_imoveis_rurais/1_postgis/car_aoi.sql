--Recorte dos polígonos de imóveis rurais que instersectam a área de estudo; 

CREATE TABLE sicar."car_aoi" AS

SELECT 
	sicar."sicar_completo".*
FROM 
	sicar."sicar_completo"
JOIN 
	sigef_snci."fazenda_salvia_tot"
ON 
	ST_Intersects(sicar."sicar_completo".geom, sigef_snci."fazenda_salvia_tot".geom)
WHERE 
	ST_IsValid(sicar."sicar_completo".geom)
AND
    ST_IsValid(sigef_snci."fazenda_salvia_tot".geom);

	
-- Anexando novo ID as feições; 
	

ALTER TABLE sicar."car_aoi" ADD COLUMN id_novo SERIAL PRIMARY KEY;


CREATE INDEX idx_car_aoi ON sicar."car_aoi" USING GIST (geom);	