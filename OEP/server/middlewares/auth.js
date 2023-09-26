const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

exports.requireSignin = (req, res, next) => {
    try {
        const decoded = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (user.role !== 1) {
            return res.status(401).send("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
    }
};

exports.google = {
    ensureAuth: (req, res, next) => {},
    ensureGuest: (req, res, next) => {},
};

exports.ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/");
    }
    // ensureAuth의 기능 구현
};

exports.ensureGuest = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/log");
    }
    // ensureGuest의 기능 구현
};
