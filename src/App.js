import React, { useState } from "react";
import "./App.css";
import { useWorker } from "@koale/useworker";

//import components
import Row from "./components/Row";
import ConfirmButton from "./components/ConfirmButton";

import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

//import util functions
import findBeginnings from "./utils/FunctionFindBegninnings";
import generateCrosswords from "./utils/FunctionGenerateCrossword";
import Dictionary from "./utils/Dictionary";
import wordsMap from "./mapInJSON.json";
import quickGenerate from "./utils/FunctionQuickGenerate";
let possibilities;
let index;
let maxResult = 10000;

//TO DO: ALGORYTM GENERUJE TAKIE SAME HASLA!

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function App() {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [appState, setAppState] = useState("No options available");

  const [generatorWorker] = useWorker(quickGenerate);

  const startGenerating = async (
    matrix,
    start,
    beginnings,
    dictionary,
    top
  ) => {
    setAppState("Loading. Please Wait");
    //console.log("Start.");

    const result = await generatorWorker(
      matrix,
      start,
      beginnings,
      wordsMap,
      [],
      top
    ); // non-blocking UI
    //console.log("End.");*/
    //const result = quickGenerate(matrix, start, beginnings, wordsMap, [], top);
    possibilities = result;
    possibilities = shuffle(possibilities);
    //possibilities.sort(() => 0.5 - Math.random());
    //console.log(possibilities.length);
    //console.log(possibilities);
    //console.log(possibilities);
    index = 0;
    //console.log(possibilities[0]);
    if (possibilities.length > 0) {
      setAppState(index + 1 + "/" + possibilities.length);
      setMatrix(possibilities[0]);
    } else {
      setAppState("No options available");
    }
    //console.log(possibilities);
  };

  const handleMatrixUpdate = (e) => {
    //console.log(e);
    //mbe  useState(matrix)
    let newMatrix = Array.from(matrix);
    //console.log(newMatrix);
    if (e.type === "activate") {
      newMatrix[e.rowNumber][e.columnNumber] = e.value;
      setMatrix(newMatrix);
    } else if (e.type === "deactivate") {
      newMatrix[e.rowNumber][e.columnNumber] = 0;
      setMatrix(newMatrix);
    }
  };

  const handleNextLayout = (e) => {
    //setMatrix(possibilities[index]);
    if (possibilities == undefined) return;

    if (index < possibilities.length) {
      const newMatrix = possibilities[index];
      setMatrix(newMatrix);

      index++;
    } else {
      setAppState("End of options");
    }
    //console.log("trying?");
    //console.log(matrix);
  };

  const handleArrowClick = (e) => {
    //console.log("clicked");
    //console.log(wordsMap["1,1,1"]);
    if (possibilities == undefined) return;
    //console.log(e.currentTarget.id);
    //console.log(possibilities);
    //console.log(index);

    if (e.currentTarget.id == 21) {
      //console.log("left");

      if (index > 0) {
        index--;
        const newMatrix = possibilities[index];
        setMatrix(newMatrix);
        setAppState(index + 1 + "/" + possibilities.length);
      }
    } else if (e.currentTarget.id == 22) {
      //console.log("right");

      if (index + 1 < possibilities.length) {
        index++;
        const newMatrix = possibilities[index];
        setMatrix(newMatrix);
        setAppState(index + 1 + "/" + possibilities.length);
      }
    }
  };

  const handleGeneratingStart = () => {
    let beginnings = findBeginnings(matrix);
    let dictionary = Dictionary;
    //console.log(beginnings);

    if (beginnings.length < 1) {
      setAppState("Create layout!");
    } else {
      startGenerating(matrix, beginnings[0], beginnings, dictionary, maxResult);
    }
  };

  const handleMaxResultChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      maxResult = 10000;
    }
    maxResult = e.target.value;
    console.log(maxResult);
  };

  return (
    <div className="mainView">
      <div className="leftSide">
        <button id={21} onClick={handleArrowClick} className={"arrowButton"}>
          <HiArrowCircleLeft
            size={80}
            color={"#ff9a52"}
            className={"navigationArrow"}
          />
        </button>
      </div>
      <div className="container">
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={0}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={1}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={2}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={3}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={4}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={5}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={6}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={7}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={8}
          data={matrix}
        ></Row>
        <Row
          sendNotification={handleMatrixUpdate.bind(this)}
          rowNumber={9}
          data={matrix}
        ></Row>
        <div className={"controls"}>
          <ConfirmButton
            handleButtonClick={handleGeneratingStart.bind(this)}
            text="Generate crosswords"
          />
          <input
            type="number"
            placeholder="Results Max"
            className="maxInput"
            onChange={handleMaxResultChange}
          ></input>
          <ConfirmButton
            handleButtonClick={handleNextLayout.bind(this)}
            text={appState}
          />
        </div>
      </div>
      <div className="rightSide">
        <button id={22} onClick={handleArrowClick} className={"arrowButton"}>
          <HiArrowCircleRight
            size={80}
            color={"#ff9a52"}
            className={"rightNavigationArrow"}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
