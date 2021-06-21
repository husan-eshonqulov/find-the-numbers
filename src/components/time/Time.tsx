function Time(props: any) {
    let seconds: string | number = Math.floor(props.timer / 100);
    let mSeconds: string | number = props.timer % 100;

    seconds = (seconds < 10) ? '0' + seconds : seconds;
    mSeconds = (mSeconds < 10) ? '0' + mSeconds : mSeconds;

    return (
        <div className="d-inline-block">
            <div className="d-flex">
                <div>{seconds}</div>
                <div>:</div>
                <div>{mSeconds}</div>
            </div>
        </div>
    );
}

export default Time;