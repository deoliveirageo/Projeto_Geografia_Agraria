Modelo de Vulnerabilidade Hídrica Sazonal de Águas Subterrâneas

1. Apresentação

Este projeto foi desenvolvido no âmbito do estágio supervisionado em Geografia e tem como objeto de análise os assentamentos rurais inseridos na área de estudo da Bacia Hidrográfica do Rio São Bartolomeu, no Distrito Federal.

O trabalho integra procedimentos de Geografia Agrária, Cartografia, Sistemas de Informação Geográfica (SIG), Sensoriamento Remoto, análise espacial, banco de dados geográficos, modelagem ambiental e aplicações WebGIS. 

A pesquisa foi estruturada a partir da integração entre as dimensões:

fundiária;

produtiva;

hidrográfica;

ambiental;

hidrogeológica;

climática;

territorial;

infraestrutural;

socioespacial.


2. Objetivo geral

Realizar um diagnóstico territorial integrado dos assentamentos rurais localizados na área de estudo do Médio Rio São Bartolomeu, utilizando geotecnologias e análise espacial para investigar as relações entre estrutura fundiária, uso e cobertura do solo, produção agrícola, disponibilidade hídrica, exploração de águas subterrâneas e vulnerabilidade ambiental.

3. Objetivos específicos

Delimitar espacialmente a área de estudo;

caracterizar as unidades hidrográficas incidentes na área;

espacializar os assentamentos rurais;

caracterizar o uso e cobertura do solo;

identificar áreas agrícolas e áreas urbanizadas;

analisar a compartimentação geomorfológica;

identificar áreas prioritárias para recarga de aquíferos;

analisar o risco de perda de recarga de aquíferos;

caracterizar a precipitação sazonal;

caracterizar o déficit hídrico sazonal;

espacializar pontos de outorga de águas subterrâneas;

analisar finalidade e tipo de poço;

quantificar a vazão total outorgada;

analisar a distribuição das outorgas por unidade hidrográfica;

relacionar uso e cobertura do solo com áreas prioritárias de recarga;

identificar pressões antrópicas sobre áreas prioritárias de recarga;

integrar os resultados em produtos cartográficos e estatísticos;


4. Área de estudo

A área de estudo está inserida na bacia hidrpgráfica do Rio São Bartolomeu, no Distrito Federal.

O recorte espacial utilizado nas análises hidrográficas corresponde à interseção das unidades hidrográficas:

Alto Rio São Bartolomeu;

Médio Rio São Bartolomeu;

Ribeirão Sobradinho.

5. Abordagem metodológica

O projeto utiliza uma abordagem integrada de análise espacial, articulando dados territoriais, ambientais, hidrogeológicos, climáticos e de exploração de recursos hídricos.

O fluxo geral de trabalho é representado a seguir representa a confeccção do modelo de vulnerabilidade hídrica sazonal de águas subterrâneas (Mapa 4):

DADOS TERRITORIAIS
        │
        ├── Assentamentos
        ├── Unidades hidrográficas
        ├── Uso e cobertura do solo
        ├── Relevo
        ├── Sistemas aquíferos
        └── Outorgas
        │
        ▼
GEOPROCESSAMENTO
        │
        ├── Recortes espaciais
        ├── Interseções
        ├── Reclassificações
        ├── Estatísticas zonais
        └── Operações matriciais
        │
        ▼
BANCO DE DADOS GEOGRÁFICOS
PostgreSQL + PostGIS
        │
        ├── Agregação das outorgas
        ├── Indicadores por UH
        ├── Tabelas-estatísticas
        └── Consultas espaciais
        │
        ▼
MODELAGEM AMBIENTAL
        │
        ├── Risco de perda de recarga
        ├── Compartimentação geomorfológica
        ├── Áreas prioritárias de recarga
        ├── Precipitação sazonal
        └── Déficit hídrico sazonal
        │
        ▼
ANÁLISE INTEGRADA
        │
        ├── Pressão antrópica
        ├── Uso da terra
        ├── Explotação subterrânea
        └── Vulnerabilidade hídrica
        │
        ▼
PRODUTOS
        │
        ├── Mapa temático
        ├── Gráficos
        ├── Tabelas
        ├── Matrizes de indicadores


6. Bases de dados

6.1 Dados territoriais

Foram utilizados dados espaciais relacionados a:

unidades hidrográficas;

assentamentos rurais;

sistemas aquíferos;

compartimentação geomorfológica;

solos;

uso e cobertura do solo;

relevo;

pontos de outorga;

rede hidrográfica.


8. Uso e cobertura do solo

