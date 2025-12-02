import db from "../lib/sqlite.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, price, category } = req.body;

    db.prepare(
      "INSERT INTO menus (name, price, category) VALUES (?, ?, ?)"
    ).run(name, price, category);

    return res.json({ message: "Menu item added successfully!" });
  }

  if (req.method === "GET") {
    const items = db.prepare("SELECT * FROM menus").all();
    return res.json(items);
  }

  res.status(405).json({ message: "Method not allowed" });
}
