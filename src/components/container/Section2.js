import React from "react";
import Table from "./Table";
import { moviesPropertiesTableColumns, moviesPropertiesTableData } from "./data"
import TrendingIcon from "./TrendingIcon";

const Section2 = () => {
  //for table data

  


  return (
    <div className="section2">
      <div className="tableTitle">
        <div className="title">
          <h3>Movies Properties</h3>
          <p>A list of the details for this movie</p>
        </div>
        <TrendingIcon />
      </div>
      
      <Table columns={moviesPropertiesTableColumns} data={moviesPropertiesTableData}/>
    </div>
  );
};

export default Section2;
