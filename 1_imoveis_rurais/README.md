# 1. Imóveis Rurais e Estrutura Fundiária

## 1.1 Apresentação

Este eixo apresenta os procedimentos de organização, integração e análise espacial das bases de imóveis rurais utilizadas no estudo da estrutura fundiária da área de estudo. 

A análise foi desenvolvida no **PostgreSQL/PostGIS**, utilizando operações de recorte espacial, interseção, agregação e cálculo de estatísticas espaciais.

O objetivo é transformar diferentes bases cadastrais e fundiárias em informações espaciais comparáveis, permitindo investigar a distribuição territorial dos imóveis e sua organização segundo diferentes estratos de área.

---

## 1.2 Fundamentação conceitual

A estrutura fundiária constitui uma dimensão fundamental da questão agrária, pois a distribuição da propriedade da terra está relacionada às formas de organização e de produção no espaço agrário. 

A análise proposta neste eixo parte da distinção entre:

- imóvel rural;
- tamanho da propriedade;
- classe fundiária; 
- concentração fundiária.

A análise espacial busca, portanto, identificar **padrões de distribuição dos imóveis**, e não inferir diretamente relações de propriedade ou controle que não estejam explicitamente presentes nas bases.

---

## 1.3 Objetivo

### Objetivo geral

Caracterizar a estrutura espacial dos imóveis rurais inseridos na área de estudo, identificando padrões de distribuição, estratificação de área e concentração territorial.

### Objetivos específicos

- organizar as bases fundiárias utilizadas no projeto;
- realizar o recorte das bases para a área de estudo;
- integrar diferentes conjuntos de dados cadastrais;
- classificar os imóveis segundo estratos de área;
- calcular estatísticas espaciais da estrutura fundiária;
- identificar padrões de concentração e fragmentação;
- relacionar a distribuição dos imóveis à organização territorial rural.

---

## 1.4 Bases de dados

As principais bases utilizadas neste eixo são:

| CAR - Cadastro Ambiental Rural, fonte: Sistema Florestal Brasileiro (2026):  Análise cadastral e espacial dos imóveis declarados ;
| SIGEF - Sistema de Gestão Fundiária, fonte: INCRA (2026):  Base de imóveis georreferenciados ;
| SNCI - Sistema Nacional de Certificação de Imóveis Rurais, fonte: INCRA (2026): Complementação da base de imóveis cadastrados ;
| Unidades Hidrográficas do DF, fonte: Secretaria do Meio Ambiente (SEMA, 2026): Delimitação da área de estudo;


---

## 1.5 Fluxo metodológico

O processamento foi realizado utilizando consultas SQL e funções espaciais do PostGIS.

As operações principais incluem:

seleção espacial;
recorte por área de estudo;
interseção entre camadas;
cálculo de área;
agrupamento por classes;
agregação estatística;
contagem de imóveis;
cálculo da área ocupada;
cruzamento com unidades hidrográficas.

## 1.7 Scripts


**car_aoi.sql** 

Realiza o tratamento e o recorte espacial da base do Cadastro Ambiental Rural para a área de estudo.

**recorte_uhs_aoi.sql**

Realiza o recorte das unidades hidrográficas utilizadas como referência espacial da análise.

**classificacao_fundiaria.sql**

Organiza os imóveis em classes de área, permitindo a análise da distribuição dos estabelecimentos segundo seu tamanho em módulos fiscais. Sendo que, 1 módulo fiscal no Distrito Federal é constituído de até 5 hectares. Desta forma, as classes são: 

 < 1 módulo fiscal = Minifúndio; 
 1 - 4 módulos fiscais = Pequena Propriedade; 
 5 - 15 módulos fiscais = Média Propriedade; 
 > 15 módulos fiscais = Latifúndio; 

**estatisticas_fundiarias.sql**

Produz estatísticas espaciais relacionadas à quantidade de imóveis e à área ocupada por cada classe fundiária, gerando estatíticas de concentração fundiária. 

1.8 Classificação fundiária

A classificação por estratos de área constitui uma etapa analítica para avaliar a distribuição espacial dos imóveis.

O procedimento deve ser interpretado como uma classificação espacial da dimensão dos imóveis, e não como uma classificação automática dos sujeitos sociais ou das formas de produção.

Assim:

Área do imóvel
      ↓
Estrato fundiário
      ↓
Distribuição espacial
      ↓
Estatística
      ↓
Interpretação da estrutura fundiária

1.9 Indicadores produzidos

A análise permite produzir indicadores como:

número de imóveis;
área total dos imóveis;
área média;
área mediana;
distribuição dos imóveis por estrato;
participação percentual de cada estrato no número de imóveis;
participação percentual de cada estrato na área total;
distribuição espacial dos diferentes estratos.

Esses indicadores permitem comparar a participação relativa entre número de imóveis e área ocupada.

1.10 Interpretação geográfica

A interpretação dos resultados deve considerar a relação entre:

número de imóveis × área ocupada × distribuição espacial.

Um determinado estrato pode apresentar grande quantidade de imóveis, mas ocupar pequena parcela da área total. Inversamente, poucos imóveis de grande extensão podem representar parcela significativa da superfície analisada.

Essa relação constitui uma das principais bases para a identificação de padrões de concentração e fragmentação fundiária.

A análise espacial também permite investigar a distribuição desses padrões em relação às unidades hidrográficas e às demais dimensões territoriais analisadas no projeto.

1.11 Limitações

Os resultados devem ser interpretados considerando as características das bases cadastrais.

As bases representam diferentes sistemas cadastrais e podem apresentar diferenças de atualização, geometria, atributos e finalidade.

Por isso, a integração espacial deve ser entendida como procedimento analítico e não como homologação cadastral.

´´´text
1.13 Estrutura dos arquivos
1_imoveis_rurais/
│
├── README.md
│
└── 1_postgis/
    ├── car_aoi.sql
    ├── classificacao_fundiaria.sql
    ├── estatisticas_fundiarias.sql
    └── recorte_uhs_aoi.sql
1.14 Relação com os demais eixos

A estrutura fundiária constitui uma das bases de integração do projeto.

              ESTRUTURA FUNDIÁRIA
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Cobertura         NDVI       Hidrogeologia
       │              │              │
       └──────────────┼──────────────┘
                      ▼
                  Hidrografia
                      │
                      ▼
             Análise territorial

``` 

Essa integração permite investigar como diferentes condições ambientais e produtivas se distribuem sobre diferentes estruturas de apropriação espacial da terra.



