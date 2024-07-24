import Order from "../models/order";

type Props = {
    order: Order | undefined;
}

const ViewOrder = function(props: Props) {
    return (
        <section style={{ flexBasis: '70%'}}>
            <h1>{props.order?.id}</h1>
        </section>
    );
}

export default ViewOrder;