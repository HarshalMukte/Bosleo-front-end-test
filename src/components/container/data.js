import TrendingIcon from "./TrendingIcon";

//chart data ( line graph data)
export const chartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      data: [250, 290, 320, 250, 300, 310, 480, 520, 350, 510, 450],
      backgroundColor: "rgba(166, 179, 240, 0.3)",
      borderColor: "#4755A8",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      tension: 0.3,
      fill: true,
      label: "Watch Time",
    },
  ],
};

export const chartOptions = {
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: "Month",
      },
      ticks: {
        color: "#6A6A6A",
      },
    },
    y: {
      min: 0,
      max: 1000,
      ticks: {
        stepSize: 250,
        color: "#6A6A6A",
        callback: (value) =>
          value === 1000 ? "1M" : value === 0 ? value : value + "K",
      },
      border: {
        display: false,
      },
      title: {
        display: true,
        text: "Watch time",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

//for table 1 ( Movies Properties table data )
export const moviesPropertiesTableColumns = [
  {
    name: "Category",
    selector: (row) =>
      row.category?.map((btnData, index) => (
        <button className="tableButton" key={index}>
          {btnData}
        </button>
      )),
  },
  {
    name: "Streams",
    selector: (row) => row.streams,
  },
  {
    name: "Watchlists",
    selector: (row) => row.watchlists,
  },
  {
    name: "Owner",
    selector: (row) => row.owner,
  },
  {
    name: "Release Date",
    selector: (row) => row.releaseDate,
  },
];

export const moviesPropertiesTableData = [
  {
    category: ["Action", "Thriller"],
    streams: "24,512,232",
    watchlists: "389,234",
    owner: "Sony Entertainment",
    releaseDate: "21th May, 2022",
  },
];

//for table 2( Interest Tracking Insights data )

export const interestTrackingColumns = [
    {
    name: "People Reached",
    selector: (row) => row.peopleReached,
},
  {
    name: "Content Interactions",
    selector: (row) => row.contentInteractions,
},
{
    name: "Impressions",
    selector: (row) => row.impressions,
},
{
    name: "Shares",
    selector: (row) => row.shares,
},
{
    name: "Likes",
    selector: (row) => row.likes,
},
];

export const interestTrackingData = [
    {
        peopleReached: "39,823,154",
        contentInteractions: "76,923,304",
        impressions: "101,783,945",
        shares: "14,895",
        likes: "34,056,147",
    },
];

//for table 3( Collections of all movies table data )

export const collectionsColumns = [
    {
      name: "Name",
      selector: (row, i) => (
        <div className="movieName">
          <img src={`./images/${i}.png`} alt="image" /> {row.name}
        </div>
      ),
    },
    {
      name: "Category",
      selector: (row) =>
      row.category?.map((btnData, index) => (
        <button className="tableButton" key={index}>
            {btnData}
          </button>
        )),
      },
      {
        name: "Popularity/Interest",
        selector: (row) => row.popularity && <TrendingIcon />,
      },
      {
        name: "Watchlists",
        selector: (row) => row.watchlists,
    },
    {
      name: "Streams",
      selector: (row) => row.streams,
    },
    {
      name: "Release Date",
      selector: (row) => row.releaseData,
    },
    {
      name: "",
      cell: () => <button className="viewBtn">View</button>,
    },
  ];

  export  const collectionsData = [
    {
      name: "Avengers Black Widow",
      category: ["action", "blockbuster"],
      popularity: true,
      watchlists: "590,972,542",
      streams: "21,452",
      releaseData: "21th May, 2003",
    },
    {
      name: "After Hours",
      category: ["horror", "crime"],
      popularity: false,
      watchlists: "88,458,892",
      streams: "32,892",
      releaseData: "21th May, 2003",
    },
    {
      name: "Ant-man",
      category: ["horror", "crime"],
      popularity: false,
      watchlists: "22,008,901",
      streams: "345,321",
      releaseData: "21th May, 2003",
    },
    {
      name: "Captain Marvel",
      category: ["action", "fantasy"],
      popularity: false,
      watchlists: "80,961",
      streams: "903",
      releaseData: "21th May, 2003",
    },
    {
      name: "Grimsby",
      category: ["comedy", "crime"],
      popularity: true,
      watchlists: "670,901",
      streams: "2,453",
      releaseData: "21th May, 2003",
    },
    {
      name: "Moonlight",
      category: ["true story"],
      popularity: true,
      watchlists: "56,893",
      streams: "24,512,232",
      releaseData: "4th July, 2012",
    },
  ];