A caracterização do uso e cobertura do solo foi realizada a partir de dados classificados do Mapbiomas, coleção 10 para o ano de 2024.

A camada foi inicialmente recortada pela área de estudo.

Entre as classes utilizadas na análise de pressão sobre áreas de recarga destacam-se:

Pastagem;

Área Urbana;

Soja;

Formação Savânica;

demais classes de uso e cobertura.

9. Reclassificação do uso e cobertura

Para a análise específica da pressão antrópica sobre áreas prioritárias de recarga, as classes de interesse foram reclassificadas.

Os valores originais utilizados foram:

Pastagem = 15
Área Urbana = 24
Soja = 39

A classificação temática utilizada na etapa de cruzamento é:

0 = Outros usos
1 = Pastagem
2 = Área Urbana
3 = Soja

Essa etapa permite simplificar o raster original e concentrar a análise nas classes diretamente relacionadas ao objetivo do estudo.

10. Relevo e compartimentação geomorfológica

O relevo é utilizado como elemento de suporte à interpretação da dinâmica de recarga dos aquíferos.

Foi utilizada uma camada vetorial de relevo do Distrito Federal disponibilizada pela EMBRAPA Solos, 2015. .

As classes consideradas prioritárias para recarga foram:

Plano;

Plano e Suave Ondulado;

Suave Ondulado.

Essas classes foram reclassificadas para:

0 = Não prioritária
1 = Área prioritária de recarga

A reclassificação constitui uma adaptação metodológica para o presente estudo, aplicada ao cruzamento espacial com o uso e cobertura do solo.

11. Rasterização da compartimentação

Como o uso e cobertura do solo está estruturado em formato vetorial, a camada de compartimentação foi convertida para raster.

O procedimento buscou garantir compatibilidade entre:

sistema de referência;

extensão;

resolução;

tamanho do pixel;

alinhamento do grid.

Fluxo:

Relevo vetorial
      │
      ▼
Seleção das classes prioritárias
      │
      ▼
Reclassificação
      │
      ▼
Rasterização
      │
      ▼
Raster de prioridade de recarga

12. Risco de perda de recarga de aquífero

A análise utiliza como referência o modelo de Risco de Perda de Recarga de Aquífero do ZEE-DF, SEMA 2026.

A metodologia considera a sensibilidade dos aquíferos em relação à redução da recarga e da produção hídrica.

Entre as variáveis consideradas estão:

Domínio poroso

Relaciona-se às características do sistema poroso e à condutividade hidráulica.

O domínio poroso possui importância para a infiltração da precipitação e para a recarga dos aquíferos.

Compartimentação geomorfológica

A morfologia do relevo atua como fator controlador das áreas de recarga.

Áreas de chapadas, rebordos e planos intermediários apresentam maior potencial de contribuição para a recarga, enquanto áreas de relevo mais dissecado apresentam condições menos favoráveis.

Domínio fraturado e fissuro-cárstico

A variável relacionada à vazão representa as características de produção hídrica registradas nos sistemas e subsistemas aquíferos.

A metodologia considera as características de vazão dos sistemas e subsistemas que compõem os aquíferos dos domínios fraturado e fissuro-cárstico.

Fonte metodológica: Atlas do Distrito Federal, IPEDF (Hidrogeologia) e Matriz Ecológica,ZEE-DF (Riscos de Perda de Recarga de Aquíferos). 

13. Sistemas hidrogeológicos analisados

A área de estudo foi delimitada considerando a ocorrência dos grupos e sistemas hidrogeológicos relevantes para a análise que intersectam ou estão inseridos na área de estudo.

Foram considerados:

Sistema Paranoá

R3/Q3;

R4;

PPC.

Grupo Canastra

Subsistema F.

14. Áreas prioritárias de recarga

A partir da compartimentação do relevo foi produzido um raster de áreas prioritárias de recarga.

A classificação utilizada no modelo é:

0 = Não prioritária
1 = Prioritária

A variável representa uma condição espacial utilizada posteriormente no cruzamento com o uso e cobertura do solo.

15. Pressão antrópica sobre áreas prioritárias de recarga

A análise de pressão antrópica consiste no cruzamento entre:

Áreas prioritárias de recarga
            ×
Uso e cobertura do solo

O objetivo é identificar quais classes de uso estão localizadas sobre áreas consideradas prioritárias para recarga.

O raster final permite identificar espacialmente:

Formação Savânica em áreas de recarga;

Pastagem em áreas de recarga;

Área urbanizada em áreas de recarga;

Plantação de soja em áreas de recarga.

