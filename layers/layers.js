var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EastDelhiMC_1 = new ol.format.GeoJSON();
var features_EastDelhiMC_1 = format_EastDelhiMC_1.readFeatures(json_EastDelhiMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastDelhiMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EastDelhiMC_1.addFeatures(features_EastDelhiMC_1);
var lyr_EastDelhiMC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EastDelhiMC_1, 
                style: style_EastDelhiMC_1,
                interactive: true,
                title: '<img src="styles/legend/EastDelhiMC_1.png" /> East Delhi MC'
            });
var format_207_2 = new ol.format.GeoJSON();
var features_207_2 = format_207_2.readFeatures(json_207_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_207_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_207_2.addFeatures(features_207_2);
var lyr_207_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_207_2, 
                style: style_207_2,
                interactive: true,
                title: '<img src="styles/legend/207_2.png" /> 207'
            });
var format_206_3 = new ol.format.GeoJSON();
var features_206_3 = format_206_3.readFeatures(json_206_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_206_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_206_3.addFeatures(features_206_3);
var lyr_206_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_206_3, 
                style: style_206_3,
                interactive: true,
                title: '<img src="styles/legend/206_3.png" /> 206'
            });
var format_205_4 = new ol.format.GeoJSON();
var features_205_4 = format_205_4.readFeatures(json_205_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_205_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_205_4.addFeatures(features_205_4);
var lyr_205_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_205_4, 
                style: style_205_4,
                interactive: true,
                title: '<img src="styles/legend/205_4.png" /> 205'
            });

lyr_BaseMap_0.setVisible(true);lyr_EastDelhiMC_1.setVisible(true);lyr_207_2.setVisible(true);lyr_206_3.setVisible(true);lyr_205_4.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_EastDelhiMC_1,lyr_207_2,lyr_206_3,lyr_205_4];
lyr_EastDelhiMC_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_207_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_206_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_205_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_EastDelhiMC_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_207_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_206_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_205_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_EastDelhiMC_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'header label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'header label', });
lyr_207_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_206_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_205_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_205_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});