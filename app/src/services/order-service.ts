import Order from "../models/order";
import { search } from "./api-service";

const orderAPI = 'orders';

export const getOrders = async (): Promise<Order[]> => {
    return await search<Order>(orderAPI, {});
}