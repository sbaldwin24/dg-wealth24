(function(){
	
"use strict";	

            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
 
	      var myLatlng = new google.maps.LatLng(32.95790, -96.82291); 

                var mapOptions = {
                    zoom: 12,
		scrollwheel: false,                    
                    center: myLatlng,
                    styles: [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#428BCA'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}]
                };
                var mapElement = document.getElementById('map');
	      
                var map = new google.maps.Map(mapElement, mapOptions);
	      

	      var marker = new google.maps.Marker({
      		position: myLatlng,
      		map: map,
      		title: 'We are right here!'
  		});
            }
}())