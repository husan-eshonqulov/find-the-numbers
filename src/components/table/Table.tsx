import TableRow from '../tableRow/TableRow';

function Table(props: any) {
    return (
        <div>
            {props.table.map((row: any) => <TableRow tableRow={row} />)}
        </div>
    );
}

export default Table;