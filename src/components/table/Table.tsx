import TableRow from "../tableRow/TableRow";

function Table(props: any) {
  return (
    <div>
      {props.table.map((row: any, indexRow: any) => (
        <TableRow
          tableRow={row}
          indexRow={indexRow}
          statusRowElements={props.statusElements[indexRow]}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
}

export default Table;
