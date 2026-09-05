-- Classificação das imóveis rurais filtrAando pelo cod_imovel 

ALTER TABLE sicar."car_aoi"
ADD COLUMN classe_fundiaria TEXT;


UPDATE sicar."car_aoi"

SET classe_fundiaria = classificacao.classe_fundiaria

FROM
(
    SELECT
        cod_imovel,

        CASE
            WHEN MAX(m_fiscal) < 1
                THEN 'Minifúndio'

            WHEN MAX(m_fiscal) >= 1
             AND MAX(m_fiscal) <= 4
                THEN 'Pequena propriedade'

            WHEN MAX(m_fiscal) > 4
             AND MAX(m_fiscal) <= 15
                THEN 'Média propriedade'

            WHEN MAX(m_fiscal) > 15
                THEN 'Latifúndio'

            ELSE 'Não classificado'
        END AS classe_fundiaria

    FROM
        sicar."car_aoi"

    GROUP BY
        cod_imovel
)
AS classificacao

WHERE
    sicar."car_aoi".cod_imovel = classificacao.cod_imovel;
