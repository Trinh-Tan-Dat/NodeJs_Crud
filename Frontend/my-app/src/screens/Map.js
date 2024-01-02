import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import HomeScreen from "./HomeScreen";
function MyMap() {
  return (
    <div>
      <HomeScreen />
      <Map
        mapboxAccessToken="pk.eyJ1IjoiMjE1MjA3MTQiLCJhIjoiY2xxdDkxcmZxNGNjOTJpdGt1bDE4enM5YSJ9.iuiZAGB4AskW9VNuFFoc0g"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
      <div><p>hhadhshdsahdsadsah</p></div>
    </div>
  );
}
export default MyMap;