const intiaState = {
    age : 21
  }

  const reducer = (state = intiaState , action) =>{

    const newState = {...state}
    if(action.type ===  'AGE_UP'){
      newState.age ++;
    }
    if(action.type ===  'AGE_DOWN'){
      newState.age --;
    }


    return newState

  }

  export default reducer;