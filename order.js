import { createOrder, getOrders } from "../models/Order.js";
import { createBill } from "../models/Bill.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { customerId, total } = req.body;

    const orderId = await createOrder(customerId, total);
    await createBill(orderId, total);

    res.json({ success: true, orderId });
  }

  if (req.method === "GET") {
    const orders = await getOrders();
    res.json(orders);
  }
}
