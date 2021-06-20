import Time from '../time/Time';
import Pause from '../pause/Pause';

function Menu(props: any) {
    return (
        <div>
            <Time leftTime={props.leftTime} />
            {/* <Pause /> */}
        </div>
    );
}

export default Menu;