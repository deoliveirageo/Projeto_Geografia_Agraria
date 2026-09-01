## Cria a tabela de estatísticas com o valor médio histórico (2017-2024) para cada estação (seca e chuvosa) por classe fundiária

CREATE TABLE ndvi.ndvi_historico_classe AS

SELECT
    car.classe_fundiaria,

    CASE
        WHEN r.rid = 4 THEN 'Seca'
        WHEN r.rid = 3 THEN 'Chuvosa'
    END AS estacao,

    ROUND(
        AVG(
            (
                ST_SummaryStats(
                    ST_Clip(
                        r.rast,
                        1,
                        car.geom,
                        -9999,
                        true
                    ),
                    1,
                    true
                )
            ).mean
        )::numeric,
        4
    ) AS ndvi_medio_classe,

    COUNT(*) AS quantidade_imoveis

FROM sicar.car_aoi AS car

JOIN ndvi.ndvi_historico_corrigido AS r
    ON ST_Intersects(
        car.geom,
        ST_ConvexHull(r.rast)
    )

WHERE
    car.geom IS NOT NULL

GROUP BY
    car.classe_fundiaria,
    r.rid

ORDER BY
    car.classe_fundiaria,
    r.rid;