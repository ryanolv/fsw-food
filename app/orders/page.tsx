import Header from "../_components/header";
import OrderItem from "./_components/order-item";
import { getOrders } from "../_data/get-orders";

const OrdersPage = async () => {
  const orders = await getOrders();
  return (
    <div>
      <Header />
      <div className="p-6 space-y-6">
        <h1 className="font-semibold text-lg">Meus Pedidos</h1>
        <div className="space-y-3">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
