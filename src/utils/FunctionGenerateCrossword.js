import dictionary from "./Dictionary";

/*
function createArray(matrix, start, beginnings, dictionary) {
  output = [];
  //generateCrossword(matrix, start, beginnings, dictionary);
  generateCrossword(matrix, start, beginnings, dictionary);
  return output;
}*/

function generateCrossword(matrix, start, beginnings, dictionary, output) {
  //delete current beginning from beginnings array TUTAJ PROBLEM
  //console.log("start generating");
  //console.log("tutaj");
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

  //console.log(matrix);
  //console.log("\n\n");
  //console.log(start.o + "\n");
  //console.log(beginnings);

  if (start.o == "pion") {
    //slowo od (pi,pj) do (ki,kj), pionowo, length=ki-pi+1
    for (let i = 0; i < dictionary.length; i++) {
      //first test- if word has the necessary length
      if (dictionary[i].length == start.ki - start.pi + 1) {
        //console.log(dictionary[i]);
        // preserve the original state of matrix
        let originalColumn = [];
        for (let l = start.pi; l < start.ki + 1; l++)
          originalColumn.push(matrix[l][start.pj]);
        let suitable = true;
        for (let j = 0; j < dictionary[i].length; j++) {
          if (
            Number(start.pi) + Number(j) < 11 &&
            matrix[Number(start.pi) + Number(j)][Number(start.pj)] != "1" &&
            matrix[Number(start.pi) + Number(j)][Number(start.pj)] !=
              dictionary[i][j]
          ) {
            suitable = false;
          }
        }
        //console.log(dictionary[i]);
        //console.log(suitable);
        if (suitable) {
          //console.log(dictionary[i]);
          // Copy word to the matrix
          for (let j = 0; j < dictionary[i].length; j++) {
            let ind = Number(start.pi) + Number(j);
            matrix[ind][start.pj] = dictionary[i][j];
            //console.log(matrix[ind][start.pj]);
          }
          //console.log(matrix[ind][start.pj]);
          //console.log("\n\n");

          //console.log("beginings w pionowo:");
          //console.log(beginnings);
          //console.log(beginnings.length);

          if (beginnings.length == 0) {
            //console.log(matrix);
            //console.log("\n\n");
            //if (numberOfMatches < matchesLimit) writeOutput(matrix);
            //numberOfMatches++;
            //console.log(matrix);
            //return;
            //for (let i = 0; i < matrix.length; i++)
            //  for (let j = 0; j < matrix.length; j++) console.log(matrix[i][j]);
            let array = [];
            for (let j = 0; j < matrix.length; j++) {
              array.push(Array.from(matrix[j]));
            }
            output.push(array);
          }
          // call function for new beginnings
          for (let j = 0; j < beginnings.length; j++) {
            if (true) {
              //console.log("should go");
              generateCrossword(
                matrix,
                beginnings[j],
                Array.from(beginnings),
                dictionary,
                output
              );
            }
          }

          // matrix to it's pre matching state
          for (let j = 0; j < originalColumn.length; j++) {
            if (Number(start.pi) + Number(j) < 11)
              matrix[Number(start.pi) + Number(j)][Number(start.pj)] =
                originalColumn[j];
          }
        }
      }
    }
  } else if (start.o == "poz") {
    //slowo od (pi,pj) do (ki,kj), poziomo, length=kj-pj+1
    for (let i = 0; i < dictionary.length; i++) {
      //first test- if word has the necessary length
      if (dictionary[i].length == start.kj - start.pj + 1) {
        //console.log(dictionary[i]);
        // preserve the original state of matrix
        let originalColumn = [];
        for (let l = start.pj; l < start.kj + 1; l++)
          originalColumn.push(matrix[start.pi][l]);
        //console.log(originalColumn);
        let suitable = true;
        for (let j = 0; j < dictionary[i].length; j++) {
          //console.log(matrix[start.pi][start.pj + j]);
          //console.log(j);
          if (
            //matrix[start.pi][start.pj + j] == dictionary[i][j] ||
            Number(start.pj) + Number(j) < 13 &&
            matrix[Number(start.pi)][Number(start.pj) + Number(j)] != "1" &&
            matrix[Number(start.pi)][Number(start.pj) + Number(j)] !=
              dictionary[i][j]
          ) {
            suitable = false;
          }
        }

        //console.log(matrix);
        //console.log(suitable);
        if (suitable) {
          //console.log("suitableE" + dictionary[i]);
          // Copy word to the matrix
          //console.log(suitable);
          for (let j = 0; j < dictionary[i].length; j++) {
            let ind = Number(start.pj) + Number(j);
            //console.log(ind);
            matrix[Number(start.pi)][ind] = dictionary[i][j];
            //console.log(matrix[Number(start.pi)][ind]);
            //console.log(ind);
            //console.log(start.pi + "  " + start.pj + j + "  \n");
          }
          //console.log(matrix);
          //console.log(matrix);
          //console.log(matrix);
          //delete current beginning from beginnings array

          //console.log("beginnings w poziomo: ");
          //console.log(beginnings);

          if (beginnings.length == 0) {
            //console.log(matrix);
            //if (numberOfMatches < matchesLimit) writeOutput(matrix);
            //numberOfMatches++;
            //return;
            //console.log(matrix);
            //console.log("\n\n");
            //for (let i = 0; i < matrix.length; i++)
            //  for (let j = 0; j < matrix.length; j++) console.log(matrix[i][j]);
            let array = [];
            for (let j = 0; j < matrix.length; j++) {
              array.push(Array.from(matrix[j]));
            }
            output.push(array);
          }
          // call function for new beginnings
          for (let j = 0; j < beginnings.length; j++) {
            if (true) {
              generateCrossword(
                matrix,
                beginnings[j],
                Array.from(beginnings),
                dictionary,
                output
              );
            }
          }

          // matrix to it's pre matching state
          for (let j = 0; j < originalColumn.length; j++) {
            matrix[Number(start.pi)][Number(start.pj) + Number(j)] =
              originalColumn[j];
          }
        }
      }
    }
  }
  return output;
}

export default generateCrossword;
