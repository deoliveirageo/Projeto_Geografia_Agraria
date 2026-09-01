## Cria a tabela de estatísticas com ndvi medio mensal e desvio padrao entre imoveis da mesma classe


CREATE TABLE ndvi.ndvi_classe_estat_aoi AS

SELECT
    classe_fundiaria,
    rid,
    mes,
    mes_numero,
    ano,
    estacao,
    ordem_temporal,

    ROUND(
        AVG(ndvi_medio)::numeric,
        4
    ) AS ndvi_medio_classe,

    ROUND(
        STDDEV(ndvi_medio)::numeric,
        4
    ) AS desvio_padrao_classe,

    COUNT(*) AS quantidade_imoveis

FROM ndvi.ndvi_imoveis_mensal_aoi

GROUP BY
    classe_fundiaria,
    rid,
    mes,
    mes_numero,
    ano,
    estacao,
    ordem_temporal

ORDER BY
    classe_fundiaria,
    ordem_temporal;