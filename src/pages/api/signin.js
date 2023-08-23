import { connectDB } from "/util/database";
import bcrypt from "bcrypt";

const handleSignUp = async (req, res) => {
  if (req.method === "POST") {
    try {
      const inputData = JSON.parse(req.body);
      const calendar = (await connectDB).db("calendar");
      const user = await calendar.collection("user").findOne({ userId: inputData.signInUserId });

      if (!user) {
        res.status(401).send("Invalid user id");
      }

      const isPasswordCorrect = await bcrypt.compare(inputData.signInUserPwd, user.userPwd);
      if (isPasswordCorrect) {
        res.status(302).send("success");
      } else {
        res.status(401).send("Invalid user password");
      }
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  }
};

export default handleSignUp;
