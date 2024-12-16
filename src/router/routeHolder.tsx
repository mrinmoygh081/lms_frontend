import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalCss from "../modules/global/css";
import { Hourglass } from "react-loader-spinner";
import SignIn from "../modules/authentication/components/SignIn";
import SignUp from "../modules/authentication/components/SignUp";
import Course from "../modules/learners/home/components/Course";
import CourseDetails from "../modules/learners/home/components/CourseDetails";
import ForgetPassword from "../modules/authentication/components/ForgetPassword";
import Layout from "../modules/global/components/Layout";
import Contact from "../modules/learners/home/components/Contact";
import PageNoteFound from "../modules/global/components/PageNoteFound";
const Home = lazy(() =>
  import("../modules/learners/home/components/index").catch((err) => {
    console.error("Error loading Home component:", err);
    return { default: () => <div>Error loading page</div> };
  })
);

interface AllRoutesProps {
  isAdmin: boolean;
}

const AllRoutes: React.FC<AllRoutesProps> = ({ isAdmin }) => {
  return (
    <Suspense
      fallback={
        <div className="fallback_wrapper">
          <Hourglass
            visible={true}
            height="30"
            width="30"
            ariaLabel="hourglass-loading"
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      }
    >
      <Routes>
        {isAdmin ? (
          <>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home/>}/>
              <Route path="course" element={<Course />} />
              <Route path="course-details" element={<CourseDetails />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<PageNoteFound/>} />
          </>
        ) : (
          <>
            <Route path="*" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

const RouteHolder = () => {
  const [isAuthChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthChecked(true);
    }, 1000);
  }, []);

  if (!isAuthChecked) {
    return (
      <div className="loading_wrapper">
        <Hourglass
          visible={true}
          height="50"
          width="50"
          ariaLabel="hourglass-loading"
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  const isAdmin = true;

  return (
    <>
      <GlobalCss />
      <Router>
        <AllRoutes isAdmin={isAdmin} />
      </Router>
    </>
  );
};

export default RouteHolder;
