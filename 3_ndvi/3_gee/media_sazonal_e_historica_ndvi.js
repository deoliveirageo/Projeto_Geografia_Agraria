// ============================================================================
// PROJETO: Geografia Agraria
// MODULO: Analise de Vigor Vegetativo Historico 
// SCRIPT: Medias Sazonais e Historicas de NDVI - Sentinel-2
// AREA: Bacia Hidrografica do Rio Sao Bartolomeu - DF
// ============================================================================
//
// OBJETIVO
// ----------------------------------------------------------------------------
// Gerar medias temporais de NDVI a partir de imagens Sentinel-2 SR
// Harmonized para:
//
// 1. Estacao seca do ano de referencia;
// 2. Estacao chuvosa do ano de referencia;
// 3. Media historica da estacao seca;
// 4. Media historica da estacao chuvosa.
//
// METODOLOGIA
// ----------------------------------------------------------------------------
// As imagens Sentinel-2 sao submetidas a:
//
// 1. Filtro espacial pela area de estudo;
// 2. Filtro temporal;
// 3. Filtro de cobertura de nuvens;
// 4. Mascara de nuvens e cirrus pela banda QA60;
// 5. Conversao da reflectancia para escala 0-1;
// 6. Calculo individual do NDVI;
// 7. Media temporal dos valores de NDVI.
//
// ESTACOES
// ----------------------------------------------------------------------------
// Estacao seca:
// Junho a Setembro.
//
// Estacao chuvosa:
// Novembro a Marco.
//
// ANO DE REFERENCIA
// ----------------------------------------------------------------------------
// Estacao seca:
// Junho a Setembro de 2025.
//
// Estacao chuvosa:
// Novembro de 2024 a Marco de 2025.
//
// SERIE HISTORICA
// ----------------------------------------------------------------------------
// A serie historica utiliza o periodo disponivel na colecao
// Sentinel-2 SR Harmonized:
//
// 2017 a 2024.
//
// IMPORTANTE
// ----------------------------------------------------------------------------
// A serie historica e uma media temporal de NDVI:
// NDVI de cada imagem -> media temporal.
//
// Nao e calculada a media da reflectancia antes do NDVI.
//
// COLECAO
// ----------------------------------------------------------------------------
// COPERNICUS/S2_SR_HARMONIZED
//
// RESOLUCAO ESPACIAL
// ----------------------------------------------------------------------------
// 10 metros para as bandas B4 e B8 utilizadas no NDVI.
//
// SISTEMA DE REFERENCIA PARA EXPORTACAO
// ----------------------------------------------------------------------------
// EPSG:31983
//
// ============================================================================

// CAMADAS VETORIAIS
// ----------------------------------------------------------------------------
// As variaveis "aoi" e "carAOI" correspondem aos assets/imports utilizados
// no Google Earth Engine e devem permanecer disponiveis no Code Editor.
//
// ============================================================================
// ============================================================================
// 01. PARAMETROS
// ============================================================================

var COLLECTION = 'COPERNICUS/S2_SR_HARMONIZED';

var CLOUD_THRESHOLD = 20;

// Periodo historico:
// 2017-2024 = oito anos completos.

var HISTORICAL_START = '2017-01-01';
var HISTORICAL_END = '2025-01-01';


// ============================================================================
// 02. VISUALIZACAO
// ============================================================================

var NDVI_VIS = {
  min: 0.0,
  max: 1.0,
  palette: ['red', 'yellow', 'green']
};


// ============================================================================
// 03. MASCARA DE NUVENS
// ============================================================================
//
// QA60:
// Bit 10 = nuvens opacas
// Bit 11 = cirrus
//
// Os pixels identificados como nuvem ou cirrus sao removidos.
//
// ============================================================================

function maskS2Clouds(image) {

  var qa = image.select('QA60');

  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  var mask = qa
    .bitwiseAnd(cloudBitMask).eq(0)
    .and(
      qa.bitwiseAnd(cirrusBitMask).eq(0)
    );

  return image
    .updateMask(mask)
    .divide(10000)
    .copyProperties(
      image,
      image.propertyNames()
    );
}


// ============================================================================
// 04. CALCULO DO NDVI
// ============================================================================
//
// B8 = NIR
// B4 = RED
//
// NDVI = (NIR - RED) / (NIR + RED)
//
// O NDVI e calculado individualmente para cada imagem.
//
// ============================================================================

function calculateNDVI(image) {

  var ndvi = image
    .normalizedDifference(['B8', 'B4'])
    .rename('NDVI');

  return ndvi.copyProperties(
    image,
    image.propertyNames()
  );
}


// ============================================================================
// 05. PREPARACAO DA COLECAO SENTINEL-2
// ============================================================================

var sentinel2 = ee.ImageCollection(COLLECTION)
  .filterBounds(aoi)
  .filter(
    ee.Filter.lt(
      'CLOUDY_PIXEL_PERCENTAGE',
      CLOUD_THRESHOLD
    )
  )
  .map(maskS2Clouds);


// ============================================================================
// 06. COLECAO SENTINEL-2 COM NDVI
// ============================================================================

