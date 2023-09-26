const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const configurePassport = require("./controllers/auth");
const path = require("path");

//custom routes
const authRoutes = require("./routes/auth");

//로드
dotenv.config();

//미들웨어
app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: "shiba-lover",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/auth", authRoutes);

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

configurePassport(passport);

// 루트 경로에 대한 요청 핸들러
app.get("/", (req, res) => {
    res.render("login");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/mypage", (req, res) => {
    res.render("mypage");
});

// 서버 시작
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
