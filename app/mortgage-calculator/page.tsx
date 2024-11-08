import MonthlyBreakdown from "@/components/MonthlyBreakdown";
import MortgageCalculator from "@/components/MortgageCalculator";
import React from "react";

function page() {
  return (
    <div>
      <MortgageCalculator />
      <MonthlyBreakdown />
    </div>
  );
}

export default page;
