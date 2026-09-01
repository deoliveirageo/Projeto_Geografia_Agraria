# Importacao e Analise de Rasters NDVI no PostGIS

Documentacao do fluxo de ingestao, organizacao e analise dos produtos raster de NDVI gerados no Google Earth Engine e armazenados no PostgreSQL/PostGIS.

O processo integra:

- Google Earth Engine;
- imagens Sentinel-2;
- produtos raster de NDVI;
- PostgreSQL/PostGIS;
- Malha do CAR (Cadastro Ambiental Rural) dos imoveis rurais;
- consultas SQL;
- Python/JupyterLab para analise e visualizacao.

---

## 1. Objetivo

Este diretorio documenta o processo de importacao e processamento dos produtos raster de NDVI no PostgreSQL/PostGIS.

Os produtos sao utilizados em duas escalas temporais:

1. medias sazonais e historicas de NDVI;
2. rasters mensais para analise da variacao sazonal.

A estrutura permite armazenar os produtos raster no PostGIS, realizar operacoes espaciais com os imoveis rurais e produzir estatisticas para posterior analise no Python.

---

## 2. Fluxo geral

O fluxo de processamento adotado no projeto e:

```text
Sentinel-2
    |
    v
Google Earth Engine
    |
    +-----------------------------+
    |                             |
    v                             v
Medias sazonais/historicas    Rasters mensais
    |                             |
    v                             v
GeoTIFF                       GeoTIFF
    |                             |
    v                             v
PostGIS                       PostGIS
    |                             |
    v                             v
ndvi.ndvi_medias_aoi         ndvi.ndvi_mensal_aoi
                                  |
                                  v
                            sicar.car_aoi
                                  |
                                  v
                       ndvi.ndvi_imoveis_mensal_aoi
                                  |
                                  v
                       ndvi.ndvi_classe_estat_aoi
                                  |
                                  v
                            Python/JupyterLab
                                  |
                     +------------+-------------+
                     |                          |
                     v                          v
              Curva sazonal mensal      Curva historica
                                        Seca -> Chuvosa
```

---

## 3. Sistema de referencia espacial

Os produtos raster utilizados no projeto estao em:

```text
EPSG:31983
```

Sistema:

```text
SIRGAS 2000 / UTM zona 23S
```

O SRID e informado ao `raster2pgsql` por meio do parametro:

```text
-s 31983
```

Esse parametro informa o sistema de referencia espacial do raster durante a importacao. Ele nao realiza uma reprojecao.

---

## 4. Estrutura do banco

Os produtos NDVI sao organizados no schema:

```text
ndvi
```

As principais tabelas raster sao:

```text
ndvi.ndvi_medias_aoi
ndvi.ndvi_mensal_aoi
```

As tabelas analiticas derivadas sao:

```text
ndvi.ndvi_imoveis_mensal_aoi
ndvi.ndvi_classe_estat_aoi
ndvi.ndvi_historico_corrigido
ndvi.ndvi_historico_classe
```

A camada espacial utilizada para o cruzamento com os rasters e:

```text
sicar.car_aoi
```

Estrutura logica:

```text
<PROJETO_POSTGRES>
|
+-- ndvi
|   |
|   +-- ndvi_medias_aoi
|   |
|   +-- ndvi_mensal_aoi
|   |
|   +-- ndvi_imoveis_mensal_aoi
|   |
|   +-- ndvi_classe_estat_aoi
|   |
|   +-- ndvi_historico_corrigido
|   |
|   +-- ndvi_historico_classe
|
+-- sicar
    |
    +-- car_aoi
```

---

## 5. Produtos raster

### 5.1 Medias sazonais e historicas

Foram utilizados quatro produtos raster:

| Produto | Periodo | Tipo |
|---|---|---|
| `NDVI_Medio_Estacao_Seca_2025.tif` | Junho a Setembro de 2025 | Media sazonal |
| `NDVI_Medio_Estacao_Chuvosa_2025_2026.tif` | Novembro de 2025 a Marco de 2026 | Media sazonal |
| `NDVI_Medio_Historico_Estacao_Seca_2017_2024.tif` | Junho a Setembro, 2017-2024 | Media historica |
| `NDVI_Medio_Historico_Estacao_Chuvosa_2017_2024.tif` | Novembro a Marco, 2017-2024 | Media historica |

