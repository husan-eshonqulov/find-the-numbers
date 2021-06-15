import { useState, useEffect } from 'react';
import Menu from '../menu/Menu';
import FindTheNum from '../findTheNum/FindTheNum';
import LeftNumber from '../leftNum/LeftNum';
import Table from '../table/Table';

function App() {
    const [leftTime, setLeftTime] = useState(119);
    const [theNum, setTheNum] = useState(Math.floor(Math.random() * 10));
    const [leftNum, setLeftNum] = useState(10);

    let matrix = new Array(10).fill(new Array(10).fill(0));
    matrix = matrix.map((row) => {
        return row.map(() => {
            let randNum;
            do {
                randNum = Math.floor(Math.random() * 10);
            } while(randNum === theNum);

            return randNum;
        });
    });

    // console.log(matrix);
    const [table, setTable] = useState(matrix);
    const [status, setStatus] = useState(true);

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
        </div>
    );
}

export default App;