import React from "react";
import Table from "./Table";
import {interestTrackingColumns, interestTrackingData } from "./data"

const Section3 = () => {
  
  return (
    <div className="section2">
      <div className="tableTitle">
        <div className="title">
          <h3>Interest Tracking Insights</h3>
          <p>Keep track of the insights on this movie</p>
        </div>
      </div>
      <Table columns={interestTrackingColumns} data={interestTrackingData} />
    </div>
  );
};

export default Section3;
