--Consulta de quantidade de pontos de captação por unidade hidrográfica

SELECT
    uh_nome,
	COUNT(*) AS qtd_pontos_captacao
	FROM outorga_captacao_subterranea."outorga_captacao_subterranea_aoi"
	GROUP BY uh_nome
	ORDER BY uh_nome;

-- Consulta de pontos de captação por finalidade de uso por unidade hidrográfica

SELECT
    uh_nome,
    finalida_1,
    COUNT(*) AS qtd_outorgas,
    SUM(va_max) AS vazao_total_outorgada
FROM outorga_captacao_subterranea."outorga_captacao_subterranea_aoi"
WHERE finalida_1 IS NOT NULL
GROUP BY
    uh_nome,
    finalida_1
ORDER BY
    uh_nome,
    finalida_1;
	
-- Cálculo de tipos de poço por unidade hidrográfica

SELECT 
    uh_nome,
    tipo_poco,
    COUNT(*) AS qtd_poco_por_tipo
FROM outorga_captacao_subterranea.outorga_captacao_subterranea_aoi
GROUP BY uh_nome, tipo_poco
ORDER BY uh_nome, tipo_poco;
