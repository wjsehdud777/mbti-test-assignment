import React from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData);
      const userData = await getUserProfile(data.accessToken);
      setUser({ ...userData, token: data.accessToken });
      navigate("/profile");
    } catch (error) {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <AuthForm mode="login" onSubmit={handleLogin} />
      <p className="text-[#242424] font-semibold text-lg mt-4">
        계정이 없으신가요?{" "}
        <Link
          className="text-red-400 hover:text-red-500 transition duration-300"
          to="/signup"
        >
          {" "}
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default Login;
