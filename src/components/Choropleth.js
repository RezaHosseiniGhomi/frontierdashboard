import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from '../data/mt-counties.json';
import TopoJSON from './TopoJSON';
import Title from './Title';
import L from 'leaflet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh"
  },
}));

const position = [47.035744045448006, -109.96669218680697];

function getColor(d) {
  return (
    d > 5000 ? '#08519c' :
    d > 4000 ? '#3182bd' :
    d > 3000 ? '#6baed6' :
    d > 2000 ? '#9ecae1' :
    d > 1000 ? '#c6dbef' :
    '#eff3ff'
  );
}

export default function Choropleth({ title }) {
  const classes = useStyles();

  return (
    <>
      <Title>{title}</Title>
      <MapContainer center={position} zoom={5.5} className={classes.root}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TopoJSON data={data} />
      </MapContainer>
    </>
  )
};