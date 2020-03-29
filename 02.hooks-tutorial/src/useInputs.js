import { useReducer } from 'react';

function reducer(state, action){
  return(
    ...state,
    [action.name]: action.value
  )
}

export default function useInputs(initalForm){
  const [state, dispatch] = useReducer(reducer, initalForm);
  const onChange = e => {
    dispatch(e.target);
  }
  return [state, onChange]
};
