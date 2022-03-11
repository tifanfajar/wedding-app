import * as Action from '../actions'

const initialState = {
   listData: [
      {
         title: '',
         image: '/images/couple2.jpg'
      }
   ]
}

const listTemplateReducer = (state=initialState, action) => {
   switch (action.type) {
      case Action.CHANGE_LIST_ACTION: {
         return action.payload
      }
      default: {
        return {...state}
      }
   }
}

export default listTemplateReducer