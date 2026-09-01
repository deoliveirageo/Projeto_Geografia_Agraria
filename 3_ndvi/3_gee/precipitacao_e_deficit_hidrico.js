// ============================================================
// VARIÁVEIS DE ÁREA DE ESTUDO E JANELA TEMPORAL
// ============================================================

// Área de estudo
var geometry = aoi;

// Período de análise
var startDate = '2024-01-01';
var endDate = '2025-01-01';


// ============================================================
// CHIRPS V3 - PRECIPITAÇÃO DIÁRIA
// ============================================================
//
// Dataset:
// CHIRPS V3 - Daily Satellite
//
// Banda:
// precipitation
//
// Unidade original:
// milímetros por dia (mm/d)
//
// A precipitação acumulada é obtida pela soma dos valores
// diários dentro do período selecionado.
//
// A operação .sum() transforma a série diária em uma imagem
// de precipitação acumulada, expressa em milímetros (mm).
// ============================================================

var dataSet = ee.ImageCollection(
  'UCSB-CHC/CHIRPS/V3/DAILY_SAT'
).select('precipitation');


// ============================================================
// PRECIPITAÇÃO SAZONAL
// ============================================================
//
// Estação chuvosa:
// novembro/2024 a março/2025
//
// Estação seca:
// junho a setembro de 2024
//
// A estação chuvosa atravessa dois anos civis. Por isso,
// o intervalo é definido explicitamente entre 01/11/2024
// e 01/04/2025 e os meses 11, 12, 1, 2 e 3 são selecionados.
// ============================================================


// ------------------------------------------------------------
// ESTAÇÃO CHUVOSA
// NOVEMBRO/2024 A MARÇO/2025
// ------------------------------------------------------------

var precipChuvaCollection = dataSet
  .filterDate('2024-11-01', '2025-04-01')
  .filter(
    ee.Filter.or(
      ee.Filter.calendarRange(11, 12, 'month'),
      ee.Filter.calendarRange(1, 3, 'month')
    )
  )
  .filterBounds(geometry);


// Quantidade de imagens CHIRPS utilizadas
print(
  'Imagens CHIRPS - estação chuvosa 2024-2025:',
  precipChuvaCollection.size()
);


// Soma da precipitação diária
var precipChuva = precipChuvaCollection
  .sum()
  .clip(geometry);


// Visualização
var precipChuvaVis = {
  min: 500,
  max: 1500,
  palette: [
    'white',
    'lightblue',
    'blue',
    'darkblue'
  ]
};


Map.addLayer(
  precipChuva,
  precipChuvaVis,
  'Precipitação acumulada - estação chuvosa 2024-2025 (mm)'
);


// ------------------------------------------------------------
// ESTAÇÃO SECA
// JUNHO A SETEMBRO DE 2024
// ------------------------------------------------------------

var precipSecaCollection = dataSet
  .filterDate(startDate, endDate)
  .filter(ee.Filter.calendarRange(6, 9, 'month'))
  .filterBounds(geometry);


// Quantidade de imagens CHIRPS utilizadas
print(
  'Imagens CHIRPS - estação seca 2024:',
  precipSecaCollection.size()
);


// Soma da precipitação diária
var precipSeca = precipSecaCollection
  .sum()
  .clip(geometry);


// Visualização
var precipSecaVis = {
  min: 0,
  max: 15,
  palette: [
    'white',
    'lightblue',
    'blue',
    'darkblue'
  ]
};


Map.addLayer(
  precipSeca,
  precipSecaVis,
  'Precipitação acumulada - estação seca 2024 (mm)'
);


// ============================================================
// TERRACLIMATE - DÉFICIT HÍDRICO CLIMÁTICO
// ============================================================
//
// Dataset:
// TerraClimate - Monthly Climate and Water Balance
//
// Banda:
// def
//
// A banda 'def' representa o déficit hídrico climático mensal.
//
// O fator de escala indicado para a banda é 0,1.
//
// Portanto:
//
// valor físico = valor armazenado × 0,1
//
// Exemplo:
//
// valor armazenado = 4103
// valor físico = 4103 × 0,1
// valor físico = 410,3 mm
//
// Como o TerraClimate possui resolução temporal mensal,
// os valores dos meses selecionados são somados para gerar
// o déficit hídrico acumulado sazonal.
// ============================================================

