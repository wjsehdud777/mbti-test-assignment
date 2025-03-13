import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, isAuthenticated, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="flex items-center justify-between gap-5 px-5 h-[60px]">
        <Link to="/">홈</Link>
        <Link to="/">프로필</Link>
        <Link to="/">테스트</Link>
        <Link to="/">테스트 결과 목록</Link>
        <Link to="/">로그아웃</Link>
        <Link to="/">로그인</Link>
        <Link to="/">회원가입</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
