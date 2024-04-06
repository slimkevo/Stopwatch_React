import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from './actions';

// Initial state for the stopwatch
const initialState = {
  running: false,
  elapsedTime: 0,
};

// Reducer function for the stopwatch
const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        running: true,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        running: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        elapsedTime: 0,
      };
    default:
      return state;
  }
};

export default stopwatchReducer;