# Projeto de Estágio de Graduação Aplicado à Pesquisa em Geografia Agrária: 

Os Assentamentos da Reforma Agrária na Bacia Hidrográfica do Rio São Bartolomeu - DF

**A Cartografia Digital e a Análise de Dados Geográficos como Práxis na Interpretação Crítica do Território**

Repositório técnico-científico destinado à documentação dos geoprocessos, análises espaciais, procedimentos estatísticos e produtos cartográficos desenvolvidos ao longo do estágio em Geografia Agrária, com área de aplicação nas **Unidades Hidrográficas do Alto Rio São Bartolomeu, Médio Rio São Bartolomeu e Ribeirão Sobradinho, inseridas na Bacia Hidrográfica do Rio São Bartolomeu, Distrito Federal**.

O projeto integra procedimentos de **Geoprocessamento, Sensoriamento Remoto, Sistemas de Informações Geográficas (SIG), PostgreSQL/PostGIS, Google Earth Engine (GEE) e Python/JupyterLab** para investigação de diferentes dimensões da organização territorial rural.

A documentação foi estruturada em cinco eixos temáticos, articulando a análise da estrutura fundiária, do uso e cobertura da terra, da dinâmica da vegetação e das condições meteorológicas, dos recursos hídricos subterrâneos e da organização da rede hidrográfica.

---

# 1. Apresentação

O território rural constitui um espaço produzido pela interação entre relações sociais, formas de apropriação da terra, atividades produtivas, condições ambientais e disponibilidade de recursos naturais.

No contexto do Distrito Federal, essa realidade apresenta particularidades decorrentes da proximidade entre áreas rurais e a dinâmica metropolitana, da diversidade das formas de produção agropecuária e da coexistência da agricultura empresarial, agricultura familiar, assentamentos, agrovilas e usos residenciais em áreas rurais.

Neste projeto, a realidade dos assentamentos rurais da Reforma Agrária inseridos na área de estudo é analisada espacialmente a partir da integração de bases cadastrais, fundiárias, ambientais, hidrográficas, hidrogeológicas e de sensoriamento remoto.

---

# 2. Área de estudo

O recorte da área de estudo baseou-se em três unidades hidrográficas presentes na Bacia Hidrográfica do Rio São Bartolomeu: **Alto Rio São Bartolomeu, Médio Rio São Bartolomeu e Ribeirão Sobradinho**, no Distrito Federal.

Essas unidades constituem uma referência espacial comum para a integração das diferentes bases utilizadas no projeto, permitindo relacionar a organização do território rural às características fundiárias, ambientais, hidrogeológicas e hidrográficas.

---

# 3. Problema de pesquisa

A análise territorial do espaço rural exige considerar simultaneamente as formas de apropriação da terra, os padrões de uso e cobertura, a dinâmica da vegetação e as condições de disponibilidade e utilização dos recursos hídricos.

Nesse sentido, o projeto parte da seguinte questão:

> **Como a estrutura fundiária, o uso e cobertura da terra, a dinâmica da vegetação e a organização dos recursos hídricos se distribuem espacialmente e se articulam na configuração territorial agrária da área de estudo?**

O objetivo inicial de construção de uma base cadastral qualitativa de produtores rurais dos assentamentos da área de estudo é ampliado por uma perspectiva crítica de compreensão das condições de reprodução do campesinato e de interpretação integrada do território, considerando as relações entre sociedade, produção, propriedade da terra e natureza.

---

# 4. Arcabouço teórico-conceitual

## 4.1 Questão agrária e estrutura fundiária

A estrutura fundiária constitui uma dimensão fundamental da análise da questão agrária, uma vez que a propriedade da terra está relacionada às formas de organização da produção e às relações sociais estabelecidas no campo.

A análise desenvolvida neste projeto parte da compreensão de que a estrutura fundiária não deve ser reduzida à distribuição geométrica dos imóveis. A dimensão espacial da propriedade constitui uma expressão material de relações econômicas, sociais e territoriais.

