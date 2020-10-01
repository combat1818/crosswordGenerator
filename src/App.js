import React, { useState } from "react";
import "./App.css";
import { useWorker } from "@koale/useworker";

//import components
import Row from "./components/Row";
import ConfirmButton from "./components/ConfirmButton";

//import util functions
import findBeginnings from "./utils/FunctionFindBegninnings";
import generateCrosswords from "./utils/FunctionGenerateCrossword";
import Dictionary from "./utils/Dictionary";
let possibilities;
let index;

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

  const [generatorWorker] = useWorker(generateCrosswords);

  const startGenerating = async (matrix, start, beginnings, dictionary) => {
    setAppState("Loading. Please Wait");
    //console.log("Start.");
    const result = await generatorWorker(
      matrix,
      start,
      beginnings,
      dictionary,
      []
    ); // non-blocking UI
    //console.log("End.");
    possibilities = result;
    //console.log(possibilities);
    index = 0;
    //console.log(possibilities[0]);
    if (possibilities.length > 0) {
      setAppState("Show next layout");
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

  const handleGeneratingStart = () => {
    let beginnings = findBeginnings(matrix);
    let dictionary = Dictionary;
    startGenerating(matrix, beginnings[0], beginnings, dictionary);
  };

  return (
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
        <ConfirmButton
          handleButtonClick={handleNextLayout.bind(this)}
          text={appState}
        />
      </div>
    </div>
  );
}

export default App;
