-- Cria o recorte da Bacia Hidrográfica do Rio São Bartolomeu que intersecta a área de estudo

CREATE TABLE unidades_hidrograficas_df."uhs_aoi" AS

SELECT luh_nm, geom 

    FROM unidades_hidrograficas_df."unidades_hidrograficas"
    WHERE luh_nm IN (
        
        'Alto Rio São Bartolomeu',
        'Médio Rio São Bartolomeu',
        'Ribeirão Sobradinho'
); 