import Time from "../time/Time";

function ShowRecord(props: any) {
  const records = props.records;
  const score = props.score;
  const record = Math.min(...records);

  if (record === score) {
    if (records.length === 1) {
      return (
        <div>
          Score: <Time timer={score} />
        </div>
      );
    } else {
      let slicedRec = records.slice();
      const indexRec = slicedRec.indexOf(score);
      slicedRec.splice(indexRec, 1);
      const prevR = Math.min(...slicedRec);
      return (
        <div>
          <div>
            New Record: <Time timer={score} />
          </div>
          <div>
            Previous Record: <Time timer={prevR} />
          </div>
        </div>
      );
    }
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

export default ShowRecord;
