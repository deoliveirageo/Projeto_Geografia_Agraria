NDVI e Análise Meteorológica Sazonal

Documentação do fluxo metodológico utilizado para a análise do vigor vegetativo e das condições meteorológicas sazonais na área de estudo da Bacia Hidrográfica do Rio São Bartolomeu, Distrito Federal.

A etapa integra Sensoriamento Remoto, Sistemas de Informação Geográfica, banco de dados espacial e análise estatística para relacionar a dinâmica temporal da vegetação às condições de precipitação e déficit hídrico, considerando também a estrutura fundiária dos imóveis rurais.

1. Identificação do projeto

Este diretório reúne a documentação dos procedimentos empregados na geração, armazenamento e análise dos produtos de NDVI e dos dados meteorológicos sazonais.

O eixo foi estruturado para integrar:

imagens Sentinel-2;

cálculo do NDVI;

séries mensais;

médias sazonais e históricas;

dados de precipitação do CHIRPS;

dados de déficit hídrico do TerraClimate;

imóveis rurais e classes fundiárias;

PostgreSQL/PostGIS;

SQL espacial;

Python/JupyterLab;

produtos cartográficos e gráficos estatísticos.

A análise não trata o NDVI como medida direta de produtividade agrícola. O índice é utilizado como indicador espectral do vigor e da condição da cobertura vegetal, cuja variação pode ser interpretada em conjunto com a sazonalidade climática e com as formas de uso e apropriação da terra.

2. Objetivo

Caracterizar a variação espacial e temporal do vigor vegetativo na área de estudo, comparando períodos sazonais e históricos e relacionando o comportamento do NDVI às condições de precipitação e déficit hídrico.

Objetivos específicos

gerar produtos de NDVI a partir de imagens Sentinel-2;

produzir médias sazonais e históricas;

organizar uma série mensal de NDVI;

comparar estação seca e estação chuvosa;

calcular precipitação acumulada sazonal;

calcular déficit hídrico acumulado sazonal;

relacionar a dinâmica do NDVI às condições meteorológicas;

extrair estatísticas de NDVI por imóvel rural;

agregar os resultados por classe fundiária;

produzir curvas de vigor vegetativo;

integrar os resultados à interpretação da organização agrária do território.

3. Área de estudo

O recorte espacial corresponde à área de estudo definida para o projeto na Bacia Hidrográfica do Rio São Bartolomeu, no Distrito Federal.

A análise considera especialmente as unidades hidrográficas:

Alto Rio São Bartolomeu;

Médio Rio São Bartolomeu;

Ribeirão Sobradinho.

O recorte territorial é aplicado tanto aos produtos de sensoriamento remoto quanto às camadas utilizadas para a análise dos imóveis rurais.

4. Abordagem metodológica

O fluxo de trabalho foi estruturado em duas frentes complementares:

análise da vegetação, por meio do NDVI derivado de imagens Sentinel-2;

análise meteorológica sazonal, por meio de precipitação acumulada e déficit hídrico acumulado.

As duas frentes são posteriormente integradas para interpretar a resposta da cobertura vegetal às condições ambientais sazonais.

                         DADOS DE ENTRADA
                               │
             ┌─────────────────┴─────────────────┐
             │                                   │
             ▼                                   ▼
        Sentinel-2                        Dados meteorológicos
             │                                   │
             ▼                              ┌────┴────┐
      Google Earth Engine                   │         │
             │                              ▼         ▼
             ▼                           CHIRPS   TerraClimate
          NDVI                              │         │
             │                              ▼         ▼
      ┌──────┴────────┐               Precipitação  Déficit
      │               │                 acumulada   hídrico
      ▼               ▼                      │         │
   Produtos       Rasters mensais             └────┬────┘
   sazonais            │                            │
      │                │                            │
      └────────┬───────┴────────────────────────────┘
               ▼
        PostgreSQL/PostGIS
               │
               ├── Estatísticas espaciais
               ├── Imóveis rurais
               └── Classes fundiárias
               │
               ▼
          Python/JupyterLab
               │
               ▼
     Análise e visualização
               │
       ┌───────┴────────┐
       ▼                ▼
 Curva sazonal     Curva histórica
    de NDVI           de NDVI

