import { createBill, getBills } from "../models/Bill.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { orderId, total } = req.body;
    await createBill(orderId, total);
    res.json({ success: true });
  }

  if (req.method === "GET") {
    const bills = await getBills();
    res.json(bills);
  }
}
