import { combineReducers } from 'redux';
import cardOneReducer from '../../card1/store/reducers/card1-reducer';
const cardReducer = combineReducers({
	cardOneReducer
});

export default cardReducer;