import { Routes, Route } from "react-router-dom";
import { Cards } from "../Components/Cards";
import { Aquatics } from "./Aquatics";
import { Armoury } from "./Armoury";
import { Cycling } from "./Cycling";
import { Equestrain } from "./Equestrain";
import { Extreme } from "./Extreme";
import { Featured } from "./Featured";
import { Golf } from "./Golf";
import { Gymnastics } from "./Gymnastics";
import { LakeSea } from "./LakeSea";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cycling />} />
      {/* <Route path="/:id" element={<Cards />} /> */}
      <Route path="/aquatics" element={<Aquatics />} />
      <Route path="/armoury" element={<Armoury />} />
      <Route path="/equestrain" element={<Equestrain />} />
      <Route path="/extreme" element={<Extreme />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/golf" element={<Golf />} />
      <Route path="/gymnastics" element={<Gymnastics />} />
      <Route path="lakeSea" element={<LakeSea />} />
    </Routes>
  );
};
