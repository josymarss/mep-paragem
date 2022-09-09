import { useState } from 'react';
import { ExpoLeaflet } from "expo-leaflet";
import * as Location from 'expo-location';


function Routes(){

    let marker = {
        id: '1',
        coords: { lat: 36.00, lng: -76.00 },
        icon: "<div>❤️</div>",
        size: [24, 24]
      }

      let mapLayer = {
        baseLayerName: 'OpenStreetMap',  // This will be seen in the layer selection control
        baseLayerIsChecked: 'true',  // If the layer is selected in the layer selection control
        layerType: 'TileLayer', 
        baseLayer: true,
        url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${mapboxToken}`,
        attribution:
          '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      }
        //A geometry layer can be added to the may by following the example below:   
      let mapShapes = [
        {
          shapeType: 'Circle',
          color: "#123123",
          id: "1",
          center: { lat: 34.225727, lng: -77.94471 },
          radius: 2000
        }
      ]
    return(<Text>Inside of routes</Text>); 
}
export default Routes;