Esses produtos sao armazenados na tabela:

```text
ndvi.ndvi_medias_aoi
```

---

### 5.2 Rasters mensais

Foram utilizados oito rasters mensais de NDVI para representar a variacao entre a estacao seca e a estacao chuvosa.

Os arquivos sao:

```text
NDVI_Junho_2025.tif
NDVI_Julho_2025.tif
NDVI_Agosto_2025.tif
NDVI_Setembro_2025.tif
NDVI_Novembro_2025.tif
NDVI_Dezembro_2025.tif
NDVI_Fevereiro_2026.tif
NDVI_Marco_2026.tif
```

Os produtos sao armazenados em:

```text
ndvi.ndvi_mensal_aoi
```

Os meses de outubro e janeiro nao possuem raster neste conjunto de dados e, portanto, nao fazem parte da serie analisada.

---

## 6. Organizacao temporal

A serie mensal utilizada na analise segue a ordem cronologica:

```text
Junho
   |
Julho
   |
Agosto
   |
Setembro
   |
Novembro
   |
Dezembro
   |
Fevereiro
   |
Marco
```

A classificacao sazonal utilizada e:

```text
Estacao Seca
Junho
Julho
Agosto
Setembro
```

```text
Estacao Chuvosa
Novembro
Dezembro
Fevereiro
Marco
```

Outubro e janeiro nao possuem raster no conjunto utilizado.

---

## 7. Ingestao dos rasters

### 7.1 Ferramentas

O processo utiliza:

- PostgreSQL;
- PostGIS;
- `raster2pgsql`;
- `psql`;
- Prompt de Comando do Windows (CMD).

O `raster2pgsql` converte os arquivos raster em comandos SQL compativeis com o PostGIS.

O `psql` executa os comandos no banco de dados PostgreSQL.

---

### 7.2 Ingestao das medias NDVI

Os produtos sazonais e historicos sao importados em lote utilizando o curinga:

```text
*.tif
```

Comando generico:

```bat
raster2pgsql -s 31983 -I -C "<CAMINHO_DOS_RASTERS>\*.tif" ndvi.ndvi_medias_aoi | psql -U <USUARIO_POSTGRES> -d <BANCO_DE_DADOS>
```

> **Nota:** os caminhos locais, o usuario e o banco de dados devem ser adaptados ao ambiente de execucao. Nenhuma credencial deve ser armazenada no repositorio.

---

### 7.3 Ingestao dos rasters mensais

Os rasters mensais sao importados para:

```text
ndvi.ndvi_mensal_aoi
```

Comando generico:

```bat
raster2pgsql -s 31983 -I -C "<CAMINHO_DOS_RASTERS_MENSAIS>\*.tif" ndvi.ndvi_mensal_aoi | psql -U <USUARIO_POSTGRES> -d <BANCO_DE_DADOS>
```

O comando importa os arquivos GeoTIFF do diretorio para uma mesma tabela raster.

---

## 8. Parametros do raster2pgsql

| Parametro | Funcao |
|---|---|
| `raster2pgsql` | Converte rasters em comandos SQL |
| `-s 31983` | Define o SRID dos rasters |
| `-I` | Cria indice espacial |
| `-C` | Aplica constraints relacionadas ao raster |
| `*.tif` | Seleciona os arquivos GeoTIFF |
| `ndvi.ndvi_medias_aoi` | Define a tabela de destino das medias |
| `ndvi.ndvi_mensal_aoi` | Define a tabela de destino dos produtos mensais |
| `\|` | Encaminha a saida para o `psql` |
| `psql` | Executa os comandos no PostgreSQL |
| `-U` | Define o usuario PostgreSQL |
| `-d` | Define o banco de dados |

---

## 9. Validacao da ingestao

Apos a importacao, os rasters devem ser validados antes das analises.

