// Script to create folders and starter files for Delight Caterers Next.js project

import fs from "fs";
import path from "path";

const root = process.cwd(); // project root

// Folders to create
const folders = ["app", "components", "lib", "models", "public", "api"];

// Files to create in each folder
const files = {
  lib: ["db.js", "order.js", "bill.js", "validation.js"],
  models: ["Customer.js", "Order.js", "Menu.js", "User.js", "Bill.js"],
  api: ["customer.js", "order.js", "menu.js", "bill.js", "login.js"],
  components: [], // you can add component files later
  app: [], // Next.js app files already exist
  public: [], // add images later
};

// Create folders
folders.forEach(folder => {
  const folderPath = path.join(root, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folder}`);
  } else {
    console.log(`Folder exists: ${folder}`);
  }

  // Create files for this folder
  if (files[folder]) {
    files[folder].forEach(file => {
      const filePath = path.join(folderPath, file);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "", "utf8");
        console.log(`Created file: ${folder}/${file}`);
      } else {
        console.log(`File exists: ${folder}/${file}`);
      }
    });
  }
});

console.log("✅ Project structure created successfully!");
