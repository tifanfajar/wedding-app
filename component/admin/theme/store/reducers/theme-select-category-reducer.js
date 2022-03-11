import * as Actions from '../actions'

const initialState = {
  value: ''
}

const ThemeSelectCategoryReducer = (state = initialState, action) => {
   switch (action.type) {
     case Actions.CHANGE_SELECT_CATEGORY: {
        return action.payload
       }
      default:{
       return {...state}
      }
   }
}

export default ThemeSelectCategoryReducer