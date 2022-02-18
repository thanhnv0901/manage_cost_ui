import { useReducer } from "react";

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value };
    }

    return inputStateReducer;
};

const useInput = (initialInput) => {

    const [inputState, dispacth] = useReducer(inputStateReducer, { value: initialInput })

    const valueChangeHandler = (event) => {
        dispacth({ type: "INPUT", value: event.target.value });
    }

    const setCurrentValueHandler = (currentValue) => {
        dispacth({ type: "INPUT", value: currentValue })
    }


    return {
        value: inputState.value,
        setCurrentValueHandler,
        valueChangeHandler
    }
}

export default useInput;