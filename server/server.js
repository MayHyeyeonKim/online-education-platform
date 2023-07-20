const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/User");
const credentials = require("./credentials.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const { connectionString } = credentials;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "youngleehanDB",
  })
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");
  })
  .catch((error) => {
    console.error("MongoDB 연결 오류:", error);
  });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "templates/index.html"));
}); //루트 경로('/')에 대한 GET 요청을 처리하는 핸들러 함수

app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      // 사용자를 찾지 못한 경우, 로그인 실패로 응답합니다.
      return res.send("로그인 실패: 사용자가 존재하지 않습니다.");
    }

    if (user.password === password) {
      return res.send("로그인 성공");
    }

    return res.send("로그인 실패: 비밀번호가 일치하지 않습니다.");
  } catch (error) {
    console.error("로그인 오류:", error);
    res.status(500).send("로그인 중 오류가 발생했습니다.");
  }
});

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // 필드 유효성 검사
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send("모든 필드를 입력해주세요.");
    }

    // 사용자 정보를 생성하여 MongoDB에 저장
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const result = await newUser.save();
    console.log(result);
    return res.send("사용자 등록이 성공적으로 완료되었습니다.");
    console.log(result);
  } catch (error) {
    console.error("사용자 등록 오류:", error);
    res.status(500).send("사용자 등록 중 오류가 발생했습니다.");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
