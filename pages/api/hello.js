import db from "../../utils/db"
export default function handler(req, res) {
  db.connectDb();
  db.disconnectDb();
  res.status(200).json({ name: 'John Doe' })
}
