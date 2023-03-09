import { Route, Routes } from "react-router-dom";
export default function RoutingSection() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
