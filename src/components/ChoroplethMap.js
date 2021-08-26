import Choropleth from 'react-leaflet-choropleth';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import { feature } from 'topojson-client';
import data from '../data/montanaCounties.json'

const features = feature(data, data.objects.counties);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
}));

export default function ChoroplethMap() {
  const classes = useStyles();

  const style = {
    fillColor: '#3f50b1',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 1
  };

  return (
    <>
      <Title>Number of Psychiatrists per 100,000 Population</Title>
      <MapContainer
        center={[47.035744045448006, -109.96669218680697]}
        zoom={5.5}
        className={classes.root}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {features && (
          <GeoJSON data={features} />
        )} */}
        <Choropleth
          data={{ type: 'FeatureCollection', features: features.features }}
          valueProperty={(feature) => feature.properties.density}
          scale={['#c2c9e7', '#2c3c9c']}
          steps={5}
          mode='e'
          style={style}
        />
      </MapContainer>
    </>
  );
};