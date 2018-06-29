const INITIAL_STATE = {
  locale: 'en-US'
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'LOCALE_CHANGED':
          return { ...state, locale: action.payload }
      default: 
          return state
  }
}