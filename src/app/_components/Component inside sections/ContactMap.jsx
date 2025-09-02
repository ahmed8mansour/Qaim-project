"use client"

import dynamic from 'next/dynamic';

function MapPlaceholder() {
  return (
    <p>
      Map of London.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

// Create a completely isolated map component
const MapComponent = dynamic(
  () => {
    return new Promise((resolve) => {
      // Only resolve when we're in the browser
      if (typeof window !== 'undefined') {
        // Import everything dynamically
        Promise.all([
          import('leaflet/dist/leaflet.css'),
          import("leaflet-defaulticon-compatibility"),
          import("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"),
          import('react-leaflet/MapContainer'),
          import('react-leaflet/TileLayer'),
          import('react-leaflet'),
        ]).then(([css1, css2, css3, { MapContainer }, { TileLayer }, { Marker, Popup }]) => {
          resolve(function MapComponentInner() {
            return (
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} placeholder={<MapPlaceholder />}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            );
          });
        });
      } else {
        // Return placeholder during SSR
        resolve(() => <MapPlaceholder />);
      }
    });
  },
  {
    ssr: false,
    loading: () => <MapPlaceholder />
  }
);

export default MapComponent;