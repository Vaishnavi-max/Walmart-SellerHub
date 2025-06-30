import React, { useState } from "react";
import { mockOrders, mockDarkStores } from "../data/mockData";
import { Order, DarkStore } from "../types";
import ShippingReachMap from "./ShippingReachMap";

const OrderFulfillment: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(mockOrders[0]);
  const [selectedStore, setSelectedStore] = useState<DarkStore | null>(null);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Order Fulfillment</h1>

      {/* Shipping Reachability Map */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Shipping Reachability Map</h2>
        <ShippingReachMap selectedOrder={selectedOrder} darkStores={mockDarkStores} />
      </div>
    </div>
  );
};

export default OrderFulfillment;
