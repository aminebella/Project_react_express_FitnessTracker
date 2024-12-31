const initialState = {
    showWorkoutForm: false,
  };
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "showWorkoutForm":
        return { ...state, showWorkoutForm: true };
      case "hideWorkoutForm":
        return { ...state, showWorkoutForm: false };
      default:
        return state;
    }
  };
  
  export default reducer;
  