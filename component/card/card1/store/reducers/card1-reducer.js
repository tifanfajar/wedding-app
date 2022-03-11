import * as Action from '../actions'

const initialState = {
   title: '',
   image: '/images/couple1.jpg',
}

const cardOneReducer = function (state = initialState, action) {
   switch (action.type) {
      case Action.CHANGE_DATA_CARD: {
       return action.payload
      }
      default: {return {...state}}
   }
}

export default cardOneReducer