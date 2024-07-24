import { useEffect, useState } from "react";
import Order from "../models/order";
import { getOrders } from "../services/order-service";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

type Props = {
    orderHandler: (order: Order) => void
}

const OrderList = function(props: Props) {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        getOrders().then(os => setOrders(os));
        return () => {
            // some code
        }
    }, []);
    const orderElements = orders.map(order => <ListItem key={order.id}
                                                        onClick={() => props.orderHandler(order)} disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary={order.id} />
                                                    </ListItemButton>
                                                </ListItem>)
    return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', flexBasis: '20%'}}>
        <nav aria-label="secondary mailbox folders" style={{  }}>
            <List>
                {orderElements}
            </List>
        </nav>
    </Box>
    );
}

export default OrderList;