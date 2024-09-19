import { React } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "./layout/mainLayout/mainLayout";
import Home from "./pages/home/home";
import Video from "./pages/video/video";
import { AnimatePresence, motion } from "framer-motion";
import NotFount from "./layout/notFount";
import UserLayout from "./pages/userPanel/userLayout";
import UserHome from "./pages/userPanel/components/userHome";
import UserCources from "./pages/userPanel/components/userCources";
import UserCertificates from "./pages/userPanel/components/userCertificates";
import UserSettings from "./pages/userPanel/components/userSettings";
import UserPayment from "./pages/userPanel/components/userPayment";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <PageWithAnimation>
                  <Home />
                </PageWithAnimation>
              }
            />
            <Route
              path="/video"
              element={
                <PageWithAnimation>
                  <Video />
                </PageWithAnimation>
              }
            />
          </Route>
          <Route path="/userLayout" element={<UserLayout />}>
            <Route index element={<UserHome />} />
            <Route path="userCources" element={<UserCources />} />
            <Route path="userCertificates" element={<UserCertificates />} />
            <Route path="userPayment" element={<UserPayment />} />
            <Route path="userSettings" element={<UserSettings />} />
          </Route>
          <Route path="*" element={<NotFount />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const PageWithAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
