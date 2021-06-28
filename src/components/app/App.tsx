import './App.css';
import { useState, useEffect } from "react";
import Time from "../time/Time";
import FindTheNum from "../findTheNum/FindTheNum";
import LeftNumber from "../leftNum/LeftNum";
import Table from "../table/Table";
import ShowRecord from "../showRecord/ShowRecord";
import PlayAgain from "../playAgain/PlayAgain";

let TIMERID: any;

function App() {
  const [timer, setTimer] = useState(0);
  const [theNum, setTheNum] = useState(Math.floor(Math.random() * 10));
  const [leftNum, setLeftNum] = useState(10);
  const [indices, setIndices] = useState(createIndices(10));
  const [statusElements, setStatusElements] = useState(
    new Array(10).fill(new Array(10).fill(false))
  );
  const [table, setTable] = useState(
    createTable(createMatrix(theNum, 10), indices, theNum)
  );
  const [status, setStatus] = useState(true);
  const [records, setRecords] = useState<number[]>([]);

  useEffect(() => {
    if (status) {
      TIMERID = setInterval(() => setTimer((prev) => prev + 1), 10);
    }
    return () => clearInterval(TIMERID);
  }, [status]);

  useEffect(() => {
    if (leftNum === 0) {
      setStatus(false);
    }
  }, [leftNum]);

  const handleElementClick = (indexRow: any, indexCol: any) => {
    setStatusElements((prev: any): any => {
      return prev.map((row: any, indexR: any) => {
        return row.map((el: any, indexC: any) => {
          if (
            indexRow === indexR &&
            indexCol === indexC &&
            !el &&
            table[indexRow][indexCol] === theNum
          ) {
            setLeftNum((prev) => prev - 1);
            return true;
          } else {
            if (el) {
              return true;
            } else {
              return false;
            }
          }
        });
      });
    });
  };

  const handlePlayAgain = () => {
    setTimer(0);
    const thenum = Math.floor(Math.random() * 10);
    setTheNum(thenum);
    setIndices(createIndices(10));
    setStatusElements(new Array(10).fill(new Array(10).fill(false)));
    setTable(createTable(createMatrix(thenum, 10), indices, thenum));
    setLeftNum(10);
    setStatus(true);
    setRecords((prev) => [...prev, timer]);
  };

  if (status) {
    return (
      <div className="container text-center">
        <div className="height-100 d-flex flex-column justify-content-center">
          <div className="mb-3 timer">
            <Time timer={timer} />
          </div>
          <div className="font-weight-bold size-18">
            <FindTheNum theNum={theNum} />
          </div>
          <div>
            <Table
              table={table}
              statusElements={statusElements}
              handleClick={handleElementClick}
            />
          </div>
          <div className="font-weight-bold size-18">
            <LeftNumber leftNum={leftNum} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <div className="height-100 d-flex flex-column justify-content-center">
          <div className="game-over">Game Over</div>
          <div className="my-3 size-22">
            <ShowRecord records={records} score={timer} />
          </div>
          <div>
            <PlayAgain handlePlayAgain={handlePlayAgain} />
          </div>
        </div>
      </div>
    );
  }
}

function createTable(matrix: any, indices: any, theNum: any) {
  indices.forEach((indice: any) => {
    matrix[indice[0]][indice[1]] = theNum;
  });

  return matrix;
}

function createMatrix(theNum: any, size: any) {
  let matrix = new Array(size).fill(new Array(size).fill(0));
  matrix = matrix.map((row) => {
    return row.map(() => {
      let randNum;
      do {
        randNum = Math.floor(Math.random() * 10);
      } while (randNum === theNum);

      return randNum;
    });
  });

  return matrix;
}

function createIndices(quantityIndices: any) {
  let indices: any = [];
  let indice;
  for (let i = 0; i < quantityIndices; i++) {
    do {
      const indiceX = Math.floor(Math.random() * 10);
      const indiceY = Math.floor(Math.random() * 10);
      indice = [indiceX, indiceY];
    } while (includesIndice(indices, indice));

    indices.push(indice);
  }

  return indices;
}

function includesIndice(indices: any, position: any) {
  let check;
  check = indices.map((indice: any) => {
    return indice[0] === position[0] && indice[1] === position[1]
      ? true
      : false;
  });

  return check.some(isTrue) ? true : false;

  function isTrue(value: any) {
    return value === true;
  }
}

export default App;
