import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    console.log("✅ Koneksi ke database berhasil!");
    await conn.end();
  } catch (err) {
    console.error("❌ Gagal konek ke database:", err.message);
  }
})();
