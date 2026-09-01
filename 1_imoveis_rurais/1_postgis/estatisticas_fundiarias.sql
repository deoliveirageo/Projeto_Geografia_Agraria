--Estatísticas de percentual de imóveis por classe fundiária e qtde. de imóveis por classe fundiária; 

SELECT 
    classe_fundiaria,
    COUNT(*) AS total_imoveis,
    ROUND(SUM(area), 2) AS area_total_ha,
    ROUND((COUNT(*) * 100.0) / SUM(COUNT(*)) OVER(), 2) AS porcentagem_de_imoveis,
    ROUND((SUM(area) * 100.0) / SUM(SUM(area)) OVER(), 2) AS porcentagem_de_area_ocupada
FROM 
    sicar.car_aoi
GROUP BY 
    classe_fundiaria
ORDER BY 
    area_total_ha DESC;