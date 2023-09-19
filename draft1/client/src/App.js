import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/auth";

// 각 페이지 컴포넌트 import
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import MyPage from "./components/MyPage";
import ContactPage from "./components/ContactPage";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

import BasicTabs from "./BasicTabs";
import SignIn from "./Login";
import SignUp from "./Register";

// 네비게이션 컴포넌트
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/course">Course</Link>
        </li>
        <li>
          <Link to="/mypage">My Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li> */}
      </ul>
    </nav>
  );
};

// App 컴포넌트
const App = () => {
  // const isLoggedIn = false; // 로그인 여부를 상태로 관리
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <div>
        {/* {isLoggedIn ? <BasicTabs /> : <LoginPage />} */}
        {/* {isLoggedIn ? <BasicTabs /> : <LoginPage />} */}
        <BasicTabs />
        {/* <Navigation /> */}
        <Routes>
          {/* {isLoggedIn ? <BasicTabs /> : <LoginPage />} */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
