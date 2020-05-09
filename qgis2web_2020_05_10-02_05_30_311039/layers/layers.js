var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tsunami_1 = new ol.format.GeoJSON();
var features_tsunami_1 = format_tsunami_1.readFeatures(json_tsunami_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsunami_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tsunami_1.addFeatures(features_tsunami_1);
var lyr_tsunami_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tsunami_1, 
                style: style_tsunami_1,
                interactive: true,
    title: 'tsunami<br />\
    <img src="styles/legend/tsunami_1_0.png" /> dampak sedang<br />\
    <img src="styles/legend/tsunami_1_1.png" /> dampak terbesar<br />'
        });
var format_pemukiman_2 = new ol.format.GeoJSON();
var features_pemukiman_2 = format_pemukiman_2.readFeatures(json_pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukiman_2.addFeatures(features_pemukiman_2);
var lyr_pemukiman_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukiman_2, 
                style: style_pemukiman_2,
                interactive: true,
                title: '<img src="styles/legend/pemukiman_2.png" /> pemukiman'
            });
var format_saranaibadah_3 = new ol.format.GeoJSON();
var features_saranaibadah_3 = format_saranaibadah_3.readFeatures(json_saranaibadah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saranaibadah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saranaibadah_3.addFeatures(features_saranaibadah_3);
var lyr_saranaibadah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saranaibadah_3, 
                style: style_saranaibadah_3,
                interactive: true,
                title: '<img src="styles/legend/saranaibadah_3.png" /> sarana ibadah'
            });
var format_jalanraya_4 = new ol.format.GeoJSON();
var features_jalanraya_4 = format_jalanraya_4.readFeatures(json_jalanraya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanraya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanraya_4.addFeatures(features_jalanraya_4);
var lyr_jalanraya_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanraya_4, 
                style: style_jalanraya_4,
                interactive: true,
    title: 'jalanraya<br />\
    <img src="styles/legend/jalanraya_4_0.png" /> Jalan pemukiman<br />\
    <img src="styles/legend/jalanraya_4_1.png" /> Jalan Raya<br />'
        });
var format_pendidikan_5 = new ol.format.GeoJSON();
var features_pendidikan_5 = format_pendidikan_5.readFeatures(json_pendidikan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_5.addFeatures(features_pendidikan_5);
var lyr_pendidikan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pendidikan_5, 
                style: style_pendidikan_5,
                interactive: true,
                title: '<img src="styles/legend/pendidikan_5.png" /> pendidikan'
            });
var format_poskobencana_6 = new ol.format.GeoJSON();
var features_poskobencana_6 = format_poskobencana_6.readFeatures(json_poskobencana_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poskobencana_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poskobencana_6.addFeatures(features_poskobencana_6);
var lyr_poskobencana_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poskobencana_6, 
                style: style_poskobencana_6,
                interactive: true,
                title: '<img src="styles/legend/poskobencana_6.png" /> posko bencana'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_tsunami_1.setVisible(true);lyr_pemukiman_2.setVisible(true);lyr_saranaibadah_3.setVisible(true);lyr_jalanraya_4.setVisible(true);lyr_pendidikan_5.setVisible(true);lyr_poskobencana_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tsunami_1,lyr_pemukiman_2,lyr_saranaibadah_3,lyr_jalanraya_4,lyr_pendidikan_5,lyr_poskobencana_6];
lyr_tsunami_1.set('fieldAliases', {'id': 'id', 'jns_dampak': 'jns_dampak', });
lyr_pemukiman_2.set('fieldAliases', {'id': 'id', });
lyr_saranaibadah_3.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_jalanraya_4.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_pendidikan_5.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_poskobencana_6.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_tsunami_1.set('fieldImages', {'id': 'TextEdit', 'jns_dampak': 'TextEdit', });
lyr_pemukiman_2.set('fieldImages', {'id': '', });
lyr_saranaibadah_3.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_jalanraya_4.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_pendidikan_5.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_poskobencana_6.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_tsunami_1.set('fieldLabels', {'id': 'no label', 'jns_dampak': 'no label', });
lyr_pemukiman_2.set('fieldLabels', {'id': 'no label', });
lyr_saranaibadah_3.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label', });
lyr_jalanraya_4.set('fieldLabels', {'id': 'no label', 'keterangan': 'no label', });
lyr_pendidikan_5.set('fieldLabels', {'id': 'no label', 'keterangan': 'no label', });
lyr_poskobencana_6.set('fieldLabels', {'id': 'no label', 'keterangan': 'no label', });
lyr_poskobencana_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});