A partir do cruzamento espacial de dados do Sistema Nacional de Cadastro Ambiental Rural (SICAR), administrado pelo Serviço Florestal Brasileiro (SFB), foram produzidas estatísticas de distribuição fundiária para o recorte da área de estudo, atualizadas até 2026, permitindo analisar a organização espacial dos imóveis rurais e a concentração fundiária.

A perspectiva adotada dialoga especialmente com a interpretação de Ariovaldo Umbelino de Oliveira acerca da questão agrária brasileira e do desenvolvimento contraditório do modo capitalista de produção.

Nessa abordagem, campesinato e grande propriedade não são necessariamente compreendidos como elementos externos ao desenvolvimento capitalista, mas como relações que podem ser produzidas, reproduzidas e subordinadas ao processo de expansão do capital.

Assim, a análise espacial da estrutura fundiária é utilizada como instrumento para investigar a distribuição dos imóveis, seus diferentes estratos de área e os padrões de concentração e fragmentação territorial.

O viés crítico da Geografia Agrária considera os referenciais teóricos de Stédile, em **A Questão Agrária no Brasil**, e Ariovaldo Umbelino de Oliveira, em **O Modo Capitalista de Produção, Agricultura e Reforma Agrária**.

Esses autores fornecem a base crítica para a interpretação do espaço agrário e para a leitura da reprodução material e produtiva do campo.

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

No projeto, foi utilizado o produto de Uso e Cobertura do Solo da **Coleção 10 (2024) do MapBiomas**, processado no Google Earth Engine e posteriormente integrado ao QGIS para recorte, representação cartográfica e análise espacial.

---

## 4.4 NDVI e Meteorologia

O NDVI foi utilizado como indicador espectral do vigor vegetativo e da dinâmica da cobertura vegetal.

A análise sazonal evidencia a influência da sazonalidade climática do Distrito Federal sobre o comportamento da vegetação, com redução dos valores de NDVI durante o período seco, especialmente entre junho e setembro, e recuperação durante o período chuvoso, a partir do retorno das precipitações.

A associação entre NDVI, precipitação acumulada e déficit hídrico permite analisar a resposta sazonal da vegetação às condições meteorológicas, sem estabelecer, isoladamente, uma relação causal entre essas variáveis.

O processamento do NDVI nas estações seca e chuvosa, associado aos dados meteorológicos, permite comparar o comportamento do vigor vegetativo entre diferentes períodos sazonais e entre diferentes classes fundiárias.

### Dados Computados

- 114 imagens utilizadas no cálculo do NDVI médio sazonal da estação seca de 2025;
- 17 imagens utilizadas no cálculo do NDVI médio sazonal da estação chuvosa de 2024–2025;
- 552 imagens utilizadas no cálculo do NDVI histórico médio sazonal da estação seca de 2017–2024;
- 140 imagens utilizadas no cálculo do NDVI histórico médio sazonal da estação chuvosa de 2017–2024.

A análise meteorológica sazonal foi realizada com dados dos datasets **CHIRPS** e **TerraClimate**, considerando precipitação acumulada e déficit hídrico.

### Dados Computados

- 151 imagens CHIRPS para precipitação acumulada da estação chuvosa, entre novembro de 2024 e março de 2025;
- 122 imagens CHIRPS para precipitação acumulada da estação seca de 2024;
- 2 imagens TerraClimate para déficit hídrico acumulado da estação chuvosa, entre novembro de 2024 e março de 2025;
- 4 imagens TerraClimate para déficit hídrico acumulado da estação seca de 2024.

---

## 4.5 Recursos hídricos e território

A água constitui elemento estruturante da produção agrícola e da organização territorial rural.

No Distrito Federal, a gestão dos recursos hídricos envolve usos superficiais e subterrâneos submetidos a instrumentos de controle, incluindo outorga e registro de uso.

