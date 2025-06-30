import { Order, DarkStore } from '../types';

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    productName: 'Phone',
    customerName: 'Aman Gupta',
    darkStore: 'Delhi',
    shippingCity: 'UP',
    deliveryTime: '2 days',
    shippingRate: 40,
    amount: 19999,
    status: 'shipped',
    shippingAddress: 'Sector 62, Noida',
  },
  {
    id: 'ORD002',
    productName: 'Headphones',
    customerName: 'Priya Verma',
    darkStore: 'Rajasthan',
    shippingCity: 'Delhi',
    deliveryTime: '5 days',
    shippingRate: 80,
    amount: 2999,
    status: 'processing',
    shippingAddress: 'Connaught Place, Delhi',
  }
];

export const mockDarkStores: DarkStore[] = [
  {
    name: 'Delhi',
    address: 'Delhi Main Center',
    currentStock: 1000,
    capacity: 2000,
    avgDeliveryTime: '1.5 days',
    deliveryRadius: 300,
  },
  {
    name: 'UP',
    address: 'UP Storage Facility',
    currentStock: 800,
    capacity: 1500,
    avgDeliveryTime: '2 days',
    deliveryRadius: 250,
  },
  {
    name: 'Rajasthan',
    address: 'Jaipur Hub',
    currentStock: 500,
    capacity: 1000,
    avgDeliveryTime: '3.5 days',
    deliveryRadius: 400,
  }
];