5. Sistema de referência espacial

Os produtos raster utilizados no banco espacial estão organizados em:

EPSG:31983
SIRGAS 2000 / UTM zona 23S

O SRID é informado ao raster2pgsql por meio do parâmetro:

-s 31983

Esse parâmetro informa o sistema de referência espacial associado ao raster durante a importação; ele não realiza a reprojeção do arquivo.

A adoção de um sistema projetado permite realizar operações espaciais e cálculos de área em unidades métricas.

6. Geração do NDVI

O NDVI foi calculado a partir de imagens Sentinel-2 processadas no Google Earth Engine.

A formulação utilizada é:

NDVI = (NIR - RED) / (NIR + RED)

O índice permite representar a resposta espectral da vegetação a partir da relação entre a reflectância no infravermelho próximo e no vermelho.

No contexto deste projeto, os valores são utilizados para caracterizar o vigor relativo da cobertura vegetal e sua variação ao longo dos períodos analisados.

O NDVI deve ser interpretado em conjunto com o tipo de cobertura, a sazonalidade, as condições meteorológicas e a organização territorial, pois diferentes usos da terra podem apresentar respostas espectrais distintas.

7. Produtos temporais de NDVI

Foram produzidos quatro conjuntos de médias:

Produto

Período

Tipo

NDVI_Medio_Estacao_Seca_2025.tif

Junho a Setembro de 2025

Média sazonal

NDVI_Medio_Estacao_Chuvosa_2025_2026.tif

Novembro de 2025 a Março de 2026

Média sazonal

NDVI_Medio_Historico_Estacao_Seca_2017_2024.tif

Junho a Setembro, 2017–2024

Média histórica

NDVI_Medio_Historico_Estacao_Chuvosa_2017_2024.tif

Novembro a Março, 2017–2024

Média histórica

Também foram utilizados rasters mensais para representar a variação sazonal.

Foram documentados:

114 imagens para o NDVI médio sazonal da estação seca;

17 imagens para o NDVI médio sazonal da estação chuvosa;

552 imagens para o NDVI histórico médio da estação seca;

140 imagens para o NDVI histórico médio da estação chuvosa.

8. Rasters mensais

Foram utilizados oito rasters mensais:

NDVI_Junho_2025.tif
NDVI_Julho_2025.tif
NDVI_Agosto_2025.tif
NDVI_Setembro_2025.tif
NDVI_Novembro_2025.tif
NDVI_Dezembro_2025.tif
NDVI_Fevereiro_2026.tif
NDVI_Marco_2026.tif

Os produtos são armazenados em:

ndvi.ndvi_mensal_aoi

Os meses de outubro e janeiro não possuem raster neste conjunto de dados.

A sequência temporal utilizada é:

```text
Junho → Julho → Agosto → Setembro
                     ↓
                  Novembro
                     ↓
          Dezembro → Fevereiro → Março
```

9. Análise meteorológica sazonal

A análise meteorológica foi incorporada ao eixo de NDVI porque a dinâmica da vegetação no Cerrado está fortemente condicionada pela sazonalidade da disponibilidade hídrica.

Foram utilizadas duas variáveis:

Precipitação acumulada
        +
Déficit hídrico acumulado

Essas variáveis não substituem o NDVI. Funcionam como variáveis ambientais auxiliares para interpretar as condições sob as quais ocorreram as alterações do vigor vegetativo.

10. Precipitação — CHIRPS

Foi utilizado o dataset:

UCSB-CHC/CHIRPS/V3/DAILY_SAT

com a banda:

precipitation

A coleção possui dados diários de precipitação.

