import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
}));

// initial location on map
const position = [47.035744045448006, -109.96669218680697];

const HospitalMap = ({ title, data }) => {
  const classes = useStyles();

  return (
    <>
      <Title>{title}</Title>
      <MapContainer center={position} zoom={5.5} className={classes.root}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map(item => (
          <Marker position={item.coordinates} key={item.name} riseOnHover>
            <Tooltip>
              <Typography variant='h6' align='center' color='primary'>{item.name}</Typography>
              <Typography variant='subtitle1' align='center'>{item.city}</Typography>
              <Typography variant='subtitle2' align='center' gutterBottom>phone #: {item.number}</Typography>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default HospitalMap;