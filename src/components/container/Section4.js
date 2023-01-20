import React, { useEffect, useState } from "react";
import Table from "./Table";
import { collectionsColumns, collectionsData}  from "./data"


const Section4 = () => {
  //for filtering data based on search query
const [data, setData] = useState(collectionsData) 
const [inputData, setInputData] = useState("")

useEffect(() => {
  // console.log(data);
  const filteredData = collectionsData.filter(ele => ele.name.toLocaleLowerCase().match(inputData.toLocaleLowerCase()))
  setData(filteredData)
}, [inputData])

return (
    <div className="section4">
      <div className="moviesButtons">
        <button className="allMovies active">
          All Movies <span className="indicator"></span>
        </button>
        <button className="trending">
          Trending<span className="indicator"></span>
        </button>
        <button className="upcoming Premier">
          Upcoming Premier<span className="indicator"></span>
        </button>
      </div>
      <div className="tableTitle">
        <div className="title">
          <h3>Collection of all movies</h3>
          <p>Keep track of all the movies on moviebox</p>
        </div>
        <div className="searchBtn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3477 14.1524L12.4859 11.2906C13.4102 10.1111 13.9105 8.65477 13.9063 7.15626C13.9063 5.82123 13.5104 4.51619 12.7687 3.40615C12.027 2.29612 10.9728 1.43096 9.73937 0.920066C8.50597 0.409175 7.14877 0.275502 5.8394 0.535952C4.53002 0.796403 3.32729 1.43928 2.38328 2.38328C1.43928 3.32729 0.796403 4.53002 0.535952 5.8394C0.275502 7.14877 0.409175 8.50597 0.920066 9.73937C1.43096 10.9728 2.29612 12.027 3.40615 12.7687C4.51619 13.5104 5.82123 13.9063 7.15625 13.9063C8.65477 13.9105 10.1111 13.4102 11.2906 12.4859L14.1523 15.3477C14.3116 15.5048 14.5263 15.5929 14.75 15.5929C14.9737 15.5929 15.1884 15.5048 15.3477 15.3477C15.4263 15.2693 15.4887 15.1761 15.5313 15.0736C15.5739 14.971 15.5958 14.8611 15.5958 14.75C15.5958 14.639 15.5739 14.529 15.5313 14.4264C15.4887 14.3239 15.4263 14.2307 15.3477 14.1524ZM2.09375 7.15626C2.09375 6.15499 2.39066 5.1762 2.94694 4.34368C3.50321 3.51116 4.29387 2.86228 5.21892 2.47911C6.14397 2.09594 7.16187 1.99569 8.1439 2.19103C9.12593 2.38637 10.028 2.86852 10.736 3.57653C11.444 4.28453 11.9261 5.18658 12.1215 6.16861C12.3168 7.15064 12.2166 8.16854 11.8334 9.09359C11.4502 10.0186 10.8014 10.8093 9.96883 11.3656C9.1363 11.9218 8.15752 12.2188 7.15625 12.2188C5.81417 12.2169 4.52758 11.6829 3.57858 10.7339C2.62958 9.78493 2.09561 8.49834 2.09375 7.15626Z"
              fill="black"
            />
          </svg>
          <input type="text" name="searchMovies" onChange={(e) => setInputData(e.target.value)} placeholder="Search" />
        </div>
      </div>
      <Table columns={collectionsColumns} data={data} />
    </div>
  );
};

export default Section4;
