# Monthly-Average-AOD-Mapping-using-MODIS-MAIAC-in-Google-Earth-Engine
Google Earth Engine workflow for calculating Monthly Average Aerosol Optical Depth (AOD) from MODIS MAIAC MCD19A2 data for air quality and environmental studies.
# Monthly Average AOD Mapping using MODIS MAIAC in Google Earth Engine

This repository contains a Google Earth Engine (GEE) script for calculating Monthly Average Aerosol Optical Depth (AOD) using the MODIS MAIAC MCD19A2 dataset.

## Overview

Aerosol Optical Depth (AOD) is an important indicator of atmospheric aerosol concentration and is widely used in air quality, climate, and environmental studies.

This workflow:

1. Loads MODIS MAIAC AOD data
2. Applies the MODIS scale factor
3. Computes monthly mean AOD
4. Clips the output to the study area
5. Visualizes the results
6. Exports the final raster for GIS analysis

## Dataset

Dataset: MODIS/061/MCD19A2_GRANULES

Band Used:

* Optical_Depth_047

Spatial Resolution:

* 1 km

Platform:

* Google Earth Engine

## Output

Monthly Average AOD raster

Applications:

* Air Quality Monitoring
* Aerosol Assessment
* Climate Studies
* Environmental Research
* Urban Pollution Analysis

## Important Note

For large study areas, consider using a bounding box instead of highly detailed shapefiles containing thousands of vertices.

Complex geometries increase computational overhead during clipping and export operations. Simplified boundaries improve processing efficiency and reduce the likelihood of export failures.

## Author

Maheen Geo Academy

GIS | Remote Sensing | Google Earth Engine
