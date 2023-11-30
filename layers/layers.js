var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OpenWeatherMap Snow',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openweathermap.org/map/snow/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'})]
    })
})
]
});
var lyr_Martapura_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Martapura",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Martapura_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11610300.371791, -477325.170422, 11622767.117712, -465845.559188]
                            })
                        });var lyr_MartapuraHillshade_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Martapura Hillshade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MartapuraHillshade_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11610300.371791, -477325.170422, 11622767.117712, -465845.559188]
                            })
                        });var format_BatasBlok_2 = new ol.format.GeoJSON();
var features_BatasBlok_2 = format_BatasBlok_2.readFeatures(json_BatasBlok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasBlok_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasBlok_2.addFeatures(features_BatasBlok_2);var lyr_BatasBlok_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasBlok_2, 
                style: style_BatasBlok_2,
                title: '<img src="styles/legend/BatasBlok_2.png" /> Batas Blok'
            });var format_BatasKompartemen_3 = new ol.format.GeoJSON();
var features_BatasKompartemen_3 = format_BatasKompartemen_3.readFeatures(json_BatasKompartemen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKompartemen_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasKompartemen_3.addFeatures(features_BatasKompartemen_3);var lyr_BatasKompartemen_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKompartemen_3, 
                style: style_BatasKompartemen_3,
                title: '<img src="styles/legend/BatasKompartemen_3.png" /> Batas Kompartemen'
            });var format_Jalan_Martapura_4 = new ol.format.GeoJSON();
var features_Jalan_Martapura_4 = format_Jalan_Martapura_4.readFeatures(json_Jalan_Martapura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Martapura_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_Martapura_4.addFeatures(features_Jalan_Martapura_4);var lyr_Jalan_Martapura_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_Martapura_4, 
                style: style_Jalan_Martapura_4,
                title: '<img src="styles/legend/Jalan_Martapura_4.png" /> Jalan_Martapura'
            });var format_Menara_5 = new ol.format.GeoJSON();
var features_Menara_5 = format_Menara_5.readFeatures(json_Menara_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Menara_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Menara_5.addFeatures(features_Menara_5);cluster_Menara_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Menara_5
});var lyr_Menara_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Menara_5, 
                style: style_Menara_5,
                title: '<img src="styles/legend/Menara_5.png" /> Menara'
            });var format_Office_6 = new ol.format.GeoJSON();
var features_Office_6 = format_Office_6.readFeatures(json_Office_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Office_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Office_6.addFeatures(features_Office_6);cluster_Office_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Office_6
});var lyr_Office_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Office_6, 
                style: style_Office_6,
                title: '<img src="styles/legend/Office_6.png" /> Office'
            });

lyr_Martapura_0.setVisible(true);lyr_MartapuraHillshade_1.setVisible(true);lyr_BatasBlok_2.setVisible(true);lyr_BatasKompartemen_3.setVisible(true);lyr_Jalan_Martapura_4.setVisible(true);lyr_Menara_5.setVisible(true);lyr_Office_6.setVisible(true);
var layersList = [baseLayer,lyr_Martapura_0,lyr_MartapuraHillshade_1,lyr_BatasBlok_2,lyr_BatasKompartemen_3,lyr_Jalan_Martapura_4,lyr_Menara_5,lyr_Office_6];
lyr_BatasBlok_2.set('fieldAliases', {'BLOK': 'BLOK', 'UNIT': 'UNIT', 'KODE_BLOK': 'KODE_BLOK', 'Wilayah': 'Wilayah', 'orig_ogc_fid': 'orig_ogc_fid', });
lyr_BatasKompartemen_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO_PETAK': 'NO_PETAK', 'UNIT_CODE': 'UNIT_CODE', 'BLOCK_CODE': 'BLOCK_CODE', 'PETAKID': 'PETAKID', 'BLOCK': 'BLOCK', 'CoWil': 'CoWil', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Jalan_Martapura_4.set('fieldAliases', {'Cowil': 'Cowil', 'RD_TYPE': 'RD_TYPE', });
lyr_Menara_5.set('fieldAliases', {'WILAYAH': 'WILAYAH', 'UNIT': 'UNIT', 'BLOK': 'BLOK', 'Keterangan': 'Keterangan', 'Comparteme': 'Comparteme', 'Stand': 'Stand', 'Nama_Menar': 'Nama_Menar', });
lyr_Office_6.set('fieldAliases', {'Unit': 'Unit', 'Blok': 'Blok', });
lyr_BatasBlok_2.set('fieldImages', {'BLOK': 'TextEdit', 'UNIT': 'TextEdit', 'KODE_BLOK': 'TextEdit', 'Wilayah': 'TextEdit', 'orig_ogc_fid': 'TextEdit', });
lyr_BatasKompartemen_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NO_PETAK': 'TextEdit', 'UNIT_CODE': 'TextEdit', 'BLOCK_CODE': 'TextEdit', 'PETAKID': 'TextEdit', 'BLOCK': 'TextEdit', 'CoWil': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_Jalan_Martapura_4.set('fieldImages', {'Cowil': 'TextEdit', 'RD_TYPE': 'TextEdit', });
lyr_Menara_5.set('fieldImages', {'WILAYAH': 'TextEdit', 'UNIT': 'TextEdit', 'BLOK': 'TextEdit', 'Keterangan': 'TextEdit', 'Comparteme': 'TextEdit', 'Stand': 'TextEdit', 'Nama_Menar': 'TextEdit', });
lyr_Office_6.set('fieldImages', {'Unit': 'TextEdit', 'Blok': 'TextEdit', });
lyr_BatasBlok_2.set('fieldLabels', {'BLOK': 'header label', 'UNIT': 'no label', 'KODE_BLOK': 'no label', 'Wilayah': 'no label', 'orig_ogc_fid': 'no label', });
lyr_BatasKompartemen_3.set('fieldLabels', {'OBJECTID': 'no label', 'NO_PETAK': 'header label', 'UNIT_CODE': 'no label', 'BLOCK_CODE': 'no label', 'PETAKID': 'no label', 'BLOCK': 'no label', 'CoWil': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Jalan_Martapura_4.set('fieldLabels', {'Cowil': 'no label', 'RD_TYPE': 'no label', });
lyr_Menara_5.set('fieldLabels', {'WILAYAH': 'no label', 'UNIT': 'no label', 'BLOK': 'no label', 'Keterangan': 'no label', 'Comparteme': 'no label', 'Stand': 'no label', 'Nama_Menar': 'header label', });
lyr_Office_6.set('fieldLabels', {'Unit': 'no label', 'Blok': 'header label', });
lyr_Office_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});