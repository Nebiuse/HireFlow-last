import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JobPosts from "./pages/JobPosts";
import CreateJobPost from "./pages/CreateJobPost";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import "./index.css";
import { UserProvider } from "./context/UserContext";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically set the title based on the current route
    if (location.pathname === "/") {
      document.title = "HireFlow";
    } else if (location.pathname === "/signup") {
      document.title = "Sign Up | HireFlow";
    } else if (location.pathname === "/login") {
      document.title = "Sign In | HireFlow";
    } else if (location.pathname === "/jobposts") {
      document.title = "Job Posts | HireFlow";
    } else if (location.pathname === "/createjobpost") {
      document.title = "Create Job Post | HireFlow";
    } else if (location.pathname === "/apply") {
      document.title = "Apply Job for {company} | HireFlow";
    } else if (location.pathname === "/messages") {
      document.title = "Messaging | HireFlow";
    } else if (location.pathname === "/home") {
      document.title = "Home | HireFlow";
    } else if (location.pathname === "/settings") {
      document.title = "Settings | HireFlow";
    }
  }, [location]);

  return (
    <UserProvider>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Home Feed Page */}
        <Route path="/home" element={<Home />} />

        {/* Sign Up Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Sign In Page */}
        <Route path="/login" element={<Login />} />

        {/* Job Posts Page */}
        <Route path="/jobposts" element={<JobPosts />} />

        {/* Create Job Post Page */}
        <Route path="/createjobpost" element={<CreateJobPost />} />

        {/* Application Page */}
        <Route path="/apply" element={<Apply />} />

        {/* Messages Page */}
        <Route path="/messages" element={<Messages />} />

        {/* Settings Page */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
