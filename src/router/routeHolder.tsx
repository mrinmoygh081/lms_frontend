import React, { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalCss from "../modules/global/css";
import { Hourglass } from "react-loader-spinner";
import SignIn from "../modules/authentication/components/SignIn";
import SignUp from "../modules/authentication/components/SignUp";
import Course from "../modules/learners/home/components/Course";
import CourseDetails from "../modules/learners/home/components/CourseDetails";
const Home = lazy(() => import("../modules/learners/home/components/index"));


interface AllRoutesProps {
  isAdmin: boolean;
}

const AllRoutes: React.FC<AllRoutesProps> = ({ isAdmin }) => {
  const locate = useLocation();

  return (
    <Suspense
      fallback={
        <div className="fallback_wrapper">
          <Hourglass
            visible={true}
            height="30"
            width="30"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      }
    >
      <Routes location={locate} key={locate.key}>
        {isAdmin ? (
          <>
            <Route index element={<Home />} />
            <Route path='/course' element={<Course />} />
            <Route path='/course-details' element={<CourseDetails />} />
          </>
        ) : (
          <>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

const RouteHolder = () => {
  const [isAuthChecked, setAuthChecked] = useState(true);

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
      <div>
        <Router>
          <AllRoutes isAdmin={isAdmin} />
        </Router>
      </div>
    </>
  );
};

export default RouteHolder;
