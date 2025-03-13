import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입이 완료되었습니다.");
      navigate("/signin");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <AuthForm mode="signup" onSubmit={handleSignup} />
      <p className="text-[#242424] font-semibold text-lg mt-4">
        이미 계정이 있으신가요?
        <Link
          to="/signin"
          className="text-red-400 hover:text-red-500 transition duration-300"
        >
          {" "}
          로그인
        </Link>
      </p>
    </div>
  );
};

export default Signup;
