import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Profile from "./pages/Profile";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn setUser={setUser} />} />
      <Route path="/profile" element={<Profile user={user} />} />
    </Routes>
  );
};

export default App;