As áreas não prioritárias são mantidas como categoria espacial de referência.

16. Estatística das áreas de recarga

As áreas das classes foram calculadas em hectares.

O produto estatístico permite comparar:

áreas não prioritárias;

Formação Savânica em áreas de recarga;

Pastagem em áreas de recarga;

Área Urbanizada em áreas de recarga;

Plantação de Soja em áreas de recarga.

Os resultados são utilizados em tabelas e representações gráficas.

17. Dados meteorológicos

Os dados meteorológicos foram processados no Google Earth Engine (GEE).

A análise considera:

Precipitação
     +
Déficit hídrico

O objetivo é caracterizar a condição hídrica sazonal da área de estudo.

O período analisado corresponde ao ano de 2024.

18. Precipitação — CHIRPS

Foi utilizado o dataset:

UCSB-CHC/CHIRPS/V3/DAILY_SAT

com a banda:

precipitation

A coleção possui dados diários de precipitação.

A precipitação foi calculada por acumulação temporal utilizando:

.sum()

Quando aplicado a uma janela temporal específica, o resultado representa a soma dos valores diários de precipitação daquele período.

19. Precipitação sazonal

Foram definidos períodos sazonais para comparação.

Estação seca

Junho a setembro.

Estação chuvosa

Janeiro a abril.

A precipitação sazonal é calculada por soma dos valores diários pertencentes ao período selecionado.

20. Déficit hídrico — TerraClimate

Foi utilizado o dataset:

IDAHO_EPSCOR/TERRACLIMATE

com a banda:

def

A banda def representa o balanço hídrico climático utilizado para caracterizar o déficit hídrico.

O processamento foi realizado sobre os dados mensais e os valores foram acumulados para a estação analisada.

A escala indicada nos metadados do dataset é:

0.1

Portanto:

valor físico = valor armazenado × 0,1

Essa conversão é necessária antes da interpretação dos valores de déficit hídrico.

21. Vulnerabilidade hídrica sazonal

A análise da vulnerabilidade hídrica sazonal integra as condições ambientais e antrópicas relacionadas à disponibilidade de água.

As principais variáveis consideradas são:

Precipitação sazonal
        +
Déficit hídrico sazonal
        +
Risco de perda de recarga
        +
Uso e cobertura do solo
        +
Explotação de águas subterrâneas

O modelo não deve ser interpretado como uma estimativa direta do volume armazenado nos aquíferos.

Seu objetivo é construir uma base espacial para interpretação das condições de vulnerabilidade e pressão sobre os recursos hídricos subterrâneos.

22. Dados de outorga

Os dados de outorga de águas subterrâneas (ADASA-2026) foram utilizados para caracterizar a exploração dos recursos hídricos subterrâneos na área de estudo. 

A camada de pontos foi inicialmente recortada diretamente pela área de estudo.

Os principais atributos utilizados foram:

tipo_poco
finalida_1
va_max
uh_nome

Onde:

tipo_poco = tipo de poço;

finalida_1 = finalidade de uso;

va_max = vazão máxima/outorgada registrada na base;

uh_nome = unidade hidrográfica.

O Manual Técnico e Administrativo de Outorga da ADASA foi utilizado como referência para a organização e interpretação dos dados de outorga.

23. Estatísticas das outorgas

As outorgas foram agregadas por unidade hidrográfica.

Foram calculados:

quantidade de pontos de captação;

quantidade de outorgas;

vazão total outorgada;

finalidade de uso;

tipo de poço.

As finalidades analisadas incluem:

abastecimento humano;

criação de animais;

uso industrial;

irrigação;

uso comercial;

outros.

Os tipos de poço foram agrupados em:

manual;

tubular.

24. Banco de dados PostgreSQL/PostGIS

A organização dos dados estatísticos foi realizada em banco de dados espacial utilizando:

PostgreSQL
PostGIS

O processamento inclui:

Dados brutos
    │
    ▼
Recorte espacial
    │
    ▼
Padronização
    │
    ▼
Agregação
    │
    ▼
Consultas SQL
    │
    ▼
Tabelas estatísticas

25. Tabela-mestre de indicadores

Para evitar redundância entre diferentes tabelas estatísticas, os resultados foram integrados em uma tabela-mestre por unidade hidrográfica.

A estrutura reúne indicadores relacionados à exploração de águas subterrâneas.

Entre os campos estão:

uh_nome
qtd_pontos_captacao
vazao_total_outorgada
qtd_abastecimento_humano
qtd_criacao_animais
qtd_industrial
qtd_irrigacao
qtd_outros
qtd_uso_comercial
qtd_pocos_manuais
qtd_pocos_tubulares

