import React from "react";
import "../App.css";

function Row(props) {
  const handleLeftClick = (e) => {
    //console.log("left click");
    //console.log(e.target.name);
    //console.log("XD");
    //console.log(e.target.classList);
    //e.target.style.backgroundColor = "black";

    props.sendNotification({
      value: 1,
      rowNumber: Number(props.rowNumber),
      columnNumber: Number(e.target.name),
      type: "activate",
    });
    //if(props.data[props.rowNumber][e.target.id]==0)
    //console.log(props.data);
  };

  const ref0 = React.createRef();
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  const ref4 = React.createRef();
  const ref5 = React.createRef();
  const ref6 = React.createRef();
  const ref7 = React.createRef();
  const ref8 = React.createRef();
  const ref9 = React.createRef();
  const ref10 = React.createRef();
  const ref11 = React.createRef();
  const ref12 = React.createRef();

  const refArray = [];
  refArray.push(
    ref0,
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9,
    ref10,
    ref11,
    ref12
  );

  const handleRightClick = (e) => {
    e.preventDefault();
    //console.log("right click");
    //console.log(e.target);
    e.target.value = "";
    refArray[Number(e.target.name)].current.blur();
    props.sendNotification({
      value: 0,
      rowNumber: Number(props.rowNumber),
      columnNumber: Number(e.target.name),
      type: "deactivate",
    });
  };

  const handleInputChange = (e) => {
    //console.log("input changed");

    let value = e.target.value;
    if (value === "") value = 0;
    let type = value ? "activate" : "deactivate";

    //if (value === 0) refArray[Number(e.target.name)].current.blur();

    props.sendNotification({
      value: value,
      rowNumber: Number(props.rowNumber),
      columnNumber: Number(e.target.name),
      type: type,
    });
  };

  //console.log(props.data[Number(props.rowNumber)][1]);
  //console.log(props.rowNumber);
  //console.log(props.data[props.rowNumber][0]);
  //console.log(props.data);
  return (
    <div className="row">
      <div>
        <input
          name={0}
          className={
            props.data[props.rowNumber][0] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          onBlur={() => {
            console.log("blurred");
          }}
          ref={ref0}
          value={
            props.data[Number(props.rowNumber)][0] == 0
              ? ""
              : props.data[Number(props.rowNumber)][0] == 1
              ? ""
              : props.data[Number(props.rowNumber)][0]
          }
        ></input>
      </div>
      <div>
        <input
          name={1}
          className={
            props.data[props.rowNumber][1] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref1}
          value={
            props.data[Number(props.rowNumber)][1] == 0
              ? ""
              : props.data[Number(props.rowNumber)][1] == 1
              ? ""
              : props.data[Number(props.rowNumber)][1]
          }
        ></input>
      </div>
      <div>
        <input
          name={2}
          className={
            props.data[props.rowNumber][2] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref2}
          value={
            props.data[Number(props.rowNumber)][2] == 0
              ? ""
              : props.data[Number(props.rowNumber)][2] == 1
              ? ""
              : props.data[Number(props.rowNumber)][2]
          }
        ></input>
      </div>
      <div>
        <input
          name={3}
          className={
            props.data[props.rowNumber][3] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref3}
          value={
            props.data[Number(props.rowNumber)][3] == 0
              ? ""
              : props.data[Number(props.rowNumber)][3] == 1
              ? ""
              : props.data[Number(props.rowNumber)][3]
          }
        ></input>
      </div>
      <div>
        <input
          name={4}
          className={
            props.data[props.rowNumber][4] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref4}
          value={
            props.data[Number(props.rowNumber)][4] == 0
              ? ""
              : props.data[Number(props.rowNumber)][4] == 1
              ? ""
              : props.data[Number(props.rowNumber)][4]
          }
        ></input>
      </div>
      <div>
        <input
          name={5}
          className={
            props.data[props.rowNumber][5] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref5}
          value={
            props.data[Number(props.rowNumber)][5] == 0
              ? ""
              : props.data[Number(props.rowNumber)][5] == 1
              ? ""
              : props.data[Number(props.rowNumber)][5]
          }
        ></input>
      </div>
      <div>
        <input
          name={6}
          className={
            props.data[props.rowNumber][6] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref6}
          value={
            props.data[Number(props.rowNumber)][6] == 0
              ? ""
              : props.data[Number(props.rowNumber)][6] == 1
              ? ""
              : props.data[Number(props.rowNumber)][6]
          }
        ></input>
      </div>
      <div>
        <input
          name={7}
          className={
            props.data[props.rowNumber][7] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref7}
          value={
            props.data[Number(props.rowNumber)][7] == 0
              ? ""
              : props.data[Number(props.rowNumber)][7] == 1
              ? ""
              : props.data[Number(props.rowNumber)][7]
          }
        ></input>
      </div>
      <div>
        <input
          name={8}
          className={
            props.data[props.rowNumber][8] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref8}
          value={
            props.data[Number(props.rowNumber)][8] == 0
              ? ""
              : props.data[Number(props.rowNumber)][8] == 1
              ? ""
              : props.data[Number(props.rowNumber)][8]
          }
        ></input>
      </div>
      <div>
        <input
          name={9}
          className={
            props.data[props.rowNumber][9] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref9}
          value={
            props.data[Number(props.rowNumber)][9] == 0
              ? ""
              : props.data[Number(props.rowNumber)][9] == 1
              ? ""
              : props.data[Number(props.rowNumber)][9]
          }
        ></input>
      </div>
      <div>
        <input
          name={10}
          className={
            props.data[props.rowNumber][10] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref10}
          value={
            props.data[Number(props.rowNumber)][10] == 0
              ? ""
              : props.data[Number(props.rowNumber)][10] == 1
              ? ""
              : props.data[Number(props.rowNumber)][10]
          }
        ></input>
      </div>
      <div>
        <input
          name={11}
          className={
            props.data[props.rowNumber][11] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref11}
          value={
            props.data[Number(props.rowNumber)][11] == 0
              ? ""
              : props.data[Number(props.rowNumber)][11] == 1
              ? ""
              : props.data[Number(props.rowNumber)][11]
          }
        ></input>
      </div>
      <div>
        <input
          name={12}
          className={
            props.data[props.rowNumber][12] === 0
              ? "inputInactive"
              : "inputActive"
          }
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          onChange={handleInputChange}
          maxLength={1}
          ref={ref12}
          value={
            props.data[Number(props.rowNumber)][12] == 0
              ? ""
              : props.data[Number(props.rowNumber)][12] == 1
              ? ""
              : props.data[Number(props.rowNumber)][12]
          }
        ></input>
      </div>
    </div>
  );
}

/*

<div
        id={0}
        className={props.data[props.rowNumber][0] === 0 ? "cell" : "cell1"}
        onClick={handleLeftClick}
        //onDoubleClick={handleDoubleClick}
        onContextMenu={handleRightClick}
      >
        <input
          id={props.rowNumber + "a"}
          type="text"
          className={"input"}
          maxLength={1}
          onClick={handleInputLeftClick}
          onChange={handleInputChange}
          onContextMenu={handleRightClick}
        ></input>
      </div>
      */

export default Row;
