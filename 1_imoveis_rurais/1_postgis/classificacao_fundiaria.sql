
--Classificação de imóveis rurais segundo classes fundiárias; 


ALTER TABLE sicar."car_aoi" 

ADD COLUMN 
	classe_fundiaria VARCHAR(50);


UPDATE sicar."car_aoi"
SET classe_fundiaria = 
	CASE 
		WHEN m_fiscal < 1 THEN 'Minifúndio'
		WHEN m_fiscal >= 1 AND m_fiscal <= 4 THEN 'Pequena Propriedade' 
		WHEN m_fiscal > 4 AND m_fiscal <= 15 THEN 'Média Propriedade' 
		WHEN m_fiscal > 15 THEN 'Latifúndio' 
		ELSE 'Indefinido' 
	END;
	