A precipitação acumulada foi obtida por soma temporal:

.sum()

Quando aplicada a uma janela temporal definida, essa operação representa a soma da precipitação diária no período selecionado.

Dados computados

Foram documentados:

151 imagens CHIRPS para a estação chuvosa;

122 imagens CHIRPS para a estação seca.

Os produtos representam a precipitação acumulada utilizada na caracterização sazonal da área de estudo.

11. Déficit hídrico — TerraClimate

Foi utilizado o dataset:

IDAHO_EPSCOR/TERRACLIMATE

com a banda:

def

A variável def foi utilizada para caracterizar o déficit hídrico climático.

O processamento foi realizado sobre os dados mensais, com acumulação para os períodos sazonais analisados.

A escala indicada para a variável é:

0,1

Assim:

valor físico = valor armazenado × 0,1

Foram documentadas:

2 imagens TerraClimate para a estação chuvosa;

4 imagens TerraClimate para a estação seca.

12. Integração entre NDVI e meteorologia

A integração entre NDVI, precipitação e déficit hídrico segue a lógica:

```text 
              SAZONALIDADE
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
  Disponibilidade          Déficit
      hídrica               hídrico
        │                     │
        └──────────┬──────────┘
                   ▼
             Condição hídrica
                   │
                   ▼
              Cobertura vegetal
                   │
                   ▼
                  NDVI
```

A finalidade é verificar como os padrões de vigor vegetativo se comportam sob diferentes condições de disponibilidade hídrica.

Na interpretação geográfica, a resposta do NDVI deve ser relacionada também ao uso e cobertura da terra. Assim, uma redução do NDVI não é automaticamente atribuída ao déficit hídrico, pois pode decorrer de mudanças de cobertura, manejo agrícola, colheita, solo exposto ou outros processos territoriais.

13. Banco de dados PostgreSQL/PostGIS

Os produtos NDVI são organizados no schema:

ndvi

Principais tabelas:

ndvi.ndvi_medias_aoi
ndvi.ndvi_mensal_aoi
ndvi.ndvi_imoveis_mensal_aoi
ndvi.ndvi_classe_estat_aoi
ndvi.ndvi_historico_corrigido
ndvi.ndvi_historico_classe

A camada utilizada para o cruzamento com os rasters é:

sicar.car_aoi

Estrutura lógica:

```text
PROJETO_POSTGRES
│
├── ndvi
│   ├── ndvi_medias_aoi
│   ├── ndvi_mensal_aoi
│   ├── ndvi_imoveis_mensal_aoi
│   ├── ndvi_classe_estat_aoi
│   ├── ndvi_historico_corrigido
│   └── ndvi_historico_classe
│
└── sicar
    └── car_aoi
```

14. Integração com imóveis rurais

Os rasters mensais são cruzados espacialmente com os imóveis rurais da base utilizada no projeto.

O fluxo é:

```text
Raster NDVI mensal
        │
        ▼
PostGIS
        │
        ▼
Imóveis rurais
        │
        ▼
Extração do NDVI médio
        │
        ▼
NDVI médio por imóvel e mês
        │
        ▼
Agregação por classe fundiária
```

Essa etapa permite observar diferenças no comportamento médio do NDVI entre os diferentes estratos fundiários.

15. Classes fundiárias

A análise estatística utiliza as seguintes classes:

Latifúndio
Minifúndio
Média Propriedade
Pequena Propriedade

A agregação por classe fundiária permite relacionar a dinâmica espectral da cobertura vegetal à estrutura espacial dos imóveis rurais.

Essa relação não implica que a dimensão fundiária seja, isoladamente, responsável pelo comportamento do NDVI. A interpretação deve considerar uso da terra, cobertura vegetal, manejo, condições ambientais e demais características territoriais.

16. Estatísticas por classe fundiária

A tabela analítica contém campos como:

