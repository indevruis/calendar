import { connectDB } from "/util/database";
import bcrypt from "bcrypt";

const handleSignUp = async (req, res) => {
  const { userName, userId, userPwd } = JSON.parse(req.body);
  const hash = await bcrypt.hash(userPwd, 10);
  const data = { userName, userId, userPwd: hash };
  
  if (req.method === "POST") {
    try {
      const calendar = (await connectDB).db("calendar");
      const user = await calendar.collection("user").insertOne(data);

      res.status(302).send("전송완료");
    } catch (err) {
      console.log(err.stack);
    }
  }
};

export default handleSignUp;
