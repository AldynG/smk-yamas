require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const app = express()

app.use(cors())
app.use(express.json())

// Koneksi MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "smk_yamas"
})

db.connect(err => {
  if (err) {
    console.log("DB Error:", err)
  } else {
    console.log("MySQL Connected")
  }
})

// Endpoint simpan form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)"

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: "Gagal simpan" })
    }
    res.json({ message: "Data berhasil disimpan" })
  })
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})
