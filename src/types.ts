export interface Order {
  id: string;
  productName: string;
  customerName: string;
  darkStore: string;
  shippingCity: string;
  deliveryTime: string;
  shippingRate: number;
  amount: number;
  status: string;
  shippingAddress: string;
}

export interface DarkStore {
  name: string;
  address: string;
  currentStock: number;
  capacity: number;
  avgDeliveryTime: string;
  deliveryRadius: number;
}