### 9.1 Quantidade de rasters mensais

```sql
SELECT COUNT(*)
FROM ndvi.ndvi_mensal_aoi;
```

Resultado esperado:

```text
8
```

---

### 9.2 Verificar os RID

```sql
SELECT
    rid
FROM ndvi.ndvi_mensal_aoi
ORDER BY rid;
```

Resultado esperado:

```text
1
2
3
4
5
6
7
8
```

---

### 9.3 Verificar o SRID

```sql
SELECT DISTINCT
    ST_SRID(rast)
FROM ndvi.ndvi_mensal_aoi;
```

Resultado esperado:

```text
31983
```

---

### 9.4 Verificar dimensoes e resolucao

```sql
SELECT
    rid,
    ST_Width(rast) AS largura,
    ST_Height(rast) AS altura,
    ST_ScaleX(rast) AS resolucao_x,
    ST_ScaleY(rast) AS resolucao_y
FROM ndvi.ndvi_mensal_aoi
ORDER BY rid;
```

---

### 9.5 Verificar estatisticas raster

```sql
SELECT
    rid,
    ST_SummaryStats(rast, 1, true)
FROM ndvi.ndvi_mensal_aoi
ORDER BY rid;
```

A consulta permite verificar:

- quantidade de pixels validos;
- valor minimo;
- valor maximo;
- media;
- desvio padrao.

Os resultados devem ser avaliados antes da utilizacao dos rasters nas analises.

---

## 10. Analise espacial dos rasters mensais

A analise mensal utiliza os imoveis rurais presentes em:

```text
sicar.car_aoi
```

Essa tabela representa o recorte espacial dos imoveis do CAR dentro da area de estudo.

O atributo:

```text
classe_fundiaria
```

e utilizado posteriormente para agrupar os resultados.

O processamento e realizado em duas etapas:

```text
Raster mensal
      |
      v
Imovel rural
      |
      v
NDVI medio por imovel
      |
      v
Classe fundiaria
      |
      v
NDVI medio por classe
```

---

## 11. NDVI medio por imovel e por mes

A primeira etapa calcula o NDVI medio dentro de cada imovel para cada raster mensal.

O resultado e armazenado em:

```text
ndvi.ndvi_imoveis_mensal_aoi
```

Consulta:

```sql
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

INNER JOIN ndvi.ndvi_mensal_aoi AS raster
    ON ST_Intersects(car.geom, raster.rast)

INNER JOIN ndvi.ndvi_meses_aoi AS meses
    ON raster.rid = meses.rid

WHERE car.geom IS NOT NULL

ORDER BY
    car.classe_fundiaria,
    car.id,
    meses.ordem_temporal;
```

O resultado possui uma observacao para cada combinacao valida:

```text
imovel x mes
```

Estrutura conceitual:

| id | classe_fundiaria | rid | mes | estacao | ndvi_medio |
|---|---|---:|---|---|---:|
| 1 | Classe A | 5 | Junho | Seca | 0.32 |
| 1 | Classe A | 4 | Julho | Seca | 0.29 |
| 1 | Classe A | 1 | Agosto | Seca | 0.27 |

---

## 12. NDVI medio por classe fundiaria e por mes

A segunda etapa agrega os valores dos imoveis por classe fundiaria e periodo.

O resultado e armazenado em:

```text
ndvi.ndvi_classe_estat_aoi
```

Consulta:

```sql
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
```

---

## 13. Interpretacao estatistica

A media de NDVI da classe e calculada a partir dos valores medios obtidos individualmente para os imoveis.

Assim:

```text
Pixels do raster
      |
      v
NDVI medio do imovel
      |
      v
Imoveis pertencentes a classe
      |
      v
Media dos imoveis
      |
      v
NDVI medio da classe
```

Essa abordagem faz com que cada imovel contribua com uma observacao para a media da classe, evitando que propriedades maiores tenham peso adicional apenas por possuirem maior quantidade de pixels.

O campo:

```text
desvio_padrao_classe
```

