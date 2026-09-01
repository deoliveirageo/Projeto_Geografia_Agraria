// ============================================================================
// PROJETO: Geografia Agraria
// MODULO: curvas_sazonais_ndvi
// SCRIPT: NDVI com Sentinel-2
// AREA: Bacia Hidrografica do Rio Sao Bartolomeu - DF
// ============================================================================
//
// OBJETIVO
// ----------------------------------------------------------------------------
// Processar imagens Sentinel-2 SR Harmonized para geracao de composicoes
// mensais e calculo do Indice de Vegetacao por Diferenca Normalizada (NDVI),
// considerando periodos representativos das estacoes seca e chuvosa.
//
// DADOS
// ----------------------------------------------------------------------------
// Sentinel-2 Surface Reflectance Harmonized
// Colecao: COPERNICUS/S2_SR_HARMONIZED
//
// METODO
// ----------------------------------------------------------------------------
// 1. Filtragem espacial pela area de estudo;
// 2. Filtragem temporal mensal;
// 3. Filtragem de imagens com cobertura de nuvens inferior a 20%;
// 4. Mascara de nuvens e cirrus utilizando a banda QA60;
// 5. Conversao dos valores de reflectancia para escala 0-1;
// 6. Geracao de composicao mensal pela mediana;
// 7. Calculo do NDVI;
// 8. Visualizacao dos resultados;
// 9. Exportacao opcional para o Google Drive.
//
// BANDAS DO NDVI
// ----------------------------------------------------------------------------
// B8 = Infravermelho Proximo (NIR)
// B4 = Vermelho (Red)
//
// Formula:
// NDVI = (NIR - Red) / (NIR + Red)
//
// RESOLUCAO ESPACIAL
// ----------------------------------------------------------------------------
// 10 metros
//
// SISTEMA DE REFERENCIA PARA EXPORTACAO
// ----------------------------------------------------------------------------
// EPSG:31983
//
// OBSERVACAO
// ----------------------------------------------------------------------------
// As variaveis "aoi" e "carAOI" correspondem aos assets/imports utilizados
// no Google Earth Engine e devem permanecer disponiveis no Code Editor.
//
// ============================================================================


// ============================================================================
// 01. MASCARA DE NUVENS
// ============================================================================

// Funcao para remocao de pixels associados a nuvens e cirrus
// utilizando a banda QA60.
//
// Bit 10 = nuvens
// Bit 11 = cirrus

function maskS2Clouds(image) {

  var qa = image.select('QA60');

  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  var mask = qa
    .bitwiseAnd(cloudBitMask).eq(0)
    .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  // Conversao da escala dos valores de reflectancia
  return image
    .updateMask(mask)
    .divide(10000);
}


// ============================================================================
// 02. PARAMETROS DE PROCESSAMENTO
// ============================================================================

var COLLECTION = 'COPERNICUS/S2_SR_HARMONIZED';

var CLOUD_THRESHOLD = 20;

var NDVI_VIS = {
  min: 0.0,
  max: 1.0,
  palette: ['red', 'yellow', 'green']
};

var RGB_VIS = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2']
};


// ============================================================================
// 03. FUNCAO PARA GERACAO DE COMPOSICAO MENSAL
// ============================================================================

// Gera uma composicao mensal Sentinel-2 utilizando a mediana.
//
// Parametros:
// startDate = data inicial
// endDate = data final
//
// A data final e exclusiva no Earth Engine. Por isso, para representar
// um mes completo, utiliza-se o primeiro dia do mes seguinte.

function createMonthlyComposite(startDate, endDate) {

  var collection = ee.ImageCollection(COLLECTION)
    .filterBounds(aoi)
    .filterDate(startDate, endDate)
    .filter(
      ee.Filter.lt(
        'CLOUDY_PIXEL_PERCENTAGE',
        CLOUD_THRESHOLD
      )
    )
    .map(maskS2Clouds);

  return collection.median();
}


// ============================================================================
// 04. FUNCAO PARA CALCULO DO NDVI
// ============================================================================

// Calcula o NDVI utilizando as bandas B8 (NIR) e B4 (Red).

function calculateNDVI(image) {

  return image.normalizedDifference(['B8', 'B4']);
}


// ============================================================================
// 05. ESTACAO SECA
// ============================================================================
//
// Periodo analisado:
// Junho, Julho, Agosto e Setembro de 2025.
//
// ============================================================================


