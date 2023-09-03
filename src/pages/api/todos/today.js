import { connectDB } from "/util/database";

const handleToday = async (req, res) => {
  if (req.method === "POST") {
    try {
      const inputData = JSON.parse(req.body);
      inputData.type = "today"
      const calendar = (await connectDB).db("calendar");
      const user = await calendar.collection("todos").insertOne(inputData);

      res.status(302).send("success")
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  }
};

export default handleToday;
