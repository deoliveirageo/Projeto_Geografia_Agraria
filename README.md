# Projeto de Estágio de Graduação Aplicado a Pesquisa em Geografia Agrária: Os Assentamentos da Reforma Agrária na bacia hidrográfica do Rio São Bartolomeu / DF

**A Cartografia Digital e a Análise de Dados Geográficos como Práxis na Interpretação Crítica do Território** 

Repositório técnico-científico destinado à documentação dos geoprocessos, análises espaciais, procedimentos estatísticos e produtos cartográficos desenvolvidos ao longo do estágio em Geografia Agrária, com área de aplicação nas **Unidades Hidrográficas do Alto Rio São Bartolomeu, Médio Rio São Bartolomeu e Ribeirão Sobradinho inseridos na bacia hidrog´rafica do Rio São Bartolomeu, Distrito Federal**.

O projeto integra procedimentos de **Geoprocessamento, Sensoriamento Remoto, Sistemas de Informações Geográficas (SIG), PostgreSQL/PostGIS, Google Earth Engine (GEE) e Python/Jupyter Lab** para investigação de diferentes dimensões da organização territorial rural.

A documentação foi estruturada em cinco eixos temáticos, articulando a análise da estrutura fundiária, da cobertura da terra, da dinâmica da vegetação (NDVI) e aspectos meteorológicos, dos recursos hídricos subterrâneos e da organização da rede hidrográfica.

---

## 1. Apresentação

O território rural constitui um espaço produzido pela interação entre relações sociais, formas de apropriação da terra, atividades produtivas, condições ambientais e disponibilidade de recursos naturais.

No contexto do Distrito Federal, essa realidade apresenta particularidades decorrentes da proximidade entre áreas rurais e a dinâmica metropolitana, da diversidade das formas de produção agropecuária e da coexistência da agricultura empresarial, agricultura familiar, assentamentos, agrovilas e usos residenciais em áreas rurais.

Neste projeto, a realidade dos assentamentos rurais da reforma agrária inseridos na área de estudo é analisada espacialmente a partir da integração de bases cadastrais, fundiárias, ambientais, hidrográficas, hidrogeológicas e de sensoriamento remoto.

---

# 2. Área de estudo

O recorte da área de estudo baseou-se em três unidades hidrográficas presentes na bacia hidrográfica do rio São Bartolomeu. A saber: médio rio São Bartolomeu, alto rio São Bartolomeu e ribeirão Sobradinho, no DF, que  constituem uma unidade espacial de referência para integração das diferentes bases utilizadas no projeto, permitindo relacionar a organização do território rural às características fundiárias, ambientais e hidrológicas.


---

# 3. Problema de pesquisa

A análise territorial do espaço rural exige considerar simultaneamente as formas de apropriação da terra, os padrões de uso e cobertura, a dinâmica da vegetação e as condições de disponibilidade e utilização dos recursos hídricos.


Nesse sentido, o projeto parte da seguinte questão:

> **Como a estrutura fundiária, o uso e cobertura da terra, a dinâmica da vegetação e a organização dos recursos hídricos se distribuem espacialmente e se articulam na configuração territorial agrária da área de estudo?**

O objetivo inicial do trabalho de construção de uma base cadastral qualitativa, de produtores rurais dos assentamentos da área de estudo é extrapolada com essa nova proposta de compreender as dificuldades do campesinato dentro de uma perspectiva crítica e realizar uma leitura integrada geográfica do território, considerando as relações entre sociedade, produção, propriedade da terra e natureza.

---

# 4. Arcabouço teórico-conceitual

## 4.1 Questão agrária e estrutura fundiária

A estrutura fundiária constitui uma dimensão fundamental da análise da questão agrária, uma vez que a propriedade da terra está diretamente relacionada às formas de organização da produção e às relações sociais estabelecidas no campo.

A análise desenvolvida neste projeto parte da compreensão de que a estrutura fundiária não deve ser reduzida à distribuição geométrica dos imóveis. A dimensão espacial da propriedade constitui uma expressão material de relações econômicas, sociais e territoriais.

A partir do cruzamento espacial de dados do Sistema Nacional de Cadastro Ambiental Rural (SICAR) — administrado pelo Serviço Florestal Brasileiro (SFB) e vinculado ao Ministério do Meio Ambiente (MMA) —, extraíram-se as estatísticas de distribuição fundiária para o recorte da Bacia Hidrográfica do Rio São Bartolomeu, atualizadas até o corrente ano de 2026 para uma análise da organização espacial dos imóveis rurais, concentração fundiária e conflitos de terras. 

A perspectiva adotada dialoga especialmente com a interpretação de Ariovaldo Umbelino de Oliveira acerca da questão agrária brasileira e do desenvolvimento contraditório do modo capitalista de produção.

Nessa abordagem, campesinato e grande propriedade não são necessariamente compreendidos como elementos externos ao desenvolvimento capitalista, mas como relações que podem ser produzidas, reproduzidas e subordinadas ao processo de expansão do capital.

