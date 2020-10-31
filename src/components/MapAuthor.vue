<template>
  <div id="map" class="map"></div>
</template>

<script>
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Style, Circle, Fill, Stroke } from "ol/style";
import VectorSource from "ol/source/Vector";
import { Vector as VectorLayer, Tile as TileLayer } from "ol/layer";
export default {
  name: "MapAuthor",
  props: {
    lat: String,
    lng: String,
  },
  data: () => ({
    map: null,
    authorPlace: null,
    vectorSource: null,
    vectorLayer: null,
  }),
  mounted() {
    this.initMap(this.lat, this.lng);
  },
  methods: {
    // map by coordinates from api
    initMap(lat, lng) {
      // creating a coordinate point
      this.authorPlace = new Feature({
        geometry: new Point(fromLonLat([lat, lng])),
      });
      // point animation
      this.authorPlace.setStyle(
        new Style({
          image: new Circle({
            radius: 6,
            fill: new Fill({ color: "red" }),
            stroke: new Stroke({
              color: [0, 0, 0],
              width: 2,
            }),
          }),
        })
      );
      // getting point
      this.vectorSource = new VectorSource({
        features: [this.authorPlace],
      });
      // setting up a point on the map
      this.vectorLayer = new VectorLayer({
        source: this.vectorSource,
      });
      // creating map
      this.map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          this.vectorLayer,
        ],
        view: new View({
          center: fromLonLat([lat, lng]),
          zoom: 5,
        }),
      });
    },
  },
};
</script>

<style scoped lang="scss">
.map {
  height: 400px;
  width: 100%;
}
</style>