// ----------------------------------------------------------------------------
// 05.1 Composicao Junho de 2025
// ----------------------------------------------------------------------------

var juneComposite = createMonthlyComposite(
  '2025-06-01',
  '2025-07-01'
);

Map.addLayer(
  juneComposite.clip(aoi),
  RGB_VIS,
  'RGB Junho 2025',
  false
);


// ----------------------------------------------------------------------------
// 05.2 Composicao Julho de 2025
// ----------------------------------------------------------------------------

var julyComposite = createMonthlyComposite(
  '2025-07-01',
  '2025-08-01'
);

Map.addLayer(
  julyComposite.clip(aoi),
  RGB_VIS,
  'RGB Julho 2025',
  false
);


// ----------------------------------------------------------------------------
// 05.3 Composicao Agosto de 2025
// ----------------------------------------------------------------------------

var augustComposite = createMonthlyComposite(
  '2025-08-01',
  '2025-09-01'
);

Map.addLayer(
  augustComposite.clip(aoi),
  RGB_VIS,
  'RGB Agosto 2025',
  false
);


// ----------------------------------------------------------------------------
// 05.4 Composicao Setembro de 2025
// ----------------------------------------------------------------------------

var septemberComposite = createMonthlyComposite(
  '2025-09-01',
  '2025-10-01'
);

Map.addLayer(
  septemberComposite.clip(aoi),
  RGB_VIS,
  'RGB Setembro 2025',
  false
);


// ============================================================================
// 06. NDVI - ESTACAO SECA
// ============================================================================


// ----------------------------------------------------------------------------
// 06.1 NDVI Junho de 2025
// ----------------------------------------------------------------------------

var ndviJune = calculateNDVI(juneComposite);

Map.addLayer(
  ndviJune.clip(aoi),
  NDVI_VIS,
  'NDVI Junho 2025'
);


// ----------------------------------------------------------------------------
// 06.2 NDVI Julho de 2025
// ----------------------------------------------------------------------------

var ndviJuly = calculateNDVI(julyComposite);

Map.addLayer(
  ndviJuly.clip(aoi),
  NDVI_VIS,
  'NDVI Julho 2025'
);


// ----------------------------------------------------------------------------
// 06.3 NDVI Agosto de 2025
// ----------------------------------------------------------------------------

var ndviAugust = calculateNDVI(augustComposite);

Map.addLayer(
  ndviAugust.clip(aoi),
  NDVI_VIS,
  'NDVI Agosto 2025'
);


// ----------------------------------------------------------------------------
// 06.4 NDVI Setembro de 2025
// ----------------------------------------------------------------------------

var ndviSeptember = calculateNDVI(septemberComposite);

Map.addLayer(
  ndviSeptember.clip(aoi),
  NDVI_VIS,
  'NDVI Setembro 2025'
);


// ============================================================================
// 07. ESTACAO CHUVOSA
// ============================================================================
//
// Periodo analisado:
// Novembro e Dezembro de 2025;
// Fevereiro e Marco de 2026.
//
// ============================================================================


// ----------------------------------------------------------------------------
// 07.1 Composicao Novembro de 2025
// ----------------------------------------------------------------------------

var novemberComposite = createMonthlyComposite(
  '2025-11-01',
  '2025-12-01'
);

Map.addLayer(
  novemberComposite.clip(aoi),
  RGB_VIS,
  'RGB Novembro 2025',
  false
);


// ----------------------------------------------------------------------------
// 07.2 Composicao Dezembro de 2025
// ----------------------------------------------------------------------------

var decemberComposite = createMonthlyComposite(
  '2025-12-01',
  '2026-01-01'
);

Map.addLayer(
  decemberComposite.clip(aoi),
  RGB_VIS,
  'RGB Dezembro 2025',
  false
);


// ----------------------------------------------------------------------------
// 07.3 Composicao Fevereiro de 2026
// ----------------------------------------------------------------------------

var februaryComposite = createMonthlyComposite(
  '2026-02-01',
  '2026-03-01'
);

Map.addLayer(
  februaryComposite.clip(aoi),
  RGB_VIS,
  'RGB Fevereiro 2026',
  false
);


// ----------------------------------------------------------------------------
// 07.4 Composicao Marco de 2026
// ----------------------------------------------------------------------------