representa a variabilidade dos valores medios de NDVI entre os imoveis da mesma classe.

O campo:

```text
quantidade_imoveis
```

registra o numero de imoveis utilizados no calculo de cada combinacao classe x periodo.

---

## 14. Verificacao das estatisticas mensais

Consultar os resultados:

```sql
SELECT
    classe_fundiaria,
    mes,
    ano,
    estacao,
    ndvi_medio_classe,
    desvio_padrao_classe,
    quantidade_imoveis
FROM ndvi.ndvi_classe_estat_aoi
ORDER BY
    classe_fundiaria,
    ordem_temporal;
```

Verificar a quantidade de registros:

```sql
SELECT COUNT(*)
FROM ndvi.ndvi_classe_estat_aoi;
```

Verificar os periodos:

```sql
SELECT DISTINCT
    mes,
    ano,
    estacao,
    ordem_temporal
FROM ndvi.ndvi_classe_estat_aoi
ORDER BY
    ordem_temporal;
```

---

## 15. Curva historica sazonal por classe fundiaria

### 15.1 Objetivo

A curva historica sazonal tem como objetivo comparar o comportamento medio do NDVI entre a estacao seca e a estacao chuvosa para cada classe fundiaria.

Diferentemente da curva mensal, essa analise utiliza apenas dois produtos raster historicos:

```text
NDVI_Medio_Historico_Estacao_Seca_2017_2024.tif

NDVI_Medio_Historico_Estacao_Chuvosa_2017_2024.tif
```

O periodo historico analisado e:

```text
2017-2024
```

---

### 15.2 Periodos sazonais

A composicao historica da estacao seca representa:

```text
Junho
Julho
Agosto
Setembro
```

A composicao historica da estacao chuvosa representa:

```text
Novembro
Dezembro
Janeiro
Fevereiro
Marco
```

Os dois produtos representam, portanto, as condicoes medias historicas de cada estacao.

---

### 15.3 Correcao dos valores NaN

Durante a validacao dos produtos historicos foram identificados valores `NaN`.

Esses valores foram convertidos para:

```text
-9999
```

e definidos como NoData da banda raster.

Para isso foi criada a tabela:

```text
ndvi.ndvi_historico_corrigido
```

Os dois produtos historicos corrigidos apresentaram estatisticas numericas validas.

Valores gerais obtidos:

| Estacao | NDVI medio | NDVI minimo | NDVI maximo |
|---|---:|---:|---:|
| Chuvosa | 0.5456 | -0.4093 | 0.8761 |
| Seca | 0.4185 | -0.5891 | 0.9032 |

Esses valores correspondem aos produtos raster como um todo e nao representam a estatistica por classe fundiaria.

---

### 15.4 Extracao por imovel

Os rasters historicos corrigidos sao cruzados espacialmente com:

```text
sicar.car_aoi
```

Para cada imovel e estacao e calculado:

```text
NDVI medio do imovel
```

Posteriormente, os valores dos imoveis sao agregados pela classe fundiaria.

A hierarquia estatistica e:

```text
Pixels
   |
   v
NDVI medio do imovel
   |
   v
Classe fundiaria
   |
   v
Media dos imoveis da classe
```

Essa abordagem garante que cada imovel contribua como uma observacao para a estatistica da classe.

---

### 15.5 Tabela estatistica historica

O resultado final e armazenado em:

```text
ndvi.ndvi_historico_classe
```

A tabela possui os campos:

```text
classe_fundiaria
estacao
ndvi_medio_classe
quantidade_imoveis
```

Cada classe fundiaria possui dois valores:

```text
Seca
Chuvosa
```

Estrutura conceitual:

| classe_fundiaria | estacao | ndvi_medio_classe | quantidade_imoveis |
|---|---|---:|---:|
| Classe A | Seca | 0.xxx | xx |
| Classe A | Chuvosa | 0.xxx | xx |
| Classe B | Seca | 0.xxx | xx |
| Classe B | Chuvosa | 0.xxx | xx |

---

### 15.6 Resultados obtidos

Os valores medios historicos obtidos por classe foram:

