Hidrogeologia, Risco de Perda de Recarga e Pressão Antrópica

Documentação do fluxo metodológico utilizado no QGIS para elaboração dos produtos cartográficos relacionados à hidrogeologia, ao risco de perda de recarga de aquíferos, à pressão antrópica sobre áreas de recarga e à exploração de águas subterrâneas na área de estudo.

1. Identificação do projeto

Este diretório reúne a documentação e a organização metodológica do eixo de hidrogeologia do Projeto de Estágio Supervisionado em Geografia.

O projeto integra informações:

hidrogeológicas;

geomorfológicas;

de uso e cobertura da terra;

unidades hidrográficas;

assentamentos rurais;

áreas prioritárias para recarga;

risco de perda de recarga;

pontos de outorga;

tipos e finalidades de uso da água;

vazões outorgadas.

A finalidade é compreender a relação entre as condições naturais de recarga, a estrutura territorial e as formas de apropriação dos recursos hídricos subterrâneos.

A organização metodológica separa três dimensões principais:

CONDIÇÃO HIDROGEOLÓGICA
        │
        ├── Sistemas aquíferos
        ├── Subsistemas aquíferos
        └── Risco de perda de recarga
                │
                ▼
CONDIÇÃO TERRITORIAL
        │
        ├── Relevo
        ├── Uso e cobertura
        └── Áreas prioritárias de recarga
                │
                ▼
EXPLORAÇÃO HÍDRICA
        │
        ├── Pontos de outorga
        ├── Finalidades
        ├── Tipos de poço
        └── Vazão outorgada
                │
                ▼
       ANÁLISE INTEGRADA

2. Sistema de referência espacial

As operações espaciais foram padronizadas para:

SIRGAS 2000 / UTM Zona 23S
EPSG:31983

O sistema projetado em coordenadas métricas foi utilizado para:

recortes espaciais;

interseções;

cálculo de áreas;

análise de distâncias;

rasterização;

compatibilização de grades;

representação cartográfica.

Antes do processamento, as camadas foram verificadas quanto à compatibilidade do sistema de referência espacial. Quando necessário, foi realizada a reprojeção para o SRC de trabalho.

3. Camadas utilizadas no QGIS

3.1 Base cartográfica

Foram utilizadas como referência espacial:

unidades hidrográficas do Alto Rio São Bartolomeu;

Médio Rio São Bartolomeu;

Ribeirão Sobradinho;

assentamentos rurais da reforma agrária contidos na área de estudo.

3.2 Hidrogeologia

As camadas hidrogeológicas foram organizadas segundo a hierarquia:

Grupo
  │
  └── Sistema
        │
        └── Subsistema

Foram consideradas informações relativas a:

grupos hidrogeológicos;

sistemas aquíferos;

subsistemas aquíferos;

domínio poroso;

domínio fraturado;

domínio fissuro-cárstico.

3.3 Risco de recarga

Foram utilizadas:

classes de risco de perda de recarga;

áreas prioritárias de recarga;

variáveis hidrogeológicas e geomorfológicas associadas ao modelo de referência.

3.4 Relevo

Foram utilizadas camadas de:

compartimentação geomorfológica;

tipos de relevo;

classes selecionadas para definição de áreas prioritárias.

3.5 Uso e cobertura

Foi utilizado o raster de uso e cobertura da terra da Coleção 10 do MapBiomas (2024), posteriormente recortado e reclassificado para a análise de pressão antrópica.

3.6 Outorgas

Foram utilizadas camadas pontuais de:

captações subterrâneas;

pontos de outorga;

tipo de poço;

finalidade de uso;

vazão máxima/outorgada;

unidade hidrográfica.

4. Área de estudo e recorte hidrogeológico

A área de estudo foi utilizada como máscara espacial para a preparação das camadas.

As unidades hidrográficas constituem referência territorial para a agregação e interpretação dos dados relacionados às águas subterrâneas.