Essa estrutura permite utilizar uma única tabela como base para as visualizações estatísticas.

26. Matriz de indicadores de uso de águas subterrâneas

A tabela-mestre foi transformada em uma matriz gráfica para representar a variação dos indicadores entre as unidades hidrográficas.

As unidades hidrográficas utilizadas são:

Alto Rio São Bartolomeu
Médio Rio São Bartolomeu
Ribeirão Sobradinho

Os indicadores são:

Pontos de captação;

Vazão total outorgada;

Abastecimento humano;

Criação de animais;

Industrial;

Irrigação;

Outros;

Uso comercial;

Poços manuais;

Poços tubulares.

A matriz utiliza uma representação relativa da posição dos pontos para permitir a visualização simultânea de indicadores com grandezas diferentes.

Os valores originais são preservados nos rótulos dos pontos.

Assim:

A posição gráfica é representativa
        ≠
escala quantitativa comum

27. Visualização estatística em Python

Os gráficos foram produzidos utilizando:

Python
Matplotlib
Pandas

Entre os produtos desenvolvidos estão:

matriz de indicadores;

gráfico de áreas de sobreposição e pressão antrópica sobre areas de recarga;


As visualizações foram configuradas para utilização em produtos cartográficos e documentação técnica.

28. Produtos cartográficos

Os principais produtos cartográficos desenvolvidos incluem:

Mapa de risco de perda de recarga de aquífero

Representa as classes de risco espacializadas na área de estudo, juntamente com:

unidades hidrográficas;

assentamentos;

rede hidrográfica;

pontos de outorga.

Mapa de pressão antrópica sobre áreas de recarga

Integra:

áreas prioritárias de recarga;

Formação Savânica;

Pastagem;

Área urbanizada;

Soja;

pontos de outorga;

unidades hidrográficas.

Mapas de uso e cobertura

Representam a distribuição espacial das classes de uso e cobertura do solo.

Mapas de relevo

Incluem informações relacionadas à:

hipsometria;

declividade;

compartimentação;

áreas prioritárias para recarga.

29. Interpretação aplicada à Geografia Agrária

A análise espacial é utilizada como instrumento para compreender a organização territorial dos assentamentos e suas relações com os recursos naturais.

A dimensão hídrica é analisada não apenas como variável físico-ambiental, mas como componente da reprodução das atividades agrícolas e das relações territoriais.

Nesse sentido, a distribuição das captações subterrâneas, das áreas agrícolas, das áreas urbanizadas e das áreas prioritárias de recarga permite investigar possíveis situações de desigualdade territorial no acesso e na utilização dos recursos hídricos.

A análise da estrutura fundiária complementa essa interpretação ao permitir relacionar a distribuição espacial da terra às formas de ocupação, produção e apropriação dos recursos territoriais.

30. Fluxo técnico do projeto

┌───────────────────────────────────────────────┐
│              DADOS DE ENTRADA                 │
├───────────────────────────────────────────────┤
│ Hidrografia                                   │
│ Assentamentos                                 │                                │
│ Uso e cobertura                               │
│ Relevo                                        │
│ Sistemas aquíferos                            │
│ Outorgas                                      │
│ CHIRPS                                        │
│ TerraClimate                                  │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│                    QGIS                       │
├───────────────────────────────────────────────┤
│ Recortes                                      │
│ Interseções                                   │
│ Rasterização                                  │
│ Reclassificação                               │
│ Estatísticas zonais                           │
│ Calculadora Raster                            │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│            GOOGLE EARTH ENGINE                │
├───────────────────────────────────────────────┤
│ CHIRPS                                        │
│ Precipitação anual                            │
│ Precipitação seca                             │
│ Precipitação chuvosa                          │
│                                               │
│ TerraClimate                                  │
│ Déficit hídrico sazonal                       │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│             POSTGRESQL / POSTGIS              │
├───────────────────────────────────────────────┤
│ Outorgas                                      │
│ Consultas espaciais                           │
│ Agregação por UH                              │
│ Estatísticas                                  │
│ Tabela-mestre                                 │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│                  PYTHON                       │
├───────────────────────────────────────────────┤
│ Matplotlib                                    │
│ Pandas                                        │
│ Gráficos estatísticos                         │
│ Matrizes de indicadores                       │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│               PRODUTOS FINAIS                 │
├───────────────────────────────────────────────┤
│ Mapas temáticos                               │
│ Matrizes estatísticas                         │
│ Gráficos                                      │
│ Tabelas                                       │
│ Diagnóstico territorial                       │
│ WebGIS                                        │
└───────────────────────────────────────────────┘

