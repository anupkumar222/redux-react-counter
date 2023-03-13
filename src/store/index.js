import { createStore } from "redux";
const initialValue = {
  value: 0,
  step: 5 
}

function counterReducer(state = initialValue, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, value: state.value + state.step }
      case 'decrement':
        return { ...state, value: state.value - state.step }
        case 'changeStep':
            return { ...state, step: action.payload }
        case 'reset':
            return { ...state,value: 0}
      default:
        return state
    }
  }


  let store = createStore(counterReducer);

  export default store;