Foram destacadas:

Alto Rio São Bartolomeu;

Médio Rio São Bartolomeu;

Ribeirão Sobradinho.

A utilização das unidades hidrográficas como referência é coerente com a abordagem do ZEE-DF, que utiliza esse recorte para integrar a leitura dos riscos ecológicos e das transformações territoriais.

5. Caracterização hidrogeológica

O Distrito Federal apresenta sistemas de águas subterrâneas associados a diferentes condições geológicas e hidrogeológicas.

O Manual Técnico e Administrativo de Outorga da ADASA caracteriza a existência de domínios poroso, fraturado e fissuro-cárstico e destaca a necessidade de subdivisão em sistemas e subsistemas em razão da diversidade litológica. As águas subterrâneas possuem função estratégica no abastecimento e na manutenção das vazões dos cursos superficiais. fileciteturn2file2

A classificação hidrogeológica utilizada no projeto procura preservar essa diferenciação espacial, evitando tratar a área de estudo como um sistema aquífero homogêneo.

6. Mapas de Sistemas Aquíferos e Subsistemas Aquíferos

Como parte da caracterização hidrogeológica, foram incorporados dois novos produtos cartográficos, conforme a composição apresentada no layout do projeto.

6.1 Mapa de Sistemas Aquíferos

O mapa de Sistemas Aquíferos apresenta a distribuição espacial dos principais grupos hidrogeológicos incidentes na área de estudo.

A legenda cartográfica apresentada no produto distingue:

Grupo Bambuí – Topo
Grupo Paranoá
Grupo Canastra

Esse produto tem função de caracterização territorial. Ele permite visualizar a compartimentação dos sistemas aquíferos e sua relação espacial com as unidades hidrográficas e o recorte de estudo.

A representação é utilizada como camada de referência para as demais análises hidrogeológicas.

6.2 Mapa de Subsistemas Aquíferos

O mapa de Subsistemas Aquíferos detalha a compartimentação interna dos sistemas hidrogeológicos.

Na representação cartográfica utilizada no projeto são destacados:

Subsistema F
Subsistema PPC
Subsistema R3/Q3
Subsistema R4

O detalhamento por subsistemas é particularmente importante porque a capacidade de armazenamento, circulação e produção de água subterrânea não é espacialmente uniforme.

O Manual da ADASA também apresenta a organização das reservas subterrâneas por domínios, sistemas e subsistemas e utiliza essa compartimentação na análise de disponibilidade hídrica. fileciteturn5file14

6.3 Função dos mapas na análise

Os dois mapas possuem função distinta do mapa de risco:

Sistemas aquíferos
        │
        ▼
Caracterização hidrogeológica geral
        │
        ▼
Subsistemas aquíferos
        │
        ▼
Detalhamento hidrogeológico
        │
        ▼
Risco de perda de recarga
        │
        ▼
Pressão antrópica + exploração hídrica

Assim, os mapas de sistemas e subsistemas não devem ser confundidos com a classificação de risco. Eles representam a estrutura hidrogeológica sobre a qual os processos de recarga, produção e apropriação da água subterrânea são analisados.

7. Risco de perda de recarga de aquíferos

O modelo utilizado como referência é o Risco de Perda de Recarga de Aquíferos do ZEE-DF.

A metodologia do ZEE-DF considera a sensibilidade dos aquíferos à redução da recarga e da produção hídrica. Entre as variáveis explicativas estão o domínio poroso e sua condutividade hidráulica, a compartimentação geomorfológica e as vazões associadas aos sistemas e subsistemas dos domínios fraturado e fissuro-cárstico. fileciteturn5file2turn5file9

A classificação cartográfica utilizada é:

1 — Muito baixo
2 — Baixo
3 — Médio
4 — Alto
5 — Muito alto

Na representação do ZEE-DF, aproximadamente:

19,7% correspondem à classe muito baixa;

15,5% à classe baixa;

37,9% à classe média;

