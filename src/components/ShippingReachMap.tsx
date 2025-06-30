"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Order, DarkStore } from "../types";

// Fix for marker icon not showing
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface ShippingReachMapProps {
  selectedOrder: Order | null;
  darkStores: DarkStore[];
}

const cityCoordinates: Record<string, [number, number]> = {
  Delhi: [28.7041, 77.1025],
  UP: [27.1767, 78.0081],
  Rajasthan: [26.9124, 75.7873],
  Bangalore: [12.9716, 77.5946],
  Mumbai: [19.076, 72.8777],
  Noida: [28.5355, 77.391],
};

const ShippingReachMap: React.FC<ShippingReachMapProps> = ({ selectedOrder, darkStores }) => {
  const warehouse: [number, number] = [28.5355, 77.391]; // Noida

  const storeCoords = selectedOrder ? cityCoordinates[selectedOrder.darkStore] : null;
  const customerCoords = selectedOrder ? cityCoordinates[selectedOrder.shippingCity] : null;

  return (
    <MapContainer center={warehouse} zoom={5} style={{ height: "400px", borderRadius: "10px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Warehouse Marker */}
      <Marker position={warehouse}>
        <Popup>Noida Warehouse</Popup>
      </Marker>

      {/* Dark Store Markers */}
      {darkStores.map((store, idx) => {
        const coords = cityCoordinates[store.name];
        if (!coords) return null;
        return (
          <Marker key={idx} position={coords}>
            <Popup>
              <strong>{store.name}</strong><br />
              Stock: {store.currentStock} / {store.capacity}<br />
              Avg Delivery: {store.avgDeliveryTime}<br />
              Radius: {store.deliveryRadius} km
            </Popup>
          </Marker>
        );
      })}

      {/* Order Route */}
      {selectedOrder && storeCoords && customerCoords && (
        <>
          <Marker position={storeCoords}>
            <Popup>{selectedOrder.darkStore} (Store)</Popup>
          </Marker>
          <Marker position={customerCoords}>
            <Popup>{selectedOrder.shippingCity} (Customer)</Popup>
          </Marker>
          <Polyline positions={[storeCoords, customerCoords]} color="blue" weight={4} />
        </>
      )}
    </MapContainer>
  );
};

export default ShippingReachMap;
