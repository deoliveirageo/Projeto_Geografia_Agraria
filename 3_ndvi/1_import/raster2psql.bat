@echo off

REM ============================================================
REM IMPORTACAO DE RASTERS NDVI PARA POSTGRESQL/POSTGIS
REM ============================================================
REM
REM SRID: EPSG:31983
REM Schema: nome_do_schema
REM Tabela: nome_da_table
REM Banco: nome_do_banco
REM
REM Ajuste a variavel RASTER_DIR para o diretorio onde os
REM arquivos GeoTIFF estao armazenados.
REM ============================================================

set "RASTER_DIR=C:\CAMINHO\DO\PROJETO\Medias_NDVI_AOI"

raster2pgsql -s 31983 -I -C "%RASTER_DIR%\*.tif" schema.table | psql -U postgres -d nome_do_banco

pause