25,4% à classe alta;

0,3% à classe muito alta.

Esses valores evidenciam a heterogeneidade espacial do risco de perda de recarga no Distrito Federal. fileciteturn2file9

Nota metodológica: o mapa de risco é utilizado como referência hidroambiental. O projeto não o apresenta como uma recalibração ou reconstrução integral do modelo original do ZEE-DF.

8. Variável do domínio poroso

O domínio poroso é importante porque participa dos processos de infiltração e recarga dos aquíferos rasos e profundos.

No modelo do ZEE-DF, a sensibilidade à perda de recarga está relacionada aos tipos de solos e à condutividade hidráulica. fileciteturn5file12

A camada foi utilizada como referência para compreender a distribuição espacial das condições de infiltração e recarga.

9. Compartimentação geomorfológica

A geomorfologia é considerada uma variável de controle da recarga porque a morfologia da paisagem interfere nos fluxos verticais e laterais das águas de infiltração.

O ZEE-DF identifica planos elevados, rebordos e planos intermediários como áreas mais favoráveis à efetivação da recarga, enquanto rampas íngremes e vales dissecados apresentam menor contribuição. fileciteturn5file12

A classificação de referência é:

Rampas íngremes       → Muito baixa
Vales dissecados      → Baixa
Planos intermediários  → Média
Rebordos              → Alta
Planos elevados       → Muito alta

10. Variável de vazão dos sistemas e subsistemas

A terceira variável utilizada na análise de sensibilidade do ZEE-DF está relacionada às vazões registradas nos sistemas e subsistemas dos domínios fraturado e fissuro-cárstico.

O pressuposto metodológico é que sistemas mais produtivos apresentam maior sensibilidade à redução da recarga e da produção hídrica, pois interferências negativas podem resultar em perdas relevantes de produção subterrânea. fileciteturn5file9

No projeto, essa informação é mantida articulada aos mapas de sistemas e subsistemas, permitindo interpretar a dimensão espacial da produção hídrica subterrânea.

11. Sistemas hidrogeológicos incidentes na área de estudo

Para as análises complementares foram considerados os sistemas e subsistemas relevantes que intersectam o recorte de estudo.

Entre os elementos destacados no projeto estão:

Sistema Paranoá

R3/Q3;

R4;

PPC.

Grupo Canastra

Subsistema F.

Os mapas de sistemas e subsistemas permitem representar espacialmente essa compartimentação antes do cruzamento com as demais variáveis.

12. Incorporação do mapa de risco ao projeto

O mapa de risco foi incorporado ao projeto QGIS como camada temática de referência.

A estrutura de análise é:

Sistemas e subsistemas
        │
        ▼
Condições hidrogeológicas
        │
        +
        │
        ▼
Compartimentação geomorfológica
        │
        +
        │
        ▼
Risco de perda de recarga

O objetivo é preservar a distinção entre:

caracterização hidrogeológica;

modelagem/representação do risco;

análise complementar de pressão antrópica;

análise da exploração hídrica.

13. Áreas prioritárias de recarga

Para a análise própria de pressão antrópica foi produzida uma variável binária a partir da compartimentação do relevo.

Classificação:

0 = Não prioritária
1 = Prioritária

A seleção foi inspirada no princípio geomorfológico utilizado pelo ZEE-DF, segundo o qual superfícies planas e planos elevados apresentam melhores condições para a efetivação da recarga.

Foram selecionadas, na camada utilizada no projeto, as classes:

Plano;

Plano e Suave Ondulado;

Suave Ondulado.

Essa classificação constitui uma adaptação operacional para a escala e finalidade da análise.

14. Rasterização das áreas prioritárias

Como o uso e cobertura da terra utilizado na análise está em formato raster, a camada de relevo foi convertida para uma superfície matricial compatível.

Foi utilizada a ferramenta:

Rasterizar (Vetor para Raster)

Durante o processamento foram considerados:

campo de classificação;

