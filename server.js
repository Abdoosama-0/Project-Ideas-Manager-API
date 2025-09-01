const express = require("express");
const bodyParser = require("body-parser");
const db = require("./init-db"); // اتصال قاعدة البيانات

const app = express();
app.use(bodyParser.json());


app.get("/api/ideas", (req, res) => {
  db.all("SELECT * FROM ideas", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: rows });
  });
});


app.get("/api/ideas/:id", (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM ideas WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!row) {
      return res.status(404).json({ message: "Idea not found" });
    }
    res.json({ message: "success", data: row });
  });
});


app.post("/api/ideas", (req, res) => {
  const { title, description, status } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const insert =
    "INSERT INTO ideas (title, description, status) VALUES (?,?,?)";
  db.run(insert, [title, description, status || "Concept"], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({
      message: "success",
      data: { id: this.lastID, title, description, status: status || "Concept" },
    });
  });
});


app.put("/api/ideas/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, status } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  db.run(
    `UPDATE ideas 
     SET title = COALESCE(?,title), 
         description = COALESCE(?,description), 
         status = COALESCE(?,status) 
     WHERE id = ?`,
    [title, description, status, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: "Idea not found" });
      }
      res.json({ message: "success", data: { id, title, description, status } });
    }
  );
});


app.delete("/api/ideas/:id", (req, res) => {
  const id = req.params.id;
  db.run("DELETE FROM ideas WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: "Idea not found" });
    }
    res.status(200).json({ message: "Idea deleted successfully" });
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
