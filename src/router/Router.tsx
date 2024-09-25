import { Route, Routes, Navigate } from "react-router-dom";
import { Landing, NotFound, Survey } from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" replace />} />
      <Route path="landing" element={<Landing />} />
      <Route path="survey" element={<Survey />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
