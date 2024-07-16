"use client";

import { Transition } from "../Transition";
import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerHouse } from "./MarkerHouse";

export function Location() {
  const coordinatePoint = {
    lat: 40.463667,
    lng: -3.74922,
  };

  const centerMarker = (position: { lat: number; lng: number }, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng,
    });
  };

  return (
    <Transition className="w-full px-0 py-8 md:py-44 md:px-0">
      <h4 className="text-center text-secondary" id="location">
        Location
      </h4>
      <h2 className="max-w-full px-4 lg:px-0 mx-auto my-4 mb-8 text-3xl md:text-4xl text-center text-secondary">
        Empowering investors worldwide with the premier community of assets
        since 2022. Unlock unparalleled opportunities today.
      </h2>
      <div className="w-full">
        <MapContainer
          center={coordinatePoint}
          zoom={6}
          scrollWheelZoom={false}
          className="h-[700px] w-full"
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
          <MarkerHouse selectMarker={centerMarker} />
        </MapContainer>
      </div>
    </Transition>
  );
}
