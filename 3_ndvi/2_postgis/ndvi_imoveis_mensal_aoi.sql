## Cria a tabela de ndvi medio mensal por classe fundiária 


CREATE TABLE ndvi.ndvi_imoveis_mensal_aoi AS

SELECT
    car.id,
    car.classe_fundiaria,
    raster.rid,
    meses.mes,
    meses.mes_numero,
    meses.ano,
    meses.estacao,
    meses.ordem_temporal,

    (
        ST_SummaryStats(
            ST_Clip(
                raster.rast,
                1,
                car.geom,
                'NaN'::double precision,
                true
            ),
            1,
            true
        )
    ).mean AS ndvi_medio

FROM sicar.car_aoi AS car

INNER JOIN ndvi.ndvi_mensal AS raster
    ON ST_Intersects(car.geom, raster.rast)

INNER JOIN ndvi.ndvi_meses AS meses
    ON raster.rid = meses.rid

WHERE car.geom IS NOT NULL

ORDER BY
    car.classe_fundiaria,
    car.id,
    meses.ordem_temporal;