extensão;

resolução;

SRC;

alinhamento da grade;

valores NoData.

Resultado:

0 — Não prioritária
1 — Área prioritária de recarga

15. Compatibilização dos rasters

Antes das operações célula-a-célula, foram verificadas:

mesma referência espacial;

mesma extensão;

mesma resolução;

mesma dimensão de pixel;

mesma origem/alinhamento;

tratamento dos valores NoData.

Essa etapa evita deslocamentos espaciais e incompatibilidades durante a Calculadora Raster.

16. Uso e cobertura da terra

O raster de uso e cobertura da Coleção 10 do MapBiomas (2024) foi utilizado para representar a ocupação territorial incidente sobre as áreas prioritárias.

As classes selecionadas para o produto de pressão foram:

Formação Savânica;

Pastagem;

Área Urbanizada;

Plantação de Soja.

As demais classes foram agrupadas na categoria de referência.

17. Reclassificação do uso e cobertura

A variável temática foi organizada como:

0 = Outros usos
1 = Formação Savânica
2 = Pastagem
3 = Área Urbanizada
4 = Plantação de Soja

As classes de pastagem, área urbanizada e soja foram destacadas por representarem formas de ocupação e uso capazes de modificar propriedades da superfície, como permeabilidade, compactação, infiltração e escoamento.

A Formação Savânica foi mantida como categoria de referência de cobertura vegetal natural ou predominantemente natural.

18. Pressão antrópica sobre áreas prioritárias de recarga

A pressão antrópica foi obtida pelo cruzamento:

Áreas prioritárias de recarga
              ×
Uso e cobertura da terra

A operação foi realizada pela Calculadora Raster.

A lógica é:

Área prioritária
      +
Formação Savânica
      ↓
Formação Savânica em área de recarga

Área prioritária
      +
Pastagem
      ↓
Pastagem em área de recarga

Área prioritária
      +
Área Urbanizada
      ↓
Área Urbanizada em área de recarga

Área prioritária
      +
Soja
      ↓
Plantação de Soja em área de recarga

O produto identifica a coincidência espacial entre uso da terra e áreas consideradas prioritárias para recarga.

19. Classificação do mapa de pressão antrópica

O raster final foi organizado em:

0 — Áreas não prioritárias de recarga
1 — Formação Savânica em áreas de recarga
2 — Pastagem em áreas de recarga
3 — Área Urbanizada em áreas de recarga
4 — Plantação de Soja em áreas de recarga

A classificação permite distinguir áreas prioritárias preservadas daquelas submetidas a usos agropecuários ou urbanos.

Importante: o termo “pressão antrópica” representa a sobreposição espacial entre usos da terra e áreas prioritárias. As classes não devem ser interpretadas automaticamente como níveis equivalentes de impacto hidrogeológico.

20. Quantificação das classes de pressão

As áreas foram calculadas em hectares.

A relação utilizada é:

Área_ha = (N_pixels × Área_pixel) / 10.000

onde:

N_pixels = quantidade de pixels da classe;

Área_pixel = área de cada pixel em m²;

10.000 = fator de conversão de m² para hectares.

Valores registrados no produto cartográfico:

Classe

Área (ha)

Áreas não prioritárias de recarga

11.893,61

Formação Savânica em áreas de recarga

25.105,73

Pastagem em áreas de recarga

7.400,47

Área Urbanizada em áreas de recarga

4.889,60

Plantação de Soja em áreas de recarga

5.021,75

Total

54.311,52

21. Pontos de outorga de águas subterrâneas

Os pontos de outorga foram incorporados como informação pontual sobre a exploração dos recursos hídricos subterrâneos.

A ADASA estabelece instrumentos de outorga e registro para usos de recursos hídricos e apresenta procedimentos específicos para águas subterrâneas, incluindo captações por poços manuais e tubulares. fileciteturn3file0

No QGIS, os pontos foram:

carregados como camada vetorial;