A análise hidrogeológica desenvolvida no projeto considera a distribuição espacial das captações subterrâneas, sua relação com os sistemas hidrogeológicos e as áreas de recarga.

O modelo de risco de perda de recarga de aquífero utilizado no projeto corresponde ao produto metodológico do ZEE-DF/SISDIA, preservado como camada de referência. De forma complementar, foi elaborado um produto de **Pressão Antrópica sobre Áreas de Recarga**, obtido pela integração espacial de classes de uso e cobertura da terra com áreas de prioridade de recarga.

Esses produtos possuem funções distintas: o primeiro representa o risco hidrogeológico segundo a metodologia de referência; o segundo constitui um diagnóstico espacial complementar da coincidência entre usos antrópicos e áreas de recarga.

A análise das outorgas não interpreta sua existência como equivalente automático ao consumo efetivamente realizado. O dado representa uma condição administrativa de autorização ou registro de uso e deve ser interpretado dentro de suas limitações cadastrais e institucionais.

---

## 4.6 Hidrografia como estrutura territorial

A rede hidrográfica constitui uma estrutura espacial que conecta diferentes porções do território.

A delimitação de sub-bacias, a identificação de nascentes, confluências, exutórios e a classificação hierárquica da drenagem permitem compreender a organização espacial dos fluxos superficiais.

No projeto, a análise hidrográfica foi realizada integralmente no QGIS, utilizando o MDE SRTM e algoritmos do provedor SAGA, incluindo o pré-processamento do relevo, a extração da rede de drenagem, a classificação hierárquica de Strahler e a delimitação de bacias e sub-bacias.

A análise de distância Euclidiana aos canais foi utilizada como medida de proximidade geométrica dos assentamentos à rede de drenagem, não sendo interpretada isoladamente como medida de disponibilidade efetiva de água.

A hidrografia constitui também uma base de integração entre os demais eixos, permitindo relacionar:

- imóveis rurais;
- uso e cobertura da terra;
- dinâmica da vegetação;
- áreas de recarga;
- captações de água;
- unidades hidrográficas.

---

# 5. Objetivo geral

Analisar a organização territorial rural da área de estudo por meio da integração de geotecnologias, bases fundiárias, dados de uso e cobertura da terra, sensoriamento remoto, informações hidrogeológicas e análise da rede hidrográfica.

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

# 7. Eixos temáticos

1. **Imóveis rurais e estrutura fundiária**

Análise espacial dos imóveis rurais, com integração de bases cadastrais e fundiárias e produção de indicadores relacionados à distribuição dos imóveis e aos diferentes estratos de área.

2. **Uso e cobertura da terra**

Classificação e quantificação das principais classes de uso e cobertura da terra, utilizando a Coleção 10 (2024) de Uso e Cobertura do Solo do MapBiomas, processada no Google Earth Engine e integrada ao QGIS.

3. **Dinâmica da vegetação — NDVI e Meteorologia**

Análise temporal do comportamento da vegetação por meio do NDVI, incluindo médias sazonais, médias históricas e curvas de vigor vegetativo por classe fundiária, associadas a dados sazonais de precipitação e déficit hídrico processados no Google Earth Engine.

4. **Hidrogeologia e uso de águas subterrâneas**

Análise espacial das captações subterrâneas e outorgas, considerando sua distribuição territorial e relação com sistemas hidrogeológicos, áreas de recarga e pressão antrópica.

5. **Hidrografia e rede de drenagem**

Caracterização da organização hidrográfica da área de estudo, incluindo hierarquia de Strahler, bacias, sub-bacias, microbacias, nascentes, confluências, foz e exutórios, além da análise de proximidade dos assentamentos aos canais de drenagem.

---

# 8. Tecnologias e ferramentas

**Geoprocessamento:** QGIS, SAGA GIS, GDAL

**Sensoriamento remoto:** Google Earth Engine, Sentinel-2, NDVI

