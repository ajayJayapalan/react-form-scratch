import { useState } from "react";

const useInput = (validator) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const inputIsValid = validator(inputValue)
  const inputIsInValid = !inputIsValid && isInputTouched;

  const inputHandler = (event) => {
    setInputValue(event.target.value)
  };
  const onBlurInputHandler = ()=>{
    setIsInputTouched(true)
  }

  const reset = () => {
    setInputValue("");
    setIsInputTouched(false);
  }

  return {
    inputValue,
    inputIsValid,
    inputIsInValid,
    inputHandler,
    onBlurInputHandler,
    reset,
  }
};

export default useInput;