| Classe fundiaria | Seca | Chuvosa | Delta NDVI |
|---|---:|---:|---:|
| Latifundio | 0.4441 | 0.5712 | +0.1271 |
| Media Propriedade | 0.4310 | 0.5673 | +0.1363 |
| Minifundio | 0.3859 | 0.5190 | +0.1331 |
| Pequena Propriedade | 0.4171 | 0.5626 | +0.1455 |

A variacao sazonal e calculada por:

```text
Delta NDVI = NDVI Chuvosa - NDVI Seca
```

Todos os grupos apresentaram aumento do NDVI entre a estacao seca e a estacao chuvosa.

---

### 15.7 Quantidade de imoveis

A agregacao historica utilizou:

```text
Latifundio             52 imoveis

Media Propriedade      82 imoveis

Minifundio            293 imoveis

Pequena Propriedade   137 imoveis
```

A comparacao entre as duas estacoes foi realizada sobre o mesmo conjunto de imoveis de cada classe.

---

### 15.8 Estrutura do grafico

O grafico historico apresenta:

```text
Eixo X -> Estacao

Eixo Y -> NDVI medio

Series -> Classe fundiaria
```

A ordem do eixo X e:

```text
Seca -> Chuvosa
```

Cada classe possui dois marcadores:

```text
Seca      ●────────●      Chuvosa
```

A linha conecta os dois valores e representa a variacao sazonal historica entre as duas estacoes.

A linha nao representa valores mensais interpolados.

---

### 15.9 Interpretacao

A curva historica sazonal permite comparar:

- o nivel medio de NDVI entre as classes;
- a diferenca entre seca e chuvosa;
- a amplitude da variacao sazonal;
- o comportamento relativo da cobertura vegetal entre as classes fundiarias.

O aumento do NDVI na estacao chuvosa e compativel com maior disponibilidade hidrica e maior atividade da vegetacao.

Entretanto, o NDVI nao deve ser interpretado diretamente como indicador de produtividade agricola.

O indice representa a resposta espectral da cobertura vegetal e pode refletir:

- culturas agricolas;
- pastagens;
- vegetacao nativa;
- areas em regeneracao;
- outros usos e coberturas da terra.

A interpretacao agricola deve, portanto, ser realizada em conjunto com as demais informacoes territoriais e ambientais da area de estudo.

---

## 16. Preparacao para Python

### 16.1 Analise mensal

A tabela:

```text
ndvi.ndvi_classe_estat_aoi
```

constitui a fonte de dados para a analise mensal no Python/JupyterLab.

Os principais campos sao:

```text
classe_fundiaria
mes
mes_numero
ano
estacao
ordem_temporal
ndvi_medio_classe
desvio_padrao_classe
quantidade_imoveis
```

Para a construcao da curva mensal:

```text
Eixo X -> ordem_temporal

Eixo Y -> ndvi_medio_classe

Series -> classe_fundiaria
```

O campo `desvio_padrao_classe` pode ser utilizado para representar a variabilidade entre os imoveis.

---

### 16.2 Analise historica

A tabela:

```text
ndvi.ndvi_historico_classe
```

constitui a fonte para a curva historica sazonal.

Os campos utilizados sao:

```text
classe_fundiaria
estacao
ndvi_medio_classe
quantidade_imoveis
```

Para a construcao do grafico:

```text
Eixo X -> estacao

Eixo Y -> ndvi_medio_classe

Series -> classe_fundiaria
```

A ordem das estacoes deve ser:

```text
Seca -> Chuvosa
```

---

## 17. Perfil temporal de NDVI

A analise mensal representa a variacao do NDVI ao longo dos periodos mensais disponiveis.

O produto deve ser denominado:

```text
Perfil temporal ou curva sazonal de NDVI por classe fundiaria
```

Essa analise utiliza os oito rasters mensais disponiveis e permite observar a variacao do NDVI ao longo do periodo analisado.

A curva historica sazonal descrita na secao anterior possui finalidade diferente: representa apenas a transicao entre as medias historicas da estacao seca e da estacao chuvosa.