conferidos quanto ao SRC;

recortados pela área de estudo;

sobrepostos às unidades hidrográficas;

relacionados aos sistemas e subsistemas;

sobrepostos às áreas de risco;

utilizados como referência para a análise territorial da exploração hídrica.

22. Atributos das outorgas

Os principais campos utilizados são:

tipo_poco
finalida_1
va_max
uh_nome

Onde:

tipo_poco   = tipo de poço
finalida_1  = finalidade de uso
va_max      = vazão máxima/outorgada registrada
uh_nome     = unidade hidrográfica

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

23. Estatísticas das outorgas

As outorgas foram agregadas por unidade hidrográfica.

Foram calculados:

quantidade de pontos de captação;

quantidade de outorgas;

vazão total outorgada;

finalidade de uso;

tipo de poço.

As unidades hidrográficas utilizadas na matriz são:

Alto Rio São Bartolomeu
Médio Rio São Bartolomeu
Ribeirão Sobradinho

24. Banco de dados PostgreSQL/PostGIS

A organização dos dados estatísticos foi realizada em banco espacial utilizando:

PostgreSQL
PostGIS
SQL

Fluxo:

Dados brutos
    │
    ▼
Recorte espacial
    │
    ▼
Padronização
    │
    ▼
Agregação por unidade hidrográfica
    │
    ▼
Consultas SQL
    │
    ▼
Tabelas estatísticas

25. Tabela-mestre de indicadores

Para evitar redundância entre diferentes tabelas estatísticas, os resultados foram integrados em uma tabela-mestre por unidade hidrográfica.

Campos principais:

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

Essa estrutura permite utilizar uma única base para as visualizações estatísticas.

26. Matriz de indicadores de uso de águas subterrâneas

A tabela-mestre foi transformada em uma matriz gráfica para representar a variação dos indicadores entre as unidades hidrográficas.

Indicadores:

pontos de captação;

vazão total outorgada;

abastecimento humano;

criação de animais;

industrial;

irrigação;

outros;

uso comercial;

poços manuais;

poços tubulares.

A matriz utiliza uma representação relativa da posição dos pontos para permitir a visualização simultânea de indicadores com grandezas diferentes.

Os valores originais são preservados nos rótulos.

Posição gráfica
      ≠
Escala quantitativa comum

27. Visualização estatística

Os gráficos foram produzidos utilizando:

Python;

Pandas;

Matplotlib.

Entre os produtos estão:

matriz de indicadores;

gráfico de áreas de sobreposição e pressão antrópica;

estatísticas por unidade hidrográfica.

As visualizações foram configuradas para utilização nos produtos cartográficos e na documentação técnica.

28. Produtos cartográficos

O eixo hidrogeológico possui quatro produtos principais representados no layout final.

Mapa 1 — Áreas de risco de perda de recarga de aquífero

Representa:

classes de risco;

unidades hidrográficas;

assentamentos;

contexto hidrográfico.

Mapa 2 — Pressão antrópica sobre áreas de recarga

Integra:

áreas prioritárias;

Formação Savânica;

Pastagem;

Área Urbanizada;

Plantação de Soja;

unidades hidrográficas;

pontos de outorga.

Mapa 3 — Sistemas Aquíferos

Representa a compartimentação dos grupos/sistemas hidrogeológicos incidentes no território analisado.

A legenda do produto apresenta:

Grupo Bambuí – Topo
Grupo Paranoá
Grupo Canastra

Mapa 4 — Subsistemas Aquíferos

Detalha a organização interna dos sistemas representados no mapa anterior.

A legenda do produto apresenta:

Subsistema F
Subsistema PPC
Subsistema R3/Q3
Subsistema R4

Os mapas 3 e 4 complementam os mapas de risco e pressão, permitindo compreender a estrutura hidrogeológica que sustenta a interpretação territorial da recarga e da exploração subterrânea.

29. Integração entre risco, pressão e exploração hídrica

