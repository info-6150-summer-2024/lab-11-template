
interface OrderItem {
    id: string;
    productId: string;
    quantity: number;
    perPerUnit: number;
}

interface Order {
    id: string;
    usreId: string;
    total: number;
    tax: number;
    orderItems: OrderItem[];
}

export default Order;