Assim, a análise espacial da estrutura fundiária é utilizada como instrumento para investigar a distribuição dos imóveis, seus diferentes estratos de área e os padrões de concentração e fragmentação territorial.

Aqui, entra o viés crítico da Geografia Agrária, considerando os principais referenciais teóricos deste trabalho, como Stédile em  **A Questão Agrária no Brasil (1985)** e **O Modo Capitalista de Produção, Agricultura e Reforma Agrária (2007)** de Ariovaldo Umbelino de Oliveira. 

Esse autores fornecem a base crítica para interpretação do espaço agrário, calibrando o olhar para leitura e interpretação da reprodução material e produtiva do campo. 

---

## 4.2 Campesinato, agricultura familiar e espaço rural

A análise da estrutura fundiária também deve ser relacionada às diferentes formas de organização da produção rural.

O espaço rural do Distrito Federal apresenta diversidade de sistemas produtivos e formas de ocupação, incluindo agricultura empresarial, agricultura familiar, assentamentos, agrovilas e usos residenciais.

Essa diversidade impede que o rural seja interpretado como um espaço homogêneo.

A análise geográfica deve, portanto, considerar a coexistência de diferentes agentes, escalas de produção e formas de apropriação territorial.

---

## 4.3 Uso e cobertura da terra

O uso e a cobertura da terra constituem dimensões espaciais fundamentais para compreender a materialização das atividades humanas e das características ambientais no território.

A classificação da cobertura da terra permite identificar padrões de ocupação e sua distribuição espacial e dialoga diretamente com as formas de apropriação do espaço agrário pelos diversos agentes e sujeitos do campo. 

---

## 4.4 NDVI e Meteorologia

 
A leitura do NDVI permite-nos enxergar que de modo geral que a cobertura vegetal da bacia segue uma mesma curva espectral devido a sazonalidade do Distrito Federal, onde, nos meses de Junho a Setembro observamos uma queda crescente dos valores do índice, provocado pela estiagem prolongada das chuvas, e logo em seguida, à partir de Novembro, a dinâmica se inverte ocorrendo um aumento gradativo do vigor vegetativo. Isto permite-nos assumir que o índice de biomassa e a dinâmica produtiva da região é fortemente influenciada pelo regime de chuvas.  

O processamentos do índice de vigor vegetativo nas duas estações climáticas do ano, associados aos valores de precipitação acumulada e déficit hídrico em ambos os períodos, permite-nos verificar a amplitude abrupta desses indicadores nas diferentes sazonalidades do cerrado do Distrito Federal.  



## 4.5 Recursos hídricos e território

A água constitui elemento estruturante da produção agrícola e da organização territorial rural.

No Distrito Federal, a gestão dos recursos hídricos envolve usos superficiais e subterrâneos submetidos a instrumentos de controle, incluindo outorga e registro de uso.

A análise hidrogeológica desenvolvida no projeto considera especialmente a distribuição espacial das captações subterrâneas e sua relação com sistemas aquíferos e áreas de recarga.

A análise não interpreta a existência de uma outorga como equivalente automático ao consumo efetivamente realizado. O dado representa uma condição administrativa de autorização ou registro de uso e deve ser interpretado dentro de suas limitações cadastrais e institucionais.

---

## 4.6 Hidrografia como estrutura territorial

A rede hidrográfica constitui uma estrutura espacial que conecta diferentes porções do território.

A delimitação de sub-bacias, a identificação de nascentes, confluências, exutórios e a classificação hierárquica da drenagem permitem compreender a organização espacial dos fluxos superficiais.

No projeto, a hidrografia constitui também uma base de integração entre os demais eixos, permitindo relacionar:

- imóveis rurais;
- uso e cobertura da terra;
- dinâmica da vegetação;
- áreas de recarga;
- captações de água;
- unidades hidrográficas.

---

# 5. Objetivo geral

Analisar a organização territorial rural da área de estudo por meio da integração de geotecnologias, bases fundiárias, dados de uso e cobertura da terra, sensoriamento remoto, informações hidrogeológicas e análise da rede hidrográfica.**

---

# 6. Objetivos específicos

- Caracterizar espacialmente a estrutura dos imóveis rurais e seus padrões de distribuição fundiária;

- Identificar e quantificar as principais classes de uso e cobertura da terra na área de estudo;

- Analisar a dinâmica espacial e temporal da vegetação por meio do NDVI;

- Analisar os dados meteorológicos sazonais de precipitação e déficit hídrico;

- Investigar a distribuição das captações e outorgas de águas subterrâneas e sua relação espacial com áreas de interesse hidrogeológico;

- Caracterizar a organização da rede hidrográfica por meio da hierarquia de drenagem, sub-bacias, nascentes, confluências e exutórios;

- Integrar diferentes bases espaciais em ambiente PostgreSQL/PostGIS;

- Desenvolver rotinas de processamento e análise utilizando Google Earth Engine, SQL/PostGIS e Python;

- Produzir mapas temáticos, estatísticas espaciais e representações gráficas para subsidiar a interpretação geográfica do território;

