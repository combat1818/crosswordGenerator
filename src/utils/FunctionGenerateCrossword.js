function generateCrossword(matrix, start, beginnings, dictionary, output, top) {
  //delete current beginning from beginnings array TUTAJ PROBLEM

  if (output.length > top) return output;
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
  //if (output.length % 1000 == 0) console.log("Robie");
  beginnings.splice(splitIndex, 1);
  //dictionary.sort(() => 0.5 - Math.random());
  //shuffle(dictionary);

  if (start.o == "pion") {
    //slowo od (pi,pj) do (ki,kj), pionowo, length=ki-pi+1
    for (let i = 0; i < dictionary.length; i++) {
      //first test- if word has the necessary length
      if (dictionary[i].length == start.ki - start.pi + 1) {
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

        if (suitable) {
          // Copy word to the matrix
          for (let j = 0; j < dictionary[i].length; j++) {
            let ind = Number(start.pi) + Number(j);
            matrix[ind][start.pj] = dictionary[i][j];
          }

          if (beginnings.length == 0) {
            let array = [];
            for (let j = 0; j < matrix.length; j++) {
              array.push(Array.from(matrix[j]));
            }
            output.push(array);
            top++;
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
                output,
                top
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
        let originalColumn = [];
        for (let l = start.pj; l < start.kj + 1; l++)
          originalColumn.push(matrix[start.pi][l]);
        let suitable = true;
        for (let j = 0; j < dictionary[i].length; j++) {
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

        if (suitable) {
          for (let j = 0; j < dictionary[i].length; j++) {
            let ind = Number(start.pj) + Number(j);
            matrix[Number(start.pi)][ind] = dictionary[i][j];
          }

          if (beginnings.length == 0) {
            let array = [];
            for (let j = 0; j < matrix.length; j++) {
              array.push(Array.from(matrix[j]));
            }
            output.push(array);
            top++;
          }
          // call function for new beginnings
          for (let j = 0; j < beginnings.length; j++) {
            if (true) {
              generateCrossword(
                matrix,
                beginnings[j],
                Array.from(beginnings),
                dictionary,
                output,
                top
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