A interpretação integrada utiliza três componentes:

                 HIDROGEOLOGIA
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
   Sistemas/                  Subsistemas
   Aquíferos                   Aquíferos
          │                       │
          └───────────┬───────────┘
                      ▼
              Risco de perda
                de recarga
                      │
                      +
                      ▼
              Uso da terra
                      │
                      ▼
             Pressão antrópica
                      │
                      +
                      ▼
             Pontos de outorga
                      │
                      ▼
             Exploração hídrica
                      │
                      ▼
             Análise territorial

Essa estrutura permite observar a coincidência espacial entre:

condições hidrogeológicas;

áreas de maior sensibilidade à perda de recarga;

áreas prioritárias;

usos agropecuários;

áreas urbanizadas;

captações subterrâneas.

30. Sobreposição das unidades hidrográficas

As unidades hidrográficas foram mantidas como referência espacial nos mapas e estatísticas.

No mapa de pressão, permitem interpretar a distribuição dos usos e das captações dentro do sistema de drenagem.

No mapa de risco, permitem observar a distribuição das classes de risco dentro de cada unidade.

Na análise de outorgas, constituem a unidade de agregação dos indicadores.

31. Procedimentos vetoriais utilizados no QGIS

Recortar — Clip

Utilizado para limitar as camadas à área de estudo.

Interseção — Intersection

Utilizada para gerar áreas resultantes da sobreposição entre:

área de estudo e sistemas hidrogeológicos;

área de estudo e subsistemas;

área de estudo e unidades hidrográficas;

área de estudo e uso/cobertura;

área de estudo e mapa de risco;

áreas prioritárias e demais camadas.

Dissolver — Dissolve

Utilizado quando necessário para agrupar geometrias pertencentes à mesma categoria.

Calcular geometria

Utilizado para calcular áreas em unidades métricas e posterior conversão para hectares.

32. Procedimentos raster utilizados no QGIS

Recortar Raster pela Camada Máscara

Utilizado para limitar os rasters à área de estudo.

Rasterizar

Utilizado para converter classes vetoriais de relevo em superfícies matriciais.

Reclassificação

Utilizada para transformar classes temáticas em variáveis específicas do modelo.

Calculadora Raster

Utilizada para:

selecionar classes;

combinar variáveis;

produzir a máscara de áreas prioritárias;

cruzar áreas prioritárias e uso da terra;

gerar o raster final de pressão antrópica.

33. Fluxo técnico do projeto

┌───────────────────────────────────────────────┐
│                DADOS DE ENTRADA               │
├───────────────────────────────────────────────┤
│ Hidrografia                                   │
│ Assentamentos                                 │
│ Uso e cobertura                               │
│ Relevo                                        │
│ Sistemas aquíferos                            │
│ Subsistemas aquíferos                         │
│ Risco de perda de recarga                     │
│ Outorgas                                      │
└───────────────────────┬───────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────┐
│                     QGIS                      │
├───────────────────────────────────────────────┤
│ Recortes                                      │
│ Interseções                                   │
│ Rasterização                                  │
│ Reclassificação                               │
│ Calculadora Raster                            │
│ Estatísticas                                  │
│ Simbologia                                    │
└───────────────────────┬───────────────────────┘
                        │
             ┌──────────┴──────────┐
             ▼                     ▼
     Risco de perda          Pressão antrópica
       de recarga             sobre recarga
             │                     │
             └──────────┬──────────┘
                        │
                        ▼
              Sistemas e subsistemas
                        │
                        ▼
                  Pontos de outorga
                        │
                        ▼
                 PostgreSQL/PostGIS
                        │
                        ▼
                   Python/JupyterLab
                        │
                        ▼
             Mapas + tabelas + gráficos

34. Interpretação aplicada à Geografia Agrária

A análise hidrogeológica é utilizada não apenas como caracterização físico-natural, mas como instrumento para compreender as relações territoriais que envolvem a água subterrânea.

