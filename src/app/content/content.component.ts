import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  statesAnalysis: { [key: string]: string } = {
    "All": "En un análisis conjunto de todos los estados, se observa una variación significativa en el incremento porcentual de los precios de las tortillas desde 2007 hasta 2024. Coahuila encabeza la lista con el mayor incremento porcentual (194.75%), mientras que Tlaxcala presenta el menor incremento (122.02%). Los precios promedio de las tortillas también varían considerablemente, desde los más bajos en Tlaxcala hasta los más altos en Sonora. Esto refleja diferencias regionales en factores económicos, de producción y demanda.",
    "Aguascalientes": "En Aguascalientes, los precios de las tortillas han cambiado aproximadamente un 127.50% desde 2007 hasta 2024, clasificándose en el puesto 30 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 6 en términos de precio promedio de tortilla, con un precio promedio de 11.37 pesos por kilogramo.",
    "Baja California": "En Baja California, los precios de las tortillas han cambiado aproximadamente un 155.60% desde 2007 hasta 2024, clasificándose en el puesto 21 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 31 en términos de precio promedio de tortilla, con un precio promedio de 13.67 pesos por kilogramo. Las tortillas más caras se encuentran en Mexicali, mientras que las más baratas están en Tijuana.",
    "Baja California Sur": "En Baja California Sur, los precios de las tortillas han cambiado aproximadamente un 166.07% desde 2007 hasta 2024, clasificándose en el puesto 13 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 27 en términos de precio promedio de tortilla, con un precio promedio de 13.07 pesos por kilogramo.",
    "Campeche": "En Campeche, los precios de las tortillas han cambiado aproximadamente un 157.25% desde 2007 hasta 2024, clasificándose en el puesto 18 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 18 en términos de precio promedio de tortilla, con un precio promedio de 12.63 pesos por kilogramo.",
    "Coahuila": "En Coahuila, los precios de las tortillas han cambiado aproximadamente un 194.75% desde 2007 hasta 2024, clasificándose en el puesto 1 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 30 en términos de precio promedio de tortilla, con un precio promedio de 13.28 pesos por kilogramo. Las tortillas más caras se encuentran en Torreón, mientras que las más baratas están en Saltillo.",
    "Colima": "En Colima, los precios de las tortillas han cambiado aproximadamente un 189.34% desde 2007 hasta 2024, clasificándose en el puesto 3 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 21 en términos de precio promedio de tortilla, con un precio promedio de 12.70 pesos por kilogramo.",
    "Chiapas": "En Chiapas, los precios de las tortillas han cambiado aproximadamente un 161.16% desde 2007 hasta 2024, clasificándose en el puesto 16 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 8 en términos de precio promedio de tortilla, con un precio promedio de 11.50 pesos por kilogramo. Las tortillas más caras se encuentran en Tapachula, mientras que las más baratas están en Tuxtla Gutiérrez.",
    "Chihuahua": "En Chihuahua, los precios de las tortillas han cambiado aproximadamente un 191.53% desde 2007 hasta 2024, clasificándose en el puesto 2 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 22 en términos de precio promedio de tortilla, con un precio promedio de 12.80 pesos por kilogramo. Las tortillas más caras se encuentran en Chihuahua, mientras que las más baratas están en Cd. Juárez.",
    "D.F.": "En D.F., los precios de las tortillas han cambiado aproximadamente un 146.21% desde 2007 hasta 2024, clasificándose en el puesto 27 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 3 en términos de precio promedio de tortilla, con un precio promedio de 11.09 pesos por kilogramo. Las tortillas más caras se encuentran en D.F., mientras que las más baratas están en ZM D.F.",
    "Durango": "En Durango, los precios de las tortillas han cambiado aproximadamente un 174.79% desde 2007 hasta 2024, clasificándose en el puesto 9 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 15 en términos de precio promedio de tortilla, con un precio promedio de 12.07 pesos por kilogramo. Las tortillas más caras se encuentran en Gómez Palacio, mientras que las más baratas están en Durango.",
    "Guanajuato": "En Guanajuato, los precios de las tortillas han cambiado aproximadamente un 153.63% desde 2007 hasta 2024, clasificándose en el puesto 24 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 11 en términos de precio promedio de tortilla, con un precio promedio de 11.67 pesos por kilogramo. Las tortillas más caras se encuentran en Celaya, mientras que las más baratas están en Irapuato.",
    "Guerrero": "En Guerrero, los precios de las tortillas han cambiado aproximadamente un 167.57% desde 2007 hasta 2024, clasificándose en el puesto 12 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 24 en términos de precio promedio de tortilla, con un precio promedio de 12.90 pesos por kilogramo. Las tortillas más caras se encuentran en Acapulco, mientras que las más baratas están en Chilpancingo.",
    "Hidalgo": "En Hidalgo, los precios de las tortillas han cambiado aproximadamente un 161.35% desde 2007 hasta 2024, clasificándose en el puesto 15 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 5 en términos de precio promedio de tortilla, con un precio promedio de 11.16 pesos por kilogramo.",
    "Jalisco": "En Jalisco, los precios de las tortillas han cambiado aproximadamente un 174.30% desde 2007 hasta 2024, clasificándose en el puesto 10 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 14 en términos de precio promedio de tortilla, con un precio promedio de 11.76 pesos por kilogramo. Las tortillas más caras se encuentran en ZM Guadalajara, mientras que las más baratas están en Guadalajara.",
    "Edo. México": "En el Estado de México, los precios de las tortillas han cambiado aproximadamente un 145.49% desde 2007 hasta 2024, clasificándose en el puesto 28 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 4 en términos de precio promedio de tortilla, con un precio promedio de 11.16 pesos por kilogramo.",
    "Michoacán": "En Michoacán, los precios de las tortillas han cambiado aproximadamente un 149.71% desde 2007 hasta 2024, clasificándose en el puesto 25 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 10 en términos de precio promedio de tortilla, con un precio promedio de 11.61 pesos por kilogramo.",
    "Morelos": "En Morelos, los precios de las tortillas han cambiado aproximadamente un 154.19% desde 2007 hasta 2024, clasificándose en el puesto 23 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 26 en términos de precio promedio de tortilla, con un precio promedio de 13.01 pesos por kilogramo.",
    "Nayarit": "En Nayarit, los precios de las tortillas han cambiado aproximadamente un 165.03% desde 2007 hasta 2024, clasificándose en el puesto 14 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 20 en términos de precio promedio de tortilla, con un precio promedio de 12.68 pesos por kilogramo.",
    "Nuevo León": "En Nuevo León, los precios de las tortillas han cambiado aproximadamente un 181.63% desde 2007 hasta 2024, clasificándose en el puesto 7 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 19 en términos de precio promedio de tortilla, con un precio promedio de 12.64 pesos por kilogramo. Las tortillas más caras se encuentran en ZM Monterrey, mientras que las más baratas están en Monterrey.",
    "Oaxaca": "En Oaxaca, los precios de las tortillas han cambiado aproximadamente un 183.82% desde 2007 hasta 2024, clasificándose en el puesto 5 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 13 en términos de precio promedio de tortilla, con un precio promedio de 11.75 pesos por kilogramo.",
    "Puebla": "En Puebla, los precios de las tortillas han cambiado aproximadamente un 124.22% desde 2007 hasta 2024, clasificándose en el puesto 31 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 2 en términos de precio promedio de tortilla, con un precio promedio de 10.26 pesos por kilogramo. Las tortillas más caras se encuentran en Puebla, mientras que las más baratas están en ZM Puebla.",
    "Querétaro": "En Querétaro, los precios de las tortillas han cambiado aproximadamente un 168.11% desde 2007 hasta 2024, clasificándose en el puesto 11 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 16 en términos de precio promedio de tortilla, con un precio promedio de 12.32 pesos por kilogramo.",
    "Quintana Roo": "En Quintana Roo, los precios de las tortillas han cambiado aproximadamente un 161.06% desde 2007 hasta 2024, clasificándose en el puesto 17 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 25 en términos de precio promedio de tortilla, con un precio promedio de 12.95 pesos por kilogramo. Las tortillas más caras se encuentran en Cancún, mientras que las más baratas están en Chetumal.",
    "San Luis Potosí": "En San Luis Potosí, los precios de las tortillas han cambiado aproximadamente un 154.97% desde 2007 hasta 2024, clasificándose en el puesto 22 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 12 en términos de precio promedio de tortilla, con un precio promedio de 11.68 pesos por kilogramo.",
    "Sinaloa": "En Sinaloa, los precios de las tortillas han cambiado aproximadamente un 178.20% desde 2007 hasta 2024, clasificándose en el puesto 8 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 23 en términos de precio promedio de tortilla, con un precio promedio de 12.90 pesos por kilogramo.",
    "Sonora": "En Sonora, los precios de las tortillas han cambiado aproximadamente un 155.80% desde 2007 hasta 2024, clasificándose en el puesto 20 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 32 en términos de precio promedio de tortilla, con un precio promedio de 13.86 pesos por kilogramo. Las tortillas más caras se encuentran en San Luis Río Colorado, mientras que las más baratas están en Cd. Obregón.",
    "Tabasco": "En Tabasco, los precios de las tortillas han cambiado aproximadamente un 137.84% desde 2007 hasta 2024, clasificándose en el puesto 29 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 17 en términos de precio promedio de tortilla, con un precio promedio de 12.54 pesos por kilogramo.",
    "Tamaulipas": "En Tamaulipas, los precios de las tortillas han cambiado aproximadamente un 182.16% desde 2007 hasta 2024, clasificándose en el puesto 6 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 29 en términos de precio promedio de tortilla, con un precio promedio de 13.13 pesos por kilogramo. Las tortillas más caras se encuentran en Matamoros, mientras que las más baratas están en Cd. Victoria.",
    "Tlaxcala": "En Tlaxcala, los precios de las tortillas han cambiado aproximadamente un 122.02% desde 2007 hasta 2024, clasificándose en el puesto 32 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 1 en términos de precio promedio de tortilla, con un precio promedio de 10.09 pesos por kilogramo.",
    "Veracruz": "En Veracruz, los precios de las tortillas han cambiado aproximadamente un 148.55% desde 2007 hasta 2024, clasificándose en el puesto 26 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 9 en términos de precio promedio de tortilla, con un precio promedio de 11.54 pesos por kilogramo. Las tortillas más caras se encuentran en Veracruz, mientras que las más baratas están en Poza Rica.",
    "Yucatán": "En Yucatán, los precios de las tortillas han cambiado aproximadamente un 184.96% desde 2007 hasta 2024, clasificándose en el puesto 4 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 28 en términos de precio promedio de tortilla, con un precio promedio de 13.12 pesos por kilogramo.",
    "Zacatecas": "En Zacatecas, los precios de las tortillas han cambiado aproximadamente un 156.80% desde 2007 hasta 2024, clasificándose en el puesto 19 en términos de porcentaje de incremento de precio. El estado ocupa el puesto 7 en términos de precio promedio de tortilla, con un precio promedio de 11.41 pesos por kilogramo."
  };
  bigRetailAnalysis: { [key: string]: string } = {
    "All": "En grandes tiendas, el precio promedio de las tortillas a nivel nacional muestra un incremento promedio del 150% desde 2007 hasta 2024. Las variaciones son mínimas gracias a la centralización de precios, con precios más bajos en Tlaxcala y más altos en Sonora.",
    "Aguascalientes": "En grandes tiendas de Aguascalientes, los precios de las tortillas han alcanzado un máximo de 14.17 pesos por kilogramo.",
    "Baja California": "En grandes tiendas de Baja California, los precios de las tortillas han alcanzado un máximo de 16.23 pesos por kilogramo.",
    "Baja California Sur": "En grandes tiendas de Baja California Sur, los precios de las tortillas han alcanzado un máximo de 14.15 pesos por kilogramo.",
    "Campeche": "En grandes tiendas de Campeche, los precios de las tortillas han alcanzado un máximo de 13.23 pesos por kilogramo.",
    "Chiapas": "En grandes tiendas de Chiapas, los precios de las tortillas han alcanzado un máximo de 14.30 pesos por kilogramo.",
    "Chihuahua": "En grandes tiendas de Chihuahua, los precios de las tortillas han alcanzado un máximo de 21.73 pesos por kilogramo.",
    "Coahuila": "En grandes tiendas de Coahuila, los precios de las tortillas han alcanzado un máximo de 19.00 pesos por kilogramo.",
    "Colima": "En grandes tiendas de Colima, los precios de las tortillas han alcanzado un máximo de 15.00 pesos por kilogramo.",
    "D.F.": "En grandes tiendas de D.F., los precios de las tortillas han alcanzado un máximo de 14.59 pesos por kilogramo.",
    "Durango": "En grandes tiendas de Durango, los precios de las tortillas han alcanzado un máximo de 14.47 pesos por kilogramo.",
    "Edo. México": "En grandes tiendas del Estado de México, los precios de las tortillas han alcanzado un máximo de 14.67 pesos por kilogramo.",
    "Guanajuato": "En grandes tiendas de Guanajuato, los precios de las tortillas han alcanzado un máximo de 15.23 pesos por kilogramo.",
    "Guerrero": "En grandes tiendas de Guerrero, los precios de las tortillas han alcanzado un máximo de 14.50 pesos por kilogramo.",
    "Hidalgo": "En grandes tiendas de Hidalgo, los precios de las tortillas han alcanzado un máximo de 14.30 pesos por kilogramo.",
    "Jalisco": "En grandes tiendas de Jalisco, los precios de las tortillas han alcanzado un máximo de 15.00 pesos por kilogramo.",
    "Michoacán": "En grandes tiendas de Michoacán, los precios de las tortillas han alcanzado un máximo de 15.00 pesos por kilogramo.",
    "Morelos": "En grandes tiendas de Morelos, los precios de las tortillas han alcanzado un máximo de 14.80 pesos por kilogramo.",
    "Nayarit": "En grandes tiendas de Nayarit, los precios de las tortillas han alcanzado un máximo de 14.57 pesos por kilogramo.",
    "Nuevo León": "En grandes tiendas de Nuevo León, los precios de las tortillas han alcanzado un máximo de 15.97 pesos por kilogramo.",
    "Oaxaca": "En grandes tiendas de Oaxaca, los precios de las tortillas han alcanzado un máximo de 16.72 pesos por kilogramo.",
    "Puebla": "En grandes tiendas de Puebla, los precios de las tortillas han alcanzado un máximo de 15.97 pesos por kilogramo.",
    "Querétaro": "En grandes tiendas de Querétaro, los precios de las tortillas han alcanzado un máximo de 15.33 pesos por kilogramo.",
    "Quintana Roo": "En grandes tiendas de Quintana Roo, los precios de las tortillas han alcanzado un máximo de 14.93 pesos por kilogramo.",
    "San Luis Potosí": "En grandes tiendas de San Luis Potosí, los precios de las tortillas han alcanzado un máximo de 16.00 pesos por kilogramo.",
    "Sinaloa": "En grandes tiendas de Sinaloa, los precios de las tortillas han alcanzado un máximo de 14.30 pesos por kilogramo.",
    "Sonora": "En grandes tiendas de Sonora, los precios de las tortillas han alcanzado un máximo de 15.45 pesos por kilogramo.",
    "Tabasco": "En grandes tiendas de Tabasco, los precios de las tortillas han alcanzado un máximo de 17.67 pesos por kilogramo.",
    "Tamaulipas": "En grandes tiendas de Tamaulipas, los precios de las tortillas han alcanzado un máximo de 16.96 pesos por kilogramo.",
    "Tlaxcala": "En grandes tiendas de Tlaxcala, los precios de las tortillas han alcanzado un máximo de 14.67 pesos por kilogramo.",
    "Veracruz": "En grandes tiendas de Veracruz, los precios de las tortillas han alcanzado un máximo de 14.33 pesos por kilogramo.",
    "Yucatán": "En grandes tiendas de Yucatán, los precios de las tortillas han alcanzado un máximo de 13.97 pesos por kilogramo.",
    "Zacatecas": "En grandes tiendas de Zacatecas, los precios de las tortillas han alcanzado un máximo de 14.47 pesos por kilogramo."
  };
  momAndPopAnalysis: { [key: string]: string } = {
    "All": "En tiendas pequeñas, el precio promedio de las tortillas muestra un incremento promedio del 165% desde 2007 hasta 2024, con una alta variabilidad regional. Los precios más bajos se encuentran en Tlaxcala y los más altos en Baja California.",
    "Aguascalientes": "En tiendas pequeñas de Aguascalientes, los precios de las tortillas han alcanzado un máximo de 22.00 pesos por kilogramo.",
    "Baja California": "En tiendas pequeñas de Baja California, los precios de las tortillas han alcanzado un máximo de 30.57 pesos por kilogramo.",
    "Baja California Sur": "En tiendas pequeñas de Baja California Sur, los precios de las tortillas han alcanzado un máximo de 27.00 pesos por kilogramo.",
    "Campeche": "En tiendas pequeñas de Campeche, los precios de las tortillas han alcanzado un máximo de 26.00 pesos por kilogramo.",
    "Chiapas": "En tiendas pequeñas de Chiapas, los precios de las tortillas han alcanzado un máximo de 24.00 pesos por kilogramo.",
    "Chihuahua": "En tiendas pequeñas de Chihuahua, los precios de las tortillas han alcanzado un máximo de 25.83 pesos por kilogramo.",
    "Coahuila": "En tiendas pequeñas de Coahuila, los precios de las tortillas han alcanzado un máximo de 30.00 pesos por kilogramo.",
    "Colima": "En tiendas pequeñas de Colima, los precios de las tortillas han alcanzado un máximo de 28.00 pesos por kilogramo.",
    "D.F.": "En tiendas pequeñas de D.F., los precios de las tortillas han alcanzado un máximo de 20.39 pesos por kilogramo.",
    "Durango": "En tiendas pequeñas de Durango, los precios de las tortillas han alcanzado un máximo de 28.00 pesos por kilogramo.",
    "Edo. México": "En tiendas pequeñas del Estado de México, los precios de las tortillas han alcanzado un máximo de 19.43 pesos por kilogramo.",
    "Guanajuato": "En tiendas pequeñas de Guanajuato, los precios de las tortillas han alcanzado un máximo de 24.17 pesos por kilogramo.",
    "Guerrero": "En tiendas pequeñas de Guerrero, los precios de las tortillas han alcanzado un máximo de 29.63 pesos por kilogramo.",
    "Hidalgo": "En tiendas pequeñas de Hidalgo, los precios de las tortillas han alcanzado un máximo de 23.50 pesos por kilogramo.",
    "Jalisco": "En tiendas pequeñas de Jalisco, los precios de las tortillas han alcanzado un máximo de 25.04 pesos por kilogramo.",
    "Michoacán": "En tiendas pequeñas de Michoacán, los precios de las tortillas han alcanzado un máximo de 22.43 pesos por kilogramo.",
    "Morelos": "En tiendas pequeñas de Morelos, los precios de las tortillas han alcanzado un máximo de 26.00 pesos por kilogramo.",
    "Nayarit": "En tiendas pequeñas de Nayarit, los precios de las tortillas han alcanzado un máximo de 24.00 pesos por kilogramo.",
    "Nuevo León": "En tiendas pequeñas de Nuevo León, los precios de las tortillas han alcanzado un máximo de 24.89 pesos por kilogramo.",
    "Oaxaca": "En tiendas pequeñas de Oaxaca, los precios de las tortillas han alcanzado un máximo de 23.33 pesos por kilogramo.",
    "Puebla": "En tiendas pequeñas de Puebla, los precios de las tortillas han alcanzado un máximo de 18.00 pesos por kilogramo.",
    "Querétaro": "En tiendas pequeñas de Querétaro, los precios de las tortillas han alcanzado un máximo de 24.92 pesos por kilogramo.",
    "Quintana Roo": "En tiendas pequeñas de Quintana Roo, los precios de las tortillas han alcanzado un máximo de 27.00 pesos por kilogramo.",
    "San Luis Potosí": "En tiendas pequeñas de San Luis Potosí, los precios de las tortillas han alcanzado un máximo de 23.00 pesos por kilogramo.",
    "Sinaloa": "En tiendas pequeñas de Sinaloa, los precios de las tortillas han alcanzado un máximo de 26.67 pesos por kilogramo.",
    "Sonora": "En tiendas pequeñas de Sonora, los precios de las tortillas han alcanzado un máximo de 31.00 pesos por kilogramo.",
    "Tabasco": "En tiendas pequeñas de Tabasco, los precios de las tortillas han alcanzado un máximo de 24.20 pesos por kilogramo.",
    "Tamaulipas": "En tiendas pequeñas de Tamaulipas, los precios de las tortillas han alcanzado un máximo de 31.00 pesos por kilogramo.",
    "Tlaxcala": "En tiendas pequeñas de Tlaxcala, los precios de las tortillas han alcanzado un máximo de 18.00 pesos por kilogramo.",
    "Veracruz": "En tiendas pequeñas de Veracruz, los precios de las tortillas han alcanzado un máximo de 26.00 pesos por kilogramo.",
    "Yucatán": "En tiendas pequeñas de Yucatán, los precios de las tortillas han alcanzado un máximo de 27.86 pesos por kilogramo.",
    "Zacatecas": "En tiendas pequeñas de Zacatecas, los precios de las tortillas han alcanzado un máximo de 22.00 pesos por kilogramo."
};
  states = ['All', 'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'D.F.', 'Durango', 'Edo. México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas']
  statesFig3 = ['All', '10 + Caras', '10 + Baratas'];
  stores = ['Tiendas Locales', 'Cadenas Comerciales', 'Todo'];
  storesFig3 = ['Tiendas Locales', 'Cadenas Comerciales'];
  speedsFig3 = ['x1', 'x2', 'x4'];
  yearsFig4 = ['All', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
  storesFig4 = ['Tiendas Locales', 'Cadenas Comerciales'];
  orderBy = new FormControl('name'); // 'name' is the default value
  stateBy = new FormControl('Jalisco'); // 'name' is the default value
  storeBy = new FormControl('Todo'); // 'name' is the default value
  stateFig3By = new FormControl('All'); // 'name' is the default valu
  storeFig3By = new FormControl('Tiendas Locales'); // 'name' is the default valuee
  speedFig3By = new FormControl('x1');
  yearFig4By = new FormControl('All');
  storeFig4By = new FormControl('Tiendas Locales');
  yearFig4_2By = new FormControl('All');
  storeFig4_2By = new FormControl('Cadenas Comerciales');
  fig2Src = this.sanitizer.bypassSecurityTrustResourceUrl('assets/fig2/Jalisco_Both_Store_Types.html');
  fig3Src = this.sanitizer.bypassSecurityTrustResourceUrl('assets/fig3/raceBarBigRetail.html');
  fig4Src = this.sanitizer.bypassSecurityTrustResourceUrl('assets/fig4/momPopStore_All.html');
  fig4_2Src = this.sanitizer.bypassSecurityTrustResourceUrl('assets/fig4/bigRetail_All.html');
  stateSelected = 'Jalisco';
  separatorImages = Array(45).fill('assets/tortilla_separator1.png'); // Replace with your image path
  separatorImages2 = Array(45).fill('assets/tortilla_separator2.png'); // Replace with your image path
  alternatingImages = this.separatorImages
  .map((item, index) => [item, this.separatorImages2[index]])
  .reduce((acc, val) => acc.concat(val), []);
  constructor(private sanitizer: DomSanitizer) {
    this.generatePlotSrc();
    this.generatePlotFig3Src();
   }

  onOrderChange(event: any) {
    const selectedValue = event.detail.value;
    this.orderBy.setValue(selectedValue);
  }

  onOrderChangeFig2State(event: any) {
    const selectedValue = event.detail.value;
    this.stateBy.setValue(selectedValue);
    this.stateSelected = selectedValue;
    this.generatePlotSrc();
  }

  onOrderChangeFig2Store(event: any) {
    const selectedValue = event.detail.value;
    this.storeBy.setValue(selectedValue);
    this.generatePlotSrc();
  }

  onOrderChangeFig3State(event: any) {
    const selectedValue = event.detail.value;
    this.stateFig3By.setValue(selectedValue);
    this.generatePlotFig3Src();
  }

  onOrderChangeFig3Store(event: any) {
    const selectedValue = event.detail.value;
    this.storeFig3By.setValue(selectedValue);
    this.generatePlotFig3Src();
  }

  onOrderChangeFig3Speed(event: any) {
    const selectedValue = event.detail.value;
    this.speedFig3By.setValue(selectedValue);
    this.generatePlotFig3Src();
  }

  onOrderChangeFig4Year(event: any) {
    const selectedValue = event.detail.value;
    this.yearFig4By.setValue(selectedValue);
    this.generatePlotFig4Src();
  }

  onOrderChangeFig4Store(event: any) {
    const selectedValue = event.detail.value;
    this.storeFig4By.setValue(selectedValue);
    this.generatePlotFig4Src();
  }

  onOrderChangeFig4_2Year(event: any) {
    const selectedValue = event.detail.value;
    this.yearFig4_2By.setValue(selectedValue);
    this.generatePlotFig4_2Src();
  }

  onOrderChangeFig4_2Store(event: any) {
    const selectedValue = event.detail.value;
    this.storeFig4_2By.setValue(selectedValue);
    this.generatePlotFig4_2Src();
  }

  generatePlotSrc(){
    let src = '';
    let store_type = '';
    let state = '';
    if(this.storeBy.value === 'Tiendas Locales'){
      store_type = 'Mom_and_Pop_Store';
    }else if(this.storeBy.value === 'Cadenas Comerciales'){
      store_type = 'Big_Retail_Store';
    }else if(this.storeBy.value === 'Todo'){
      store_type = 'Both_Store_Types';
    }
    if(this.stateBy.value === 'All'){
      state = 'all_states';
      src = 'assets/fig2/' + store_type + '_' + state + '.html';
    }else{
      state = this.stateBy.value!.replace(/\s+/g, '').replace(/\.\s?/g, '').trim();;
      src = 'assets/fig2/' + state + '_' + store_type + '.html';
    }
    this.fig2Src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  getState(){
    return '';
  }

  generatePlotFig3Src(){
    let src = '';
    let store_type = '';
    let state = '';
    if(this.storeFig3By.value === 'Tiendas Locales'){
      store_type = 'MomPopStore';
    }else if(this.storeFig3By.value === 'Cadenas Comerciales'){
      store_type = 'BigRetail';
    }
    if(this.stateFig3By.value === 'All'){
      state = 'raceBar';
      src = 'assets/fig3/' + state + store_type;
    }else if(this.stateFig3By.value === '10 + Caras'){
      state = '10expensiveRaceBar';
      src = 'assets/fig3/' + state + store_type;
    }else if(this.stateFig3By.value === '10 + Baratas'){
      state = '10cheapestRaceBar';
      src = 'assets/fig3/' + state + store_type;
    }
    if(this.speedFig3By.value === 'x2' || this.speedFig3By.value === 'x4'){
      src = src + this.speedFig3By.value;
    }
    src = src + '.html';
    this.fig3Src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  generatePlotFig4Src(){
    let src = '';
    let store_type = '';
    let year = '';
    if(this.storeFig4By.value === 'Tiendas Locales'){
      store_type = 'momPopStore';
    }else if(this.storeFig4By.value === 'Cadenas Comerciales'){
      store_type = 'bigRetail';
    }
    year = this.yearFig4By.value!;
    src = 'assets/fig4/' + store_type + '_' + year;
    src = src + '.html';
    this.fig4Src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  generatePlotFig4_2Src(){
    let src = '';
    let store_type = '';
    let year = '';
    if(this.storeFig4_2By.value === 'Tiendas Locales'){
      store_type = 'momPopStore';
    }else if(this.storeFig4_2By.value === 'Cadenas Comerciales'){
      store_type = 'bigRetail';
    }
    year = this.yearFig4_2By.value!;
    src = 'assets/fig4/' + store_type + '_' + year;
    src = src + '.html';
    this.fig4_2Src = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
