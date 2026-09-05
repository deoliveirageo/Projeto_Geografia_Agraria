--Recorte dos polígonos de imóveis rurais que instersectam a área de estudo; 

-- Antes do recorte dos imóveis rurais dentro da área de estudo, foi realizado uma filtragem de redundâncias e polígonos duplicados na área  de estudo; 

CREATE TABLE sicar."car_aoi" AS

SELECT
    sicar."sicar_geometria_subtraido_s****_2".cod_imovel,
    sicar."sicar_geometria_subtraido_s****_2".m_fiscal,

    ST_Intersection(
        sicar."sicar_geometria_subtraido_s****_2".geom,
        (
            SELECT
                ST_Union(
                    sigef_snci."fazenda_s****_tot".geom
                )
            FROM
                sigef_snci."fazenda_s****_tot"
        )
    ) AS geom

FROM
    sicar."sicar_geometria_subtraido_s****_2"

WHERE
    ST_Intersects(
        sicar."sicar_geometria_subtraido_s****_2".geom,
        (
            SELECT
                ST_Union(
                    sigef_snci."fazenda_s****_tot".geom
                )
            FROM
                sigef_snci."fazenda_s****_tot"
        )
    );

