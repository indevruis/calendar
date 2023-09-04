import { connectDB } from "/util/database";

const handleToday = async (req, res) => {
  if (req.method === "GET") {
    try {
      const calendar = (await connectDB).db("calendar");
      const user = await calendar
        .collection("todos")
        .findOne({ date: req.query.date });

      res.status(302).send(user);
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  }
};

export default handleToday;