A distribuição dos sistemas e subsistemas aquíferos fornece a base física sobre a qual ocorrem processos de recarga, armazenamento e circulação da água.

O risco de perda de recarga introduz a dimensão da vulnerabilidade ambiental. O uso e cobertura da terra evidencia as formas de ocupação que incidem sobre áreas prioritárias. As outorgas, por sua vez, registram espacialmente os pontos institucionalizados de apropriação do recurso hídrico.

Essa integração permite investigar relações entre:

Terra
  +
Uso da terra
  +
Água subterrânea
  +
Produção agrícola
  +
Estrutura territorial

Sob a perspectiva da Geografia Agrária, a água é compreendida como elemento material da reprodução das atividades produtivas e como recurso cuja disponibilidade e apropriação são espacialmente diferenciadas.

35. Considerações metodológicas

O mapa de Risco de Perda de Recarga é uma camada de referência baseada na metodologia do ZEE-DF. O projeto não deve ser apresentado como uma reconstrução integral desse modelo.

A pressão antrópica constitui um produto analítico complementar elaborado no QGIS a partir do cruzamento entre áreas geomorfologicamente prioritárias e uso/cobertura da terra.

Os mapas de sistemas e subsistemas possuem função de caracterização hidrogeológica e não representam, por si só, classes de risco.

Da mesma forma, os dados de outorga representam registros administrativos do direito de uso e características das captações. A vazão outorgada não deve ser interpretada automaticamente como volume efetivamente explotado sem dados de monitoramento.

O cruzamento espacial entre outorgas e áreas de risco ou de recarga indica coincidência territorial, não causalidade.

36. Limitações

Entre as principais limitações metodológicas estão:

diferenças temporais entre as bases;

diferenças de escala cartográfica;

possíveis inconsistências geométricas;

ausência de monitoramento contínuo de todas as captações;

diferença entre vazão outorgada e vazão efetivamente explotada;

limitações inerentes à representação espacial dos sistemas aquíferos;

caráter indicativo da classificação de áreas prioritárias;

necessidade de validação de campo;

limitações associadas à escala das bases hidrogeológicas;

impossibilidade de inferir, apenas pela coincidência espacial, relações causais entre uso da terra, outorga e perda de disponibilidade hídrica.

37. Referências e bases de dados

ZEE-DF

Governo do Distrito Federal. Zoneamento Ecológico-Econômico do Distrito Federal — Matriz Ecológica. Brasília, 2017.

A Matriz Ecológica fundamenta a interpretação dos riscos ecológicos e apresenta a metodologia de análise da sensibilidade dos aquíferos à perda de recarga e de produção hídrica. fileciteturn3file3

ADASA

Agência Reguladora de Águas, Energia e Saneamento Básico do Distrito Federal. Manual Técnico e Administrativo de Outorga de Direito de Uso de Recursos Hídricos no Distrito Federal. Brasília, 2021.

O manual apresenta a classificação e a disponibilidade dos sistemas/subsistemas aquíferos e os procedimentos de outorga de águas subterrâneas. fileciteturn5file14

EMBRAPA

Dados de relevo e compartimentação utilizados na identificação operacional das áreas prioritárias para recarga.

MapBiomas

Coleção 10 (2024). Dados de uso e cobertura da terra utilizados na análise de pressão antrópica.

ADASA — Outorgas

Base de pontos de outorga utilizada para caracterização da exploração de águas subterrâneas na área de estudo.

38. Autor

Matheus Santos de Oliveira

Graduação em Geografia
Projeto de Estágio Supervisionado em Geografia
Distrito Federal — Brasil

39. Licença e uso

Este repositório possui finalidade de documentação, apresentação e portfólio do projeto.

Os dados de terceiros permanecem sujeitos às respectivas licenças e condições de uso de seus provedores.

Dados territoriais, cadastrais ou administrativos que possam envolver informações sensíveis não são disponibilizados publicamente neste repositório.