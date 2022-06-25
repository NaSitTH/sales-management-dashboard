import React from "react";

import {
  SaleSummary,
  Volume,
  TopProduct,
  MonthToDate,
} from "../components/card";

const DashboardPage = () => {
  return (
    <div className="selection:container grid grid-cols-3 gap-4 mt-2">
      <SaleSummary />
      <Volume />
      <TopProduct />
      <MonthToDate />
    </div>
  );
};

export default DashboardPage;
