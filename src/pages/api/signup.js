import { connectDB } from "/util/database";
import bcrypt from "bcrypt";

const handleSignUp = async (req, res) => {
  const data = JSON.parse(req.body);
  const hash = await bcrypt.hash(data.userPwd, 10);
  data.userPwd = hash;
  if (req.method === "POST") {
    try {
      const calendar = (await connectDB).db("calendar");
      const user = calendar.collection("user").insertOne(data);

      res.status(302).send("전송완료");
    } catch (err) {
      console.log(err.stack);
    }
  }
};

export default handleSignUp;
