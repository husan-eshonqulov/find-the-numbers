import TableElement from '../tableElement/TableElement';

function TableRow(props: any) {
    return (
        <div>
            {props.tableRow.map((tableElement: any) => <TableElement tableElement={tableElement} />)}
        </div>
    );
}

export default TableRow;