import Time from "../time/Time";

function ShowRecord(props: any) {
  const records = props.records;
  const score = props.score;
  const record = Math.min(...records);

  if (records.length === 0) {
    return (
      <div>
        Score: <Time timer={score} />
      </div>
    );
  } else {
    if (score < record) {
      return (
        <div>
          <div>
            New Record: <Time timer={score} />
          </div>
          <div>
            Prev Record: <Time timer={record} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            Score: <Time timer={score} />
          </div>
          <div>
            Record: <Time timer={record} />
          </div>
        </div>
      );
    }
  }
}

export default ShowRecord;
