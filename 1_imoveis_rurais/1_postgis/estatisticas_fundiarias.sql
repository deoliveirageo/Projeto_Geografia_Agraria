-- Cálculo de estatísticas dos imóveis rurais quanto as classes com filtragem por 'cod_imovel' para eliminar redundância na contagem de polígonos sob mesmo código

SELECT
    classe_fundiaria,

    COUNT(*) AS numero_imoveis,

    ROUND(
        SUM(area_ha)::numeric,
        2
    ) AS area_ha,

    ROUND(
        (
            SUM(area_ha)
            /
            NULLIF(
                SUM(SUM(area_ha)) OVER (),
                0
            )
            * 100
        )::numeric,
        2
    ) AS percentual_area,

    ROUND(
        (
            COUNT(*)::numeric
            /
            NULLIF(
                SUM(COUNT(*)) OVER (),
                0
            )
            * 100
        )::numeric,
        2
    ) AS percentual_imoveis

FROM
(
    SELECT
        cod_imovel,

        MAX(classe_fundiaria) AS classe_fundiaria,

        ST_Area(
            ST_UnaryUnion(
                ST_Collect(geom)
            )
        ) / 10000.0 AS area_ha

    FROM
        sicar."car_aoi"

    GROUP BY
        cod_imovel
)

WHERE
    classe_fundiaria <> 'Não classificado'

GROUP BY
    classe_fundiaria

ORDER BY
    CASE classe_fundiaria
        WHEN 'Minifúndio' THEN 1
        WHEN 'Pequena propriedade' THEN 2
        WHEN 'Média propriedade' THEN 3
        WHEN 'Latifúndio' THEN 4
    END;