import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

function Coverage() {
    const serviceCenters = useLoaderData();
    console.log(serviceCenters);
    const position = [23.8103, 90.4125];
    return (
        <div>
            <h1>Coverage Page</h1>
            <p>This is the coverage page content.</p>
            <div>

            </div>

            <div>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {serviceCenters.map((center, idx) => (
                        <Marker key={idx} position={[center.latitude, center.longitude]}>
                            <Popup>
                                {center.name}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>                
            </div>


        </div>
    );
}
export default Coverage;