var dataSet2 = ee.ImageCollection(
  'IDAHO_EPSCOR/TERRACLIMATE'
).select('def');


// ============================================================
// DÉFICIT HÍDRICO - ESTAÇÃO CHUVOSA
// NOVEMBRO/2024 A MARÇO/2025
// ============================================================

var deficitChuvaCollection = dataSet2
  .filterDate('2024-11-01', '2025-04-01')
  .filter(
    ee.Filter.or(
      ee.Filter.calendarRange(11, 12, 'month'),
      ee.Filter.calendarRange(1, 3, 'month')
    )
  )
  .filterBounds(geometry);


// Quantidade de imagens TerraClimate utilizadas
print(
  'Imagens TerraClimate - estação chuvosa 2024-2025:',
  deficitChuvaCollection.size()
);


// Soma dos déficits mensais
// e aplicação do fator de escala 0,1
var deficitChuva = deficitChuvaCollection
  .sum()
  .multiply(0.1)
  .clip(geometry);


// Visualização
var deficitChuvaVis = {
  min: 0,
  max: 430,
  palette: [
    'ffffb2',
    'fecc5c',
    'fd8d3c',
    'e31a1c'
  ]
};


Map.addLayer(
  deficitChuva,
  deficitChuvaVis,
  'Déficit hídrico acumulado - estação chuvosa 2024-2025 (mm)'
);


// ============================================================
// DÉFICIT HÍDRICO - ESTAÇÃO SECA
// JUNHO A SETEMBRO DE 2024
// ============================================================

var deficitSecaCollection = dataSet2
  .filterDate(startDate, endDate)
  .filter(ee.Filter.calendarRange(6, 9, 'month'))
  .filterBounds(geometry);


// Quantidade de imagens TerraClimate utilizadas
print(
  'Imagens TerraClimate - estação seca 2024:',
  deficitSecaCollection.size()
);


// Soma dos déficits mensais
// e aplicação do fator de escala 0,1
var deficitSeca = deficitSecaCollection
  .sum()
  .multiply(0.1)
  .clip(geometry);


// Visualização
var deficitSecaVis = {
  min: 400,
  max: 430,
  palette: [
    'ffffb2',
    'fecc5c',
    'fd8d3c',
    'e31a1c'
  ]
};


Map.addLayer(
  deficitSeca,
  deficitSecaVis,
  'Déficit hídrico acumulado - estação seca 2024 (mm)'
);


// ============================================================
// LIMITE E CENTRALIZAÇÃO DA ÁREA DE ESTUDO
// ============================================================

Map.centerObject(geometry, 10);


// Estilo da área de estudo
var aoiStyle = geometry.style({
  color: 'FF0000',
  fillColor: '00000000',
  width: 2
});


// Adicionar limite da área de estudo
Map.addLayer(
  aoiStyle,
  {},
  'Limite da Área de Estudo'
);


// ============================================================
// RESUMO DAS COLEÇÕES UTILIZADAS
// ============================================================
//
// Os valores abaixo correspondem à quantidade de imagens
// efetivamente utilizadas antes da operação .sum().
//
// CHIRPS:
// - Estação chuvosa 2024-2025
// - Estação seca 2024
//
// TerraClimate:
// - Estação chuvosa 2024-2025
// - Estação seca 2024
// ============================================================

print(
  'RESUMO — CHIRPS estação chuvosa 2024-2025:',
  precipChuvaCollection.size()
);

print(
  'RESUMO — CHIRPS estação seca 2024:',
  precipSecaCollection.size()
);

print(
  'RESUMO — TerraClimate estação chuvosa 2024-2025:',
  deficitChuvaCollection.size()
);

print(
  'RESUMO — TerraClimate estação seca 2024:',
  deficitSecaCollection.size()
);
