require("dotenv").config();
const nodemailer = require("nodemailer");

const contactUS = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const mailOptions = {
            from: "your_email@gmail.com",
            to: "hkim7963@gmail.com",
            subject: "Contact Us Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.send("이메일 전송 중 오류가 발생했습니다.");
            } else {
                console.log(
                    "이메일이 성공적으로 전송되었습니다:",
                    info.response
                );
                res.send("이메일이 성공적으로 전송되었습니다.");
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "hkim7963@gmail.com",
        pass: process.env.PASSWORD,
    },
});

module.exports = {
    contactUS,
    transporter,
};
