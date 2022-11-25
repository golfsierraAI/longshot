import React from "react";
import jsonData from "../../assets/data.json";
import { intentMap, keywordDifficulty } from "../../helpers/helpers";
import { DragDrop } from "../drag-n-drop";
import "./index.css";
import { Table } from "../table/index";
const Home = () => {
  const [data, setData] = React.useState([]);
  const [activeRow, setActiveRow] = React.useState([]);
  const dragItem = React.useRef();
  const dragOverItem = React.useRef();
  const [tableData, setTableData] = React.useState({});
  const [defaultView, setDefaultView] = React.useState("raw_broadmatch_data");

  const prepareTableData = React.useCallback(() => {
    const tempData = {};
    tempData.headers = [
      "Keyword",
      "Search Volume",
      "Intent",
      "CPC",
      "Competition",
      "Number of Results",
      "Keyword Difficulty",
    ];
    tempData.data = [];
    jsonData[defaultView].forEach((item) => {
      const tempItem = [...item];
      tempItem[5] = Number(tempItem[5]) / 10000000 + " M";
      tempItem.splice(6, 1);
      tempData.data.push(tempItem);
    });
    setTableData(tempData);
  }, [defaultView]);

  React.useEffect(() => {
    setData(jsonData);
    setActiveRow(jsonData[defaultView][0]);
    prepareTableData();
  }, [defaultView, prepareTableData]);

  const dragStart = (event, position) => {
    dragItem.current = position;
  };

  const dragEnter = (event, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...tableData.data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTableData((prev) => {
      let temp = { ...prev };
      temp.data = copyListItems;
      return temp;
    });
  };
  return (
    data &&
    activeRow && (
      <div className="home-root">
        <div className="home-root-upper-div">
          <div className="volume-card">
            <p className="heading">Volume</p>
            <p className="info">{activeRow[1]}</p>
            <hr />
            <p className="heading">Keyword Difficulty</p>
            <p className="info">{activeRow[7]}%</p>
            <p className="heading">{keywordDifficulty(activeRow[7]).rating}</p>
            <p>{keywordDifficulty(activeRow[7]).text}</p>
          </div>
          <div className="home-root-upper-right-div">
            <div>
              {intentMap[activeRow[2]] && (
                <>
                  <p className="heading">Intent</p>
                  <p
                    className="intent"
                    style={{
                      backgroundColor: intentMap[activeRow[2]].color.bg,
                      color: intentMap[activeRow[2]].color.text,
                    }}
                  >
                    {intentMap[activeRow[2]].type}
                  </p>
                </>
              )}
            </div>
            <div>
              <p className="heading">Results</p>
              <p className="info">{activeRow[5] / 10000000 + "M"}</p>
            </div>
            <div className="cpcDiv">
              <span>
                <p className="heading">CPC</p>
                <p className="info">{activeRow[4]}</p>
              </span>
              <span>
                <p className="heading">Com.</p>
                <p className="info">{activeRow[3]}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="buttonsWrapper">
          <button
            style={{
              backgroundColor:
                defaultView === "raw_broadmatch_data" ? "#87CEEB" : null,
            }}
            onClick={() => {
              setDefaultView("raw_broadmatch_data");
            }}
          >
            Broad Match
          </button>
          <button
            style={{
              backgroundColor:
                defaultView === "raw_related_data" ? "#87CEEB" : null,
            }}
            onClick={() => setDefaultView("raw_related_data")}
          >
            Related
          </button>
          <button
            style={{
              backgroundColor:
                defaultView === "raw_question_data" ? "#87CEEB" : null,
            }}
            onClick={() => setDefaultView("raw_question_data")}
          >
            Questions
          </button>
        </div>
        <div className="home-bottom-div">
          {tableData.headers && (
            <>
              <Table headers={tableData.headers} data={tableData.data} />
            </>
          )}
        </div>
        {tableData.headers && (
          <DragDrop
            drop={drop}
            dragEnter={dragEnter}
            dragStart={dragStart}
            data={tableData.data}
          />
        )}
      </div>
    )
  );
};

export default Home;
