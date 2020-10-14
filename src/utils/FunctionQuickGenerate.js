import dictionary from "./Dictionary";
import generateCrossword from "./FunctionGenerateCrossword";
// cos tu nie dziala TODO
function quickGenerate(matrix, start, beginnings, map, output, top) {
  if (output.length > top) return output;
  //console.log(start);
  let splitIndex;
  for (let j = 0; j < beginnings.length; j++) {
    if (
      beginnings[j].pi == start.pi &&
      beginnings[j].pj == start.pj &&
      beginnings[j].ki == start.ki &&
      beginnings[j].kj == start.kj
    ) {
      splitIndex = j;
      break;
    }
  }
  beginnings.splice(splitIndex, 1);
  //console.log("cutting");
  //console.log(beginnings);
  //console.log(beginnings.length);
  //console.log(beginnings);
  if (start.o == "pion") {
    let originalColumn = [];
    for (let l = start.pi; l < start.ki + 1; l++)
      originalColumn.push(matrix[l][start.pj]);

    let values;
    //console.log(map["1,1,1"]);
    //console.log(originalColumn);
    if (map[originalColumn] == null) {
      //console.log(originalColumn);
      return;
    } else {
      values = Object.values(map[originalColumn]);
    }

    values.forEach((value) => {
      //console.log("XD");
      //put word in matrix
      //console.log(value);
      for (let i = 0; i < value.length; i++) {
        matrix[Number(start.pi) + Number(i)][Number(start.pj)] = value[i];
        //console.log(value[i]);
      }
      //console.log(matrix);

      if (beginnings.length != 0) {
        //console.log("iminside");
        //console.log(beginnings);
        for (let j = 0; j < beginnings.length; j++) {
          //console.log("recurrent call");
          quickGenerate(
            matrix,
            beginnings[j],
            Array.from(beginnings),
            map,
            output,
            top
          );
        }
      } else {
        //save output
        let array = [];
        for (let j = 0; j < matrix.length; j++) {
          array.push(Array.from(matrix[j]));
        }
        output.push(array);
      }
    });
    // matrix to it's pre matching state
    for (let j = 0; j < originalColumn.length; j++) {
      if (Number(start.pi) + Number(j) < 11)
        matrix[Number(start.pi) + Number(j)][Number(start.pj)] =
          originalColumn[j];
    }
  } else if ((start.o = "poz")) {
    let originalColumn = [];
    for (let l = start.pj; l < start.kj + 1; l++)
      originalColumn.push(matrix[start.pi][l]);
    //console.log("i m here now");
    //console.log(map["1,1,1"]);
    //console.log(originalColumn);
    let values;
    if (map[originalColumn] == null) {
      //console.log(originalColumn);
      return;
    } else {
      values = Object.values(map[originalColumn]);
    }

    values.forEach((value) => {
      //console.log("XD");
      //put word in matrix

      for (let i = 0; i < value.length; i++) {
        matrix[start.pi][start.pj + i] = value[i];
      }

      if (beginnings.length != 0) {
        for (let j = 0; j < beginnings.length; j++) {
          quickGenerate(
            matrix,
            beginnings[j],
            Array.from(beginnings),
            map,
            output,
            top
          );
        }
      } else {
        //save output
        let array = [];
        for (let j = 0; j < matrix.length; j++) {
          array.push(Array.from(matrix[j]));
        }
        output.push(array);
      }
    });
    // matrix to it's pre matching state
    for (let j = 0; j < originalColumn.length; j++) {
      matrix[Number(start.pi)][Number(start.pj) + Number(j)] =
        originalColumn[j];
    }
  }

  return output;
}

export default quickGenerate;
