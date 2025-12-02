import db from "../lib/sqlite.js";

export default function handler(req, res) {

  if (req.method === "GET") {
    const customers = db.prepare("SELECT * FROM customers").all();
    return res.json(customers);
  }

  if (req.method === "DELETE") {
    const { id } = JSON.parse(req.body);
    db.prepare("DELETE FROM customers WHERE id = ?").run(id);
    return res.json({ message: "Customer deleted" });
  }

  if (req.method === "PUT") {
    const { id, name, phone, address } = req.body;
    db.prepare(
      "UPDATE customers SET name = ?, phone = ?, address = ? WHERE id = ?"
    ).run(name, phone, address, id);

    return res.json({ message: "Customer updated" });
  }

  res.status(405).json({ message: "Method not allowed" });
}
