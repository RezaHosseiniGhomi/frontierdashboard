import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data/mt-counties.json';

const features = feature(topology, 'mt-counties');

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
}));

export default function Map({ title }) {
  const classes = useStyles();

  return (
    <div className='container'>
      <div className='header'>
        <h2 className='heading'>{title}</h2>
        <div className=''>
          <div className=''>
            <MapContainer
              center={[47.035744045448006, -109.96669218680697]}
              zoom={5.5}
              className={classes.root}
            >
              <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
};