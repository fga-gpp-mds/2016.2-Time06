function addTeaHouseMarker(){
    //set tea house info, will be used at infowindow
    var teaHouseInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Jardim Botanico - Casa de Chá</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Casa de Chá</b>, Espaço destinado a futuro restaurante ' +
        'Sua proximidade com o lago do Jardim Evolutivo, '+
        'torna-se um excelente ponto para sua observação. '+
        '<p>Leia mais em: <a href="/jbb_spaces/space_name">'+
        'Casa de Chá</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: teaHouseInfowindowContentString,
        maxWidth: 200
    });

    //set the position in latitude and longitude of the marker
    var teaHouseLatLng = {lat: -15.872346, lng: -47.837086};

    //add the marker at the map in the position previously defined
    var teaHouseMarker = new google.maps.Marker({
        position: teaHouseLatLng,
        label: labels[labelIndex++ % labels.length],
        map: map,
        title: 'Casa de Chá'
    });

    google.maps.event.addDomListener(window, 'load', initialize);

    //add a listener to verify if the marker is clicked
    teaHouseMarker.addListener('click', function() {
        infowindow.open(map, teaHouseMarker);
    });

    //set the marker on map
    teaHouseMarker.setMap(map);
}