- Estruturar um fluxo de processamento reprodutível e documentado para as análises realizadas durante o estágio.

---


## 7. Eixos temáticos


1. Imóveis rurais e estrutura fundiária

Análise espacial das propriedades e imóveis rurais, com integração de bases cadastrais e fundiárias e produção de indicadores relacionados à distribuição dos imóveis e aos diferentes estratos de área.

2. Uso e cobertura da terra

Classificação e quantificação das principais classes de uso e cobertura da terra, utilizando a coleção 10 (2024) de Uso e Cobertura do Solo do Mapbiomas por meio de processamento em nuvem no Google Earth Engine 

3. Dinâmica da vegetação — NDVI e Meteorologia

Análise temporal do comportamento da vegetação por meio do NDVI, incluindo séries mensais, médias históricas e curvas sazonais por meio de processamento de imagens no GEE; 

## Dados Computados: 

114 imagens para o cálculo de NDVI médio sazonal no período seco (Junho à Setembro) de 2025;
17 imagens para o cálculo do NDVI médio sazonal no período chuvoso (Novembro à Março) de 2025-2026;
552 imagens para o cálculo de NDVI histórico médio sazonal no período seco de 2017-2024;
140 imagens para o cálculo do NDVI méddio histórico sazonal no período chuvisi de 2017-2024.

Análise sazonal de dados meteorológicos sazonais de precipitação acumulada e de déficit hídrico acumulado no GEE com os datasets CHIRPS e Terra Climate; 


## Dados Computados: 

151 Imagens CHIRPS (Percipitação Acumulada mm/d) - estação chuvosa (Novembro à Março) 2024-2025;
122 Imagens CHIRPS (Percipitação Acumulada mm/d) - estação seca (Junho à Setembro) 2024;
2 Imagens TerraClimate (Déficit Hídrico Acumulado mm/m) - estação chuvosa (Novembro à Março)2024-2025;
4 Imagens TerraClimate (Déficit Hídrico Acumulado mm/m )- estação seca (Junho à Setembro) 2024;




4. Hidrogeologia e uso de águas subterrâneas

Análise espacial das captações subterrâneas e outorgas, considerando sua distribuição territorial e relação com sistemas aquíferos e áreas de recarga.

5. Hidrografia e rede de drenagem

Caracterização da organização hidrográfica da área de estudo, incluindo hierarquia de Strahler, sub-bacias, nascentes, confluências, foz e exutórios.

9. Tecnologias e ferramentas
Geoprocessamento
QGIS
SAGA GIS
GDAL
Sensoriamento remoto
Google Earth Engine
Sentinel-2
NDVI
Banco de dados espacial
PostgreSQL
PostGIS
raster2pgsql
Análise estatística e visualização
Python
Jupyter Lab
Pandas
GeoPandas
Matplotlib

## 8 Estrutura do repositório

```text

Projeto_Geografia_Agraria/
│
├── README.md
│
├── 1_imoveis_rurais/
│   └── 1_postgis/
│
├── 2_cobertura_do_solo/
│   ├── 1_gee/
│   └── 2_jupyterlab/
│
├── 3_ndvi/
│   ├── 1_import/
│   ├── 2_postgis/
│   ├── 3_gee/
│   └── 4_jupyterlab/
│
├── 4_hidrogeologia/
│   ├── 1_postgis/
│   └── 3_jupyterlab/
│
└── 5_hidrografia/

```
A numeração dos diretórios corresponde aos cinco eixos analíticos do projeto.

Dentro de cada eixo, os diretórios representam as diferentes etapas de processamento e as respectivas tecnologias empregadas.

## 9. Produtos

Os resultados do projeto são organizados em diferentes tipos de produtos:



## 10. Limitações

As análises apresentadas neste repositório devem ser compreendidas dentro das limitações próprias das bases utilizadas.

Entre os principais aspectos estão:

diferenças de escala e resolução espacial entre as bases;
diferenças temporais entre os conjuntos de dados;
limitações cadastrais das bases fundiárias;
limitações inerentes à classificação de imagens orbitais;
diferenças entre autorização administrativa de uso da água e consumo efetivamente realizado;
necessidade de validação de campo para determinadas interpretações.

Portanto, os produtos cartográficos constituem instrumentos de análise espacial e não devem ser interpretados isoladamente das respectivas metodologias.

## 11. Referências fundamentais

OLIVEIRA, Ariovaldo Umbelino de. Modo de Produção Capitalista, Agricultura e Reforma Agrária. São Paulo: FFLCH, 2007.

ADASA. Manual Técnico e Administrativo de Outorga de Direito de Uso de Recursos Hídricos no Distrito Federal. Brasília: Adasa/SRH, 2021.

## 12. Licença e citação

Este repositório tem finalidade acadêmica e técnico-profissional, destinando-se à documentação dos procedimentos de geoprocessamento e análise espacial desenvolvidos durante o estágio.

Para utilização dos códigos, metodologias ou produtos, recomenda-se consultar as fontes originais dos dados e respeitar suas respectivas condições de uso e licenciamento.

---
