
var mymap = L.map('mapid').setView([33.44,-112.07],10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=TOKEN', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


// L.marker([33.44,-112.07]).addTo(mymap)


function clickZoom(e){
    mymap.setView(e.target.getLatLng(),13)
}
function addLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
            // console.log(pos.coords.latitude,pos.coords.longitude)
            let message = prompt("Enter a message")
            L.marker([pos.coords.latitude,pos.coords.longitude]).addTo(mymap).bindPopup(message).on("click",clickZoom)
        })    
    }else{
        alert("No Location")
    }
}


