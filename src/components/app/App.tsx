import { useState, useEffect } from 'react';
import Menu from '../menu/Menu';
import FindTheNum from '../findTheNum/FindTheNum';
import LeftNumber from '../leftNum/LeftNum';
import Table from '../table/Table';

function App() {
    const [leftTime, setLeftTime] = useState(119);
    const [theNum, setTheNum] = useState(Math.floor(Math.random() * 10));
    const [leftNum, setLeftNum] = useState(10);
    const [indices, setIndices] = useState(createIndices(10));
    const [table, setTable] = useState(createTable(createMatrix(theNum, 10), indices, theNum));
    const [status, setStatus] = useState(true);

    
    console.log(theNum);
    console.log(table);
    // console.log(table[1][0]);
    console.log(indices);

    useEffect(() => {
        const intervalId = setInterval(() => setLeftTime((prev) => prev - 1), 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Menu leftTime={leftTime} />
            <FindTheNum theNum={theNum} />
            <Table table={table} />
            <LeftNumber leftNum={leftNum} />
            {indices}
            {status}
        </div>
    );
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
            } while(randNum === theNum);

            return randNum;
        });
    });

    return matrix;
}

function createIndices(quantityIndices: any) {
    let indices: any = [];
    let indice;
    for (let i = 0; i < quantityIndices; i++){
        do {
            const indiceX = Math.floor(Math.random() * 10);
            const indiceY = Math.floor(Math.random() * 10);
            indice = [indiceX, indiceY];
        } while(includesIndice(indices, indice));

        indices.push(indice);
    }

    return indices;
}

function includesIndice(indices: any, position: any) {
    let check;
    check = indices.map((indice: any) => {
        return (indice[0] === position[0] && indice[1] === position[1]) ? true : false;
    });
    
    return (check.some(isTrue)) ? true : false;

    function isTrue(value: any) {
        return value === true;
    }
}

export default App;