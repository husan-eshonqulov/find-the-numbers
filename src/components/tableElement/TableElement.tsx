import './TableElement.css';

function TableElement(props: any) {
  if (props.statusElement === true) {
    return (
      <button className="btn d-inline-block p-1 m-1 bg-secondary text-white btn-box-shadow">{props.tableElement}</button>
    );
  } else {
    return (
      <button
        className="btn d-inline-block p-1 m-1 btn-box-shadow"
        onClick={() => props.handleClick(props.indexRow, props.indexCol)}
      >
        {props.tableElement}
        {props.statusElement}
      </button>
    );
  }
}

export default TableElement;