**Banco de dados espacial:** PostgreSQL, PostGIS, raster2pgsql

**Análise estatística e visualização:** Python, JupyterLab, Pandas, GeoPandas, Matplotlib

---

# 9. Estrutura do repositório

```text
Projeto_Geografia_Agraria/
│
├── README.md
│
├── 1_imoveis_rurais/
│   ├── 1_postgis/
│   └── 2_qgis/
│
├── 2_cobertura_do_solo/
│   ├── 1_gee/
│   ├── 2_jupyterlab/
│   └── 3_qgis/
│
├── 3_ndvi/
│   ├── 1_import/
│   ├── 2_postgis/
│   ├── 3_gee/
│   ├── 4_jupyterlab/
│   └── 5_qgis/
│
├── 4_hidrogeologia/
│   ├── 1_postgis/
│   ├── 2_jupyterlab/
│   └── 3_qgis/
│
└── 5_hidrografia/
    ├── 1_qgis/
    └── 2_postgis/

```

A numeração dos diretórios corresponde aos cinco eixos analíticos do projeto.

Dentro de cada eixo, os diretórios representam as diferentes etapas de processamento, análise, organização e documentação, de acordo com as tecnologias empregadas.

## 10. Produtos

Os resultados do projeto são organizados em produtos cartográficos, estatísticos e analíticos associados aos cinco eixos temáticos.

Entre os principais produtos estão:

classificação fundiária dos imóveis rurais;
uso e cobertura do solo;
análise sazonal e histórica do NDVI;
análise sazonal de precipitação e déficit hídrico;
análise hidrogeológica e de pressão antrópica sobre áreas de recarga;
caracterização da rede hidrográfica;
análise da distância dos assentamentos aos canais de drenagem;
estatísticas espaciais;
gráficos de síntese;
projetos QGIS e documentação metodológica.


## 11. Referências fundamentais

OLIVEIRA, Ariovaldo Umbelino de. Modo de Produção Capitalista, Agricultura e Reforma Agrária. São Paulo: FFLCH, 2007.

ADASA. Manual Técnico e Administrativo de Outorga de Direito de Uso de Recursos Hídricos no Distrito Federal. Brasília: Adasa/SRH, 2021.

DISTRITO FEDERAL. Governo do Distrito Federal. Zoneamento Ecológico-Econômico do Distrito Federal: Matriz Ecológica. Brasília: Governo do Distrito Federal, 2017.

STÉDILE, João Pedro (org.). A questão agrária no Brasil: o debate na esquerda – 1960-1980. 2. ed. São Paulo: Expressão Popular, 2012.

## 13. Licença e citação

Este repositório tem finalidade acadêmica e técnico-profissional, destinando-se à documentação dos procedimentos de geoprocessamento e análise espacial desenvolvidos durante o estágio.


## Acesso à coleção de mapas no Spatialnode: 

```text

- **Mapa 1 — Imóveis Rurais**  
  [Acessar interpretação no SpatialNode](https://spatialnode.net/projects/imoveis-rurais-estrutura-fundiaria-a301ab)

- **Mapa 2 — Uso e Cobertura do Solo**  
  [Acessar interpretação no SpatialNode](https://spatialnode.net/projects/uso-e-cobertura-do-solo-42121e)

- **Mapa 3 — Vigor Vegetativo e Análise Meteorológica Sazonal**  
  [Acessar interpretação no SpatialNode](https://spatialnode.net/projects/ndvi-e-meteorologia-sazonal-fbd5f0)

- **Mapa 4 — Hidrogeologia e Escassez Hídrica**  
  [Acessar interpretação no SpatialNode](https://spatialnode.net/projects/hidrogeologia-f84814)

- **Mapa 5 — Hidrografia e Acessibilidade à Água**  
  [Acessar interpretação no SpatialNode](Ihttps://spatialnode.net/projects/hidrografia-01a0bc)

``` 