classe_fundiaria
mes
mes_numero
ano
estacao
ordem_temporal
ndvi_medio_classe
desvio_padrao_classe
quantidade_imoveis

Para a construção da curva mensal:

Eixo X → ordem_temporal
Eixo Y → ndvi_medio_classe
Series → classe_fundiaria

O campo desvio_padrao_classe pode ser utilizado para representar a variabilidade do NDVI entre os imóveis pertencentes a cada classe.

17. Análise histórica

A tabela:

ndvi.ndvi_historico_classe

constitui a fonte para a curva histórica sazonal.

Campos principais:

classe_fundiaria
estacao
ndvi_medio_classe
quantidade_imoveis

Para o gráfico:

Eixo X → estação
Eixo Y → ndvi_medio_classe
Series → classe_fundiaria

A ordem sazonal é:

Seca → Chuvosa

A curva histórica não representa uma série mensal completa. Ela sintetiza a diferença entre as médias históricas dos dois períodos sazonais.

18. Perfil temporal e curva de vigor vegetativo

A análise mensal representa a variação do NDVI ao longo dos oito períodos disponíveis.

O produto é denominado:

Perfil temporal ou curva sazonal de NDVI por classe fundiária

A análise mensal possui oito observações temporais disponíveis.

A curva histórica sazonal possui duas observações:

Seca → Chuvosa

A distinção é importante para evitar que a curva histórica seja interpretada como uma série temporal mensal.

19. Integração metodológica final

O fluxo completo do eixo é:

```text 
Sentinel-2
    │
    ▼
Google Earth Engine
    │
    ├── Cálculo do NDVI
    │
    └── Produtos mensais/sazonais/históricos
                │
                ▼
             GeoTIFF
                │
                ▼
           PostgreSQL/PostGIS
                │
        ┌───────┴────────┐
        │                │
        ▼                ▼
 Imóveis rurais    Dados meteorológicos
        │                │
        │          ┌─────┴─────┐
        │          ▼           ▼
        │       CHIRPS    TerraClimate
        │          │           │
        │          ▼           ▼
        │   Precipitação    Déficit
        │     acumulada     hídrico
        │          └─────┬─────┘
        │                │
        └───────┬────────┘
                ▼
        Análise integrada
                │
                ▼
        Python/JupyterLab
                │
        ┌───────┴────────┐
        ▼                ▼
 Perfil temporal     Curva histórica
    de NDVI             sazonal
```

20. Reprodutibilidade

A sequência geral de processamento é:

1. Selecionar imagens Sentinel-2
2. Processar as imagens no Google Earth Engine
3. Calcular o NDVI
4. Gerar produtos mensais
5. Gerar médias sazonais
6. Gerar médias históricas
7. Exportar os produtos como GeoTIFF
8. Processar CHIRPS para precipitação acumulada
9. Processar TerraClimate para déficit hídrico acumulado
10. Importar os produtos no PostgreSQL/PostGIS
11. Validar SRID, extensão, dimensões e estatísticas
12. Cruzar NDVI mensal com os imóveis rurais
13. Calcular NDVI médio por imóvel
14. Agregar os resultados por classe fundiária
15. Consultar os resultados no Python/JupyterLab
16. Produzir os gráficos e produtos cartográficos

As consultas SQL, scripts do GEE e notebooks utilizados no processamento devem permanecer documentados no repositório.

21. Tecnologias utilizadas

Geoprocessamento

QGIS;

GDAL;

Orfeo Toolbox.

Sensoriamento remoto

Google Earth Engine;

Sentinel-2.

Dados meteorológicos

CHIRPS;

TerraClimate.

Banco de dados

PostgreSQL;

PostGIS;

SQL;

raster2pgsql;

psql.

Programação e análise

Python;

Pandas;

GeoPandas;

Rasterio;

Matplotlib;

JupyterLab.

22. Produtos da análise

Produtos raster