var marchComposite = createMonthlyComposite(
  '2026-03-01',
  '2026-04-01'
);

Map.addLayer(
  marchComposite.clip(aoi),
  RGB_VIS,
  'RGB Marco 2026',
  false
);


// ============================================================================
// 08. NDVI - ESTACAO CHUVOSA
// ============================================================================


// ----------------------------------------------------------------------------
// 08.1 NDVI Novembro de 2025
// ----------------------------------------------------------------------------

var ndviNovember = calculateNDVI(novemberComposite);

Map.addLayer(
  ndviNovember.clip(aoi),
  NDVI_VIS,
  'NDVI Novembro 2025'
);


// ----------------------------------------------------------------------------
// 08.2 NDVI Dezembro de 2025
// ----------------------------------------------------------------------------

var ndviDecember = calculateNDVI(decemberComposite);

Map.addLayer(
  ndviDecember.clip(aoi),
  NDVI_VIS,
  'NDVI Dezembro 2025'
);


// ----------------------------------------------------------------------------
// 08.3 NDVI Fevereiro de 2026
// ----------------------------------------------------------------------------

var ndviFebruary = calculateNDVI(februaryComposite);

Map.addLayer(
  ndviFebruary.clip(aoi),
  NDVI_VIS,
  'NDVI Fevereiro 2026'
);


// ----------------------------------------------------------------------------
// 08.4 NDVI Marco de 2026
// ----------------------------------------------------------------------------

var ndviMarch = calculateNDVI(marchComposite);

Map.addLayer(
  ndviMarch.clip(aoi),
  NDVI_VIS,
  'NDVI Marco 2026'
);


// ============================================================================
// 09. EXPORTACAO DOS RESULTADOS
// ============================================================================
//
// As exportacoes abaixo permanecem comentadas para evitar a criacao
// automatica de tarefas no Google Earth Engine.
//
// Para executar uma exportacao, remova os comentarios do bloco correspondente.
//
// ============================================================================


// ----------------------------------------------------------------------------
// 09.1 Exportacao NDVI - Estacao Seca
// ----------------------------------------------------------------------------

/*

Export.image.toDrive({
  image: ndviJune.clip(aoi),
  description: 'NDVI_Junho_2025',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Junho_2025',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: ndviJuly.clip(aoi),
  description: 'NDVI_Julho_2025',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Julho_2025',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: ndviAugust.clip(aoi),
  description: 'NDVI_Agosto_2025',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Agosto_2025',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: ndviSeptember.clip(aoi),
  description: 'NDVI_Setembro_2025',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Setembro_2025',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});

*/


// ----------------------------------------------------------------------------
// 09.2 Exportacao NDVI - Estacao Chuvosa
// ----------------------------------------------------------------------------

/*

Export.image.toDrive({
  image: ndviNovember.clip(aoi),
  description: 'NDVI_Novembro_2025',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Novembro_2025',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: ndviDecember.clip(aoi),
  description: 'NDVI_Dezembro_2025',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Dezembro_2025',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: ndviFebruary.clip(aoi),
  description: 'NDVI_Fevereiro_2026',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Fevereiro_2026',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: ndviMarch.clip(aoi),
  description: 'NDVI_Marco_2026',
  folder: 'GEE',
  fileNamePrefix: 'NDVI_Marco_2026',
  region: aoi,
  scale: 10,
  crs: 'EPSG:31983',
  maxPixels: 1e13
});

*/


// ============================================================================
// 10. CAMADAS VETORIAIS
// ============================================================================


// ----------------------------------------------------------------------------
// 10.1 Imoveis Rurais - Area de Estudo
// ----------------------------------------------------------------------------

var carStyle = carAOI.style({
  color: '000000',
  fillColor: '00000000',
  width: 1
});

Map.addLayer(
  carStyle,
  {},
  'Imoveis Rurais - Area de Estudo',
  true
);


// ----------------------------------------------------------------------------
// 10.2 Unidades Hidrograficas / Area de Estudo
// ----------------------------------------------------------------------------

var aoiStyle = aoi.style({
  color: '000000',
  fillColor: '00000000',
  width: 2
});

Map.addLayer(
  aoiStyle,
  {},
  'Unidades Hidrograficas - Medio Bartolomeu',
  true
);


// ============================================================================
// 11. CONFIGURACAO DO MAPA
// ============================================================================

Map.centerObject(aoi, 12);


