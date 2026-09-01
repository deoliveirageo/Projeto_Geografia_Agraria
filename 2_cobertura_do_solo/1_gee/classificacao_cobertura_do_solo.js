// Classificaçãoi de uso e cobertura do solo com a coleção 10 do Mapbiomas 

var geometry = aoi; 


var year = 2024;


var collection = ee.ImageCollection(imageCollection)
	.filter(ee.Filter.eq('collection_id', 10.0))
	.filter(ee.Filter.eq('version', 'v1'))
	.filter(ee.Filter.eq('year', year))
  .first();

var visParams = {
	min: 0,
	max: 75,  
	palette: [
		'ffffff',  // [0] Not Observed
		'32a65e',  // [1] --
		'32a65e',  // [2] --
		'1f8d49',  // [3] Forest Formation
		'7dc975',  // [4] Savanna Formation
		'04381d',  // [5] Mangrove
		'026975',  // [6] Floodable Forest
		'000000',  // [7] --
		'000000',  // [8] --
		'7a6c00',  // [9] Forest Plantation
		'ad975a',  // [10] --
		'519799',  // [11] Wetland
		'd6bc74',  // [12] Grassland
		'd89f5c',  // [13] Other Non Forest Formations
		'FFFFB2',  // [14] --
		'edde8e',  // [15] Pasture
		'000000',  // [16] --
		'000000',  // [17] --
		'f5b3c8',  // [18] Agriculture
		'C27BA0',  // [19] --
		'db7093',  // [20] Sugar Cane
		'ffefc3',  // [21] Mosaic of Uses
		'db4d4f',  // [22] Non vegetated area
		'ffa07a',  // [23] Beach, Dune and Sand Spot
		'd4271e',  // [24] Urban Area
		'db4d4f',  // [25] Other Non Vegetated Areas
		'0000FF',  // [26] --
		'000000',  // [27] --
		'000000',  // [28] --
		'ffaa5f',  // [29] Rocky Outcrop
		'9c0027',  // [30] Mining
		'091077',  // [31] Aquaculture
		'fc8114',  // [32] Hypersaline Tidal Flat
		'2532e4',  // [33] Rivers, Lakes and Ocean
		'93dfe6',  // [34] Glacier
		'9065d0',  // [35] --
		'd082de',  // [36] --
		'000000',  // [37] --
		'000000',  // [38] --
		'f5b3c8',  // [39] Soybean
		'c71585',  // [40] Rice
		'f54ca9',  // [41] Other Temporary Crops
		'cca0d4',  // [42] --
		'dbd26b',  // [43] --
		'807a40',  // [44] --
		'e04cfa',  // [45] --
		'd68fe2',  // [46] Coffee
		'9932cc',  // [47] Citrus
		'e6ccff',  // [48] Other Perennial Crops
		'02d659',  // [49] Wooded Sandbank Vegetation
		'ad5100',  // [50] Herbaceous Sandbank Vegetation
		'000000',  // [51] --
		'000000',  // [52] --
		'000000',  // [53] --
		'000000',  // [54] --
		'000000',  // [55] --
		'000000',  // [56] --
		'CC66FF',  // [57] --
		'FF6666',  // [58] --
		'006400',  // [59] --
		'8d9e8b',  // [60] --
		'f5d5d5',  // [61] Salt Flats
		'ff69b4',  // [62] Cotton
		'ebf8b5',  // [63] --
		'000000',  // [64] --
		'000000',  // [65] --
		'91ff36',  // [66] --
		'7dc975',  // [67] --
		'e97a7a',  // [68] --
		'0fffe3',  // [69] Coral Reefs
		'000000',  // [70] --
		'000000',  // [71] --
		'000000',  // [72] --
		'000000',  // [73] --
		'000000',  // [74] --
		'c12100',  // [75] Photovoltaic Power Plant
	]
};

Map.addLayer(collection.clip(aoi), visParams, 'MapBiomas LULC 2024');


Map.centerObject(aoi, 12);

print(collection)

var carStyle = carAOI.style({

color: 'Black',
fillColor: '00000000', 
width: 1

});
  
Map.addLayer(carStyle, {},'Imóveis Rurais')


var geometryStyle = geometry.style({
color: 'Lightblue',
fillColor: '00000000',
width: 1
}); 

Map.addLayer(geometryStyle, {}, 'Bacia Hidrográfica do Rio São Bartolomeu')




Export.image.toDrive({
image: collection,
description: 'landcoverage_2024_aoi',
folder: 'GEE_Exports',
fileNamePrefix: 'landcoverage_2024_aoi',
region: geometry,
scale: 30,
crs: 'EPSG: 31983',
maxPixels: 1e13,
});