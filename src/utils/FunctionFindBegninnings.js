function findBeginnings(matrix) {
  let beginings = [];
  //find beginings of words
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] != 0) {
        //pionowy poczatek
        if (i == 0) {
          //console.log("tutej");
          let k = i; // do iteracji po kolumnie
          let isFull = true;
          while (k < matrix.length && matrix[k][j] != 0) {
            if (matrix[k][j] == 1) {
              isFull = false;
            }
            k++;
          }
          if (!isFull) {
            if (!(i == k - 1))
              beginings.push({
                pi: i,
                pj: j,
                ki: k - 1,
                kj: j,
                o: "pion",
              });
          }
        } else if (matrix[i - 1][j] == 0) {
          let k = i; // do iteracji po kolumnie
          let isFull = true;
          while (k < matrix.length && matrix[k][j] != 0) {
            if (matrix[k][j] == 1) {
              isFull = false;
            }
            k++;
          }
          if (!isFull) {
            if (k - 1 != i) {
              beginings.push({
                pi: i,
                pj: j,
                ki: k - 1,
                kj: j,
                o: "pion",
              });
            }
          }
        }

        //poziomy poczatek

        if (j == 0) {
          //console.log("Tutaj");
          let k = j; // do iteracji po wierszu
          let isFull = true;
          while (k < matrix[i].length && matrix[i][k] != 0) {
            if (matrix[i][k] == 1) {
              isFull = false;
            }
            k++;
          }
          if (!isFull) {
            if (!(j == k - 1))
              beginings.push({
                pi: i,
                pj: j,
                ki: i,
                kj: k - 1,
                o: "poz",
              });
          }
        } else if (matrix[i][j - 1] == 0) {
          let k = j; // do iteracji po wierszu
          let isFull = true;
          while (k < matrix[i].length && matrix[i][k] != 0) {
            if (matrix[i][k] == 1) {
              isFull = false;
            }
            k++;
          }
          if (!isFull) {
            if (k - 1 != j) {
              beginings.push({
                pi: i,
                pj: j,
                ki: i,
                kj: k - 1,
                o: "poz",
              });
            }
          }
        }
      }
    }
  }
  for (let k = 0; k < beginings.length; k++) {
    beginings[k].pi = Number(beginings[k].pi);
    beginings[k].pj = Number(beginings[k].pj);
    beginings[k].ki = Number(beginings[k].ki);
    beginings[k].kj = Number(beginings[k].kj);
  }
  return beginings;
}

export default findBeginnings;
