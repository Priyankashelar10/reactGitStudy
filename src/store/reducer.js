const intiaState = {
    age : 21,
    history : []
  }

  const reducer = (state = intiaState , action) =>{

    const newState = {...state}
    if(action.type ===  'AGE_UP'){
      newState.age ++;
      newState.history = newState.history.concat({id : Math.random(), value : newState.age })
    }
    if(action.type ===  'AGE_DOWN'){
      newState.age --;
      newState.history = newState.history.concat({id : Math.random(), value : newState.age })
    }

    if(action.type === 'DeleteItem'){
      newState.history = newState.history.filter(el => el.id !== action.key)
    }
 

    return newState

  }

  export default reducer;

  