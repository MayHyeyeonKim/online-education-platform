const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

function configurePassport(passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                // Google에서 사용자 데이터 가져오기
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    images: (profile && profile.photos[0].value) || "",
                    email: (profile && profile.emails[0].value) || "",
                    password: "",
                    verified: true,
                };

                try {
                    // 데이터베이스에서 사용자 찾기
                    const user = await User.findOne({
                        googleId: profile.id,
                    });

                    if (user) {
                        done(null, user);
                    } else {
                        // 데이터베이스에 사용자 데이터 저장
                        const createdUser = await User.create(newUser);
                        done(null, createdUser);
                    }
                } catch (err) {
                    done(err, null);
                }
            }
        )
    );

    // 세션에서 사용자 직렬화
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // 세션에서 사용자 역직렬화
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);

            if (!user) {
                done(new Error("User not found"), null);
            } else {
                done(null, user);
            }
        } catch (err) {
            done(err, null);
        }
    });
}

module.exports = configurePassport;