var sentinel2NDVI = sentinel2
  .map(calculateNDVI);



// ============================================================================
// 08. MEDIA SAZONAL - ESTACAO SECA
// ============================================================================
//
// Periodo:
// Junho a Setembro de 2025.
//
// ============================================================================

/*

var dryNDVI = sentinel2NDVI
  .filterDate(
    '2025-06-01',
    '2025-10-01'
  );

var ndviDryMean = dryNDVI
  .mean()
  .clip(aoi);

Map.addLayer(
  ndviDryMean,
  NDVI_VIS,
  'NDVI Medio - Estacao Seca 2025'
);

*/

// ============================================================================
// 09. MEDIA SAZONAL - ESTACAO CHUVOSA
// ============================================================================
//
// Periodo:
// Novembro de 2025 a Marco de 2026.
//
// ============================================================================

var rainyNDVI = sentinel2NDVI
  .filterDate(
    '2024-11-01',
    '2025-04-01'
  );

var ndviRainyMean = rainyNDVI
  .mean()
  .clip(aoi);

Map.addLayer(
  ndviRainyMean,
  NDVI_VIS,
  'NDVI Medio - Estacao Chuvosa 2024-2025'
);


// ============================================================================
// 10. MEDIA HISTORICA - ESTACAO SECA
// ============================================================================
//
// Periodo historico:
// Janeiro de 2017 a Dezembro de 2024.
//
// Meses selecionados:
// Junho, Julho, Agosto e Setembro.
//
// ============================================================================



var historicalDryNDVI = sentinel2NDVI
  .filterDate(
    HISTORICAL_START,
    HISTORICAL_END
  )
  .filter(
    ee.Filter.calendarRange(
      6,
      9,
      'month'
    )
  );


// ----------------------------------------------------------------------------
// Media historica de NDVI - Estacao seca
// ----------------------------------------------------------------------------

var ndviHistoricalDryMean = historicalDryNDVI
  .mean()
  .clip(aoi);

Map.addLayer(
  ndviHistoricalDryMean,
  NDVI_VIS,
  'NDVI Medio Historico - Estacao Seca 2017-2024'
);




// ============================================================================
// 11. MEDIA HISTORICA - ESTACAO CHUVOSA
// ============================================================================
//
// Periodo historico:
// Janeiro de 2017 a Dezembro de 2024.
//
// Meses selecionados:
// Novembro, Dezembro, Janeiro, Fevereiro e Marco.
//
// A estacao chuvosa atravessa dois anos. Por isso, os meses 11 e 12
// sao combinados com os meses 1, 2 e 3.
//
// ============================================================================



var rainyMonths = ee.Filter.or(
  ee.Filter.calendarRange(
    11,
    12,
    'month'
  ),
  ee.Filter.calendarRange(
    1,
    3,
    'month'
  )
);


var historicalRainyNDVI = sentinel2NDVI
  .filterDate(
    HISTORICAL_START,
    HISTORICAL_END
  )
  .filter(rainyMonths);



// ----------------------------------------------------------------------------
// Media historica de NDVI - Estacao chuvosa
// ----------------------------------------------------------------------------



var ndviHistoricalRainyMean = historicalRainyNDVI
  .mean()
  .clip(aoi);

Map.addLayer(
  ndviHistoricalRainyMean,
  NDVI_VIS,
  'NDVI Medio Historico - Estacao Chuvosa 2017-2024'
);



// ============================================================================
// 12. CONTROLE DO NUMERO DE IMAGENS
// ============================================================================
//
// O Console apresenta a quantidade de imagens utilizadas em cada periodo.
//
// ============================================================================



print(
  'Imagens - Estacao Seca 2025:',
  dryNDVI.size()
);



print(
  'Imagens - Estacao Chuvosa 2024-2025:',
  rainyNDVI.size()
);



print(
  'Imagens - Historico Estacao Seca 2017-2024:',
  historicalDryNDVI.size()
);

print(
  'Imagens - Historico Estacao Chuvosa 2017-2024:',
  historicalRainyNDVI.size()
);




// ============================================================================
// 07. CAMADAS DE REFERENCIA
// ============================================================================


// ----------------------------------------------------------------------------
// 07.1 Unidade Hidrografica
// ----------------------------------------------------------------------------

var hydroStyle = aoi.style({
  color: 'FF0000',
  fillColor: '00000000',
  width: 2
});

Map.addLayer(
  hydroStyle,
  {},
  'Unidades Hidrograficas - Sao Bartolomeu',
  true
);


// ----------------------------------------------------------------------------
// 07.2 Imoveis Rurais
// ----------------------------------------------------------------------------

var carStyle = carAOI.style({
  color: '000000',
  fillColor: '00000000',
  width: 2
});

Map.addLayer(
  carStyle,
  {},
  'Imoveis Rurais - Area de Estudo',
  true
);


// ----------------------------------------------------------------------------
// 07.3 Centralizacao
// ----------------------------------------------------------------------------

Map.centerObject(
  aoi,
  12
);