31. Tecnologias utilizadas

Geoprocessamento

QGIS;

GDAL;

Orfeo Toolbox.

Sensoriamento remoto

Google Earth Engine;

Sentinel-2;

Landsat;

CBERS;

MODIS.

Dados ambientais

CHIRPS;

TerraClimate;

Copernicus DEM;

SRTM;

SoilGrids;

dados de relevo e solos.

Banco de dados

PostgreSQL;

PostGIS;

SQL.

Programação e análise de dados

Python;

Pandas;

GeoPandas;

Rasterio;

Matplotlib;


32. Considerações metodológicas

Os produtos desenvolvidos devem ser interpretados como instrumentos de análise territorial e espacial.

O modelo de risco de perda de recarga utilizado como referência está relacionado à sensibilidade dos sistemas aquíferos à redução da recarga e da produção hídrica. A metodologia original considera características hidrogeológicas e geomorfológicas, sendo utilizada neste projeto como referência para a interpretação das condições de recarga na área de estudo.

A incorporação do uso e cobertura do solo não representa, isoladamente, uma alteração do modelo original de risco do ZEE-DF. O uso do solo é utilizado como variável complementar para identificar a pressão antrópica incidente sobre áreas consideradas prioritárias para recarga.

Da mesma forma, os dados de outorga representam registros relacionados ao direito de uso e às características das captações registradas na base, não devendo ser interpretados diretamente como volume efetivamente extraído em determinado período sem dados de monitoramento que permitam essa inferência.

33. Limitações

Entre as principais limitações metodológicas estão:

diferenças temporais entre as bases;

possíveis inconsistências geométricas;

ausência de monitoramento contínuo de todas as captações;

diferença entre vazão outorgada e vazão efetivamente explotada;

limitações inerentes à representação espacial de sistemas aquíferos;

caráter indicativo da classificação de áreas prioritárias de recarga;

necessidade de validação de campo para determinadas interpretações.

34. Perspectivas de aplicação

A base desenvolvida pode ser utilizada como suporte para:

planejamento territorial;

assistência técnica e extensão rural;

gestão de recursos hídricos;

diagnóstico ambiental;

planejamento agrícola;

análise de vulnerabilidade hídrica;

monitoramento dos assentamentos;

organização cadastral;

desenvolvimento de geosserviços;

apoio à tomada de decisão.

A integração entre dados territoriais, ambientais e produtivos permite construir uma leitura espacial mais abrangente das condições de reprodução das atividades agrícolas nos assentamentos.

35. Referências e bases de dados

ZEE-DF

Governo do Distrito Federal. Zoneamento Ecológico-Econômico do Distrito Federal — ZEE-DF. Subprodutos relacionados à análise de risco de perda de recarga de aquíferos.

A metodologia utilizada como referência considera variáveis relacionadas ao domínio poroso, condutividade hidráulica, compartimentação geomorfológica e vazão dos sistemas fraturados e fissuro-cársticos.

ADASA

Agência Reguladora de Águas, Energia e Saneamento Básico do Distrito Federal — ADASA.

Manual Técnico e Administrativo de Outorga de Direito de Uso de Recursos Hídricos no Distrito Federal.

EMBRAPA

Empresa Brasileira de Pesquisa Agropecuária — EMBRAPA.

Dados de solos e relevo utilizados na caracterização ambiental da área de estudo (2015).

CHIRPS

Climate Hazards Center InfraRed Precipitation with Station data — CHIRPS.

Dataset utilizado para obtenção de precipitação diária e cálculo de precipitação acumulada sazonal.

TerraClimate

TerraClimate — Global High-resolution Gridded Temperature, Precipitation, and Other Water Balance Variables.

Dataset utilizado para caracterização do déficit hídrico climático.

MapBiomas

Projeto MapBiomas — dados de uso e cobertura da terra utilizados na caracterização territorial.

Sentinel-2

Programa Copernicus / European Space Agency — imagens utilizadas como suporte à interpretação territorial e geração de produtos de sensoriamento remoto.

36. Autor

Matheus Santos de Oliveira

Graduação em Geografia

Projeto de Estágio Supervisionado em Geografia 

Distrito Federal — Brasil

47. Licença

Este repositório tem finalidade de documentação, apresentação e portfólio do projeto.

Os dados de terceiros utilizados no projeto permanecem sujeitos às respectivas licenças e condições de uso de seus provedores.

Dados territoriais ou cadastrais que possam envolver informações sensíveis não são disponibilizados publicamente neste repositório.