import TableElement from "../tableElement/TableElement";

function TableRow(props: any) {
  return (
    <div>
      {props.tableRow.map((tableElement: any, indexCol: any) => (
        <TableElement
          tableElement={tableElement}
          indexRow={props.indexRow}
          indexCol={indexCol}
          statusElement={props.statusRowElements[indexCol]}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
}

export default TableRow;
