function Time(props: any) {
    const leftMin = Math.floor(props.leftTime / 60);
    let leftSec: number | string = props.leftTime - leftMin * 60;

    if (leftSec < 10){
        leftSec = '0' + leftSec;
    }

    return (
        <div className="d-flex">
            <div>0{leftMin}</div>
            <div>:</div>
            <div>{leftSec}</div>
        </div>
    );
}

export default Time;