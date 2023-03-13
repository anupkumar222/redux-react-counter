import { connect } from "react-redux";
import {
    incrememt,
    decrememt,
    reset
} from "../store/action";
import Steps from "./Steps";

function App(props) {
    return <>
    <h1>{props.count}</h1>
    <button onClick={() =>  props.dispatch(incrememt())}>Increment</button>
    <button onClick={() =>  props.dispatch(decrememt())}>Decrement</button>
    <button onClick={() =>  props.dispatch(reset())}>Reset</button>
    <div>
        <Steps />
    </div>
    </>
}

function getCount(state) {
    return {
        count: state.value
    }
}

export default connect(getCount)(App);