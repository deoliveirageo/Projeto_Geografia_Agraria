--Operação espacial para realizar o recorte da camada de outorgas subterrâneas do df dentro da aoi (área de estudo)

CREATE TABLE 
	outorga_captacao_subterranea."outorga_captacao_subterranea_aoi" AS
	
SELECT 
	outorga_captacao_subterranea."outorga_captacao_subterranea_df".*,

	ST_Intersection(unidades_hidrograficas_df."uhs_aoi".geom, 
	outorga_captacao_subterranea."outorga_captacao_subterranea_df".geom
	) AS geom_outorga_sub_aoi

FROM 
	outorga_captacao_subterranea."outorga_captacao_subterranea_df"
	
JOIN 
	unidades_hidrograficas_df."uhs_aoi"

ON 
	ST_Intersects(unidades_hidrograficas_df."uhs_aoi".geom, 
	outorga_captacao_subterranea.outorga_captacao_subterranea_df.geom
	);
	
	
-- 1. Remover a coluna geom antiga
ALTER TABLE outorga_captacao_subterranea.outorga_captacao_subterranea_aoi
DROP COLUMN geom;

-- 2. Renomear a coluna geom_outorga_sub_aoi para geom
ALTER TABLE outorga_captacao_subterranea.outorga_captacao_subterranea_aoi
RENAME COLUMN geom_outorga_sub_aoi TO geom;

-- 3. Definir a chave primária na coluna id
ALTER TABLE outorga_captacao_subterranea.outorga_captacao_subterranea_aoi
ADD PRIMARY KEY (id);

-- 4. Criar índice espacial na coluna geom
CREATE INDEX idx_outorgas_sub_aoi
ON outorga_captacao_subterranea.outorga_captacao_subterranea_aoi
USING gist (geom);

ALTER TABLE outorga_captacao_subterranea.outorga_captacao_subterranea_aoi
ALTER COLUMN geom TYPE geometry(MultiPoint, 31983)
USING ST_Multi(geom);


