import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

console.log("DB CONFIG:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
});

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectTimeout: 20000,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à la base :", err.message);
    return;
  }

  console.log("✅ Connecté à MySQL !");
});