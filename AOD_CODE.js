var collection = ee.ImageCollection('MODIS/061/MCD19A2_GRANULES')
                    .select('Optical_Depth_047')
                    .filterDate('2026-01-01', '2026-01-30');

print(collection.size());

var scaled_Aod = collection.map(function(img) {
  return img.multiply(0.001)
    .copyProperties(img, ['system:time_start', 'system:time_end']);
});

var average_AOD = scaled_Aod.reduce(ee.Reducer.mean()).clip(table);

var band_viz = {
  min: 0.20474142857142857,
  max: 1.41633,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

Map.addLayer(average_AOD, band_viz);

Map.centerObject(table, 10);

Export.image.toDrive({
  image: average_AOD,
  description: 'Average_AOD_Jan2026',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Average_AOD_Jan2026',
  region: table,
  scale: 1000,
  maxPixels: 1e13
});