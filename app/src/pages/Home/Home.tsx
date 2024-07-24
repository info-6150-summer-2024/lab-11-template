import { useState } from "react";
import ViewOrder from "../../components/Order";
import OrderList from "../../components/OrderList";
import './Home.css';
import Order from "../../models/order";

const Home = function() {
    const [selectedOrder, setOrder] = useState<Order>();
    const selectOrder = (order: Order): void => {
        setOrder(order);
    }
    return (
    <main className="container">
        <OrderList orderHandler={selectOrder}></OrderList>
        <ViewOrder order={selectedOrder}></ViewOrder>
    </main>
    );
}

export default Home;