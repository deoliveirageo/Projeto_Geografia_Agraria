## Cria a tabela para cálculo do ndvi mensal 


CREATE TABLE ndvi.ndvi_meses_aoi (
    rid integer PRIMARY KEY,
    mes text NOT NULL,
    mes_numero integer NOT NULL,
    ano integer NOT NULL,
    estacao text NOT NULL,
    ordem_temporal integer NOT NULL
);

## Insere os parâmetros dos atributos para organização dos meses segundo a ordem cronológica 

INSERT INTO ndvi.ndvi_meses_aoi
    (rid, mes, mes_numero, ano, estacao, ordem_temporal)
VALUES
    (5, 'Junho', 6, 2025, 'Seca', 1),
    (4, 'Julho', 7, 2025, 'Seca', 2),
    (1, 'Agosto', 8, 2025, 'Seca', 3),
    (8, 'Setembro', 9, 2025, 'Seca', 4),
    (7, 'Novembro', 11, 2025, 'Chuvosa', 5),
    (2, 'Dezembro', 12, 2025, 'Chuvosa', 6),
    (3, 'Fevereiro', 2, 2026, 'Chuvosa', 7),
    (6, 'Marco', 3, 2026, 'Chuvosa', 8);