Portanto:

```text
Curva mensal
8 observacoes temporais disponiveis

Curva historica sazonal
2 observacoes sazonais:
Seca -> Chuvosa
```

---

## 18. Reprodutibilidade

A sequencia de processamento e:

```text
1. Gerar produtos NDVI no Google Earth Engine
        |
2. Exportar os produtos como GeoTIFF
        |
3. Importar os GeoTIFF para o PostGIS
        |
4. Validar SRID, dimensoes e estatisticas
        |
5. Registrar os periodos na tabela ndvi.ndvi_meses_aoi
        |
6. Calcular NDVI medio por imovel e mes
        |
7. Agregar os resultados mensais por classe fundiaria
        |
8. Corrigir e validar os rasters historicos
        |
9. Calcular NDVI medio historico por imovel
        |
10. Agregar os resultados historicos por classe fundiaria
        |
11. Validar as estatisticas
        |
12. Consultar os resultados no Python
        |
13. Gerar as curvas de NDVI
```

As consultas SQL devem ser mantidas no repositorio para permitir a reproducao do processamento.

---

## 19. Integracao com Python

O PostgreSQL/PostGIS permanece responsavel pelo:

- armazenamento dos rasters;
- armazenamento dos dados espaciais;
- operacoes espaciais;
- recorte dos rasters;
- calculo das estatisticas espaciais;
- agregacao dos resultados.

O Python/JupyterLab sera utilizado para:

- leitura das tabelas estatisticas;
- organizacao dos dados;
- visualizacao;
- producao dos graficos.

### Fluxo da analise mensal

```text
PostgreSQL/PostGIS
        |
        v
ndvi.ndvi_classe_estat_aoi
        |
        | consulta/exportacao
        v
Python / JupyterLab
        |
        v
Perfil temporal de NDVI
```

### Fluxo da analise historica

```text
PostgreSQL/PostGIS
        |
        v
ndvi.ndvi_historico_classe
        |
        | consulta/exportacao
        v
Python / JupyterLab
        |
        v
Curva historica sazonal
Seca -> Chuvosa
```

---

## 20. Produtos da analise

Os principais produtos desta etapa sao:

### PostgreSQL/PostGIS

```text
ndvi.ndvi_medias_aoi

ndvi.ndvi_mensal_aoi

ndvi.ndvi_imoveis_mensal_aoi

ndvi.ndvi_classe_estat_aoi

ndvi.ndvi_historico_corrigido

ndvi.ndvi_historico_classe
```

### Python/JupyterLab

```text
Perfil temporal mensal de NDVI

Curva historica sazonal de NDVI por classe fundiaria
```

---

## 21. Resumo

O banco de dados espacial integra os produtos de sensoriamento remoto ao conjunto de dados territoriais do projeto.

A estrutura principal e:

```text
Google Earth Engine
        |
        v
Sentinel-2
        |
        v
NDVI
        |
        +--------------------------+
        |                          |
        v                          v
Medias sazonais/historicas    Rasters mensais
        |                          |
        v                          v
ndvi.ndvi_medias_aoi          ndvi.ndvi_mensal_aoi
        |                          |
        |                          v
        |                    sicar.car_aoi
        |                          |
        |                          v
        |                NDVI medio por imovel
        |                          |
        |                          v
        |                NDVI medio por classe
        |                          |
        |                          v
        |                ndvi.ndvi_classe_estat_aoi
        |                          |
        |                          v
        |                    Python/JupyterLab
        |                          |
        |                          v
        |                 Perfil temporal mensal
        |
        v
ndvi.ndvi_historico_corrigido
        |
        v
NDVI medio historico por classe
        |
        v
ndvi.ndvi_historico_classe
        |
        v
Python/JupyterLab
        |
        v
Curva historica sazonal
Seca -> Chuvosa
```

O fluxo estabelece a integracao entre sensoriamento remoto, banco de dados espacial, analise estatistica e visualizacao, mantendo separadas as etapas de processamento raster, consulta espacial, agregacao estatistica e producao dos resultados.