NDVI_Medio_Estacao_Seca_2025.tif
NDVI_Medio_Estacao_Chuvosa_2025_2026.tif
NDVI_Medio_Historico_Estacao_Seca_2017_2024.tif
NDVI_Medio_Historico_Estacao_Chuvosa_2017_2024.tif

Produtos estatísticos

NDVI médio por imóvel;

NDVI médio por classe fundiária;

perfil temporal mensal;

curva histórica sazonal;

estatísticas de precipitação;

estatísticas de déficit hídrico.

Produtos cartográficos

mapa de NDVI e análise meteorológica da estação seca;

mapa de NDVI e análise meteorológica da estação chuvosa;

curva de vigor vegetativo por classe fundiária;

sínteses estatísticas da dinâmica sazonal.

23. Interpretação aplicada à Geografia Agrária

O NDVI é utilizado como instrumento para compreender a dinâmica espacial da cobertura vegetal dentro de um território marcado por diferentes formas de apropriação da terra.

A integração com as classes fundiárias permite observar se diferentes estratos de imóveis apresentam comportamentos distintos de vigor vegetativo. A integração com precipitação e déficit hídrico permite contextualizar essas diferenças dentro da sazonalidade climática.

A análise deve, contudo, evitar relações causais simplificadas. O vigor vegetativo resulta da interação entre condições climáticas, características ambientais, cobertura da terra, manejo agrícola, disponibilidade hídrica e formas de uso e apropriação do território.

Nesse sentido, o produto cartográfico constitui uma ferramenta de leitura territorial, e não uma medida isolada de produtividade ou de desempenho econômico dos imóveis.

24. Considerações metodológicas

Os produtos de NDVI devem ser interpretados como indicadores espectrais da condição da cobertura vegetal.

A comparação entre períodos sazonais permite identificar padrões de redução ou aumento do vigor vegetativo, enquanto os dados meteorológicos fornecem contexto ambiental para a interpretação desses padrões.

O cruzamento com classes fundiárias acrescenta uma dimensão territorial à análise, permitindo investigar a relação entre estrutura fundiária e comportamento da cobertura vegetal sem atribuir causalidade direta a uma única variável.

Diferenças de resolução, escala, período e natureza dos dados também devem ser consideradas na interpretação integrada.

25. Limitações

Entre as principais limitações estão:

diferenças temporais entre as bases;

ausência de alguns meses na série mensal;

diferenças de resolução espacial entre NDVI e dados meteorológicos;

efeitos de cobertura de nuvens e qualidade das imagens;

influência de solo exposto e diferentes tipos de cobertura sobre o NDVI;

diferenças de manejo entre imóveis;

impossibilidade de interpretar o NDVI isoladamente como produtividade agrícola;

diferenças entre classes fundiárias quanto ao número e tamanho dos imóveis;

limitações inerentes à representação espacial das bases cadastrais.

26. Referências e bases de dados

Sentinel-2

Programa Copernicus / European Space Agency. Imagens utilizadas para geração dos produtos de NDVI.

CHIRPS

Climate Hazards Center InfraRed Precipitation with Station data. Dataset utilizado para obtenção da precipitação diária e cálculo da precipitação acumulada sazonal.

TerraClimate

Global high-resolution gridded dataset de variáveis climáticas e de balanço hídrico. Utilizado para caracterização do déficit hídrico climático.

MapBiomas

Dados de uso e cobertura da terra utilizados como referência territorial complementar.

SICAR

Base utilizada para espacialização dos imóveis rurais empregados na análise.

27. Autor

Matheus Santos de Oliveira

Graduação em Geografia
Projeto de Estágio Supervisionado em Geografia
Distrito Federal — Brasil

28. Licença e uso

Este repositório possui finalidade de documentação, apresentação e portfólio do projeto.

Os dados de terceiros permanecem sujeitos às respectivas licenças e condições de uso de seus provedores.

Dados territoriais ou cadastrais que possam envolver informações sensíveis não são disponibilizados publicamente neste repositório.
