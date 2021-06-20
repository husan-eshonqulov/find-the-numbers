function TableElement(props: any) {
  if (props.statusElement === true) {
    return (
      <div className="d-inline-block p-1 m-1 bg-info">{props.tableElement}</div>
    );
  } else {
    return (
      <div
        className="d-inline-block p-1 m-1"
        onClick={() => props.handleClick(props.indexRow, props.indexCol)}
      >
        {props.tableElement}
        {props.statusElement}
      </div>
    );
  }
}

export default TableElement;
