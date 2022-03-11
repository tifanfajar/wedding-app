import { combineReducers } from 'redux';
import cardReducer from '../../card/store/reducers/cardReducer';
import listTemplateReducer from '../../list-template/store/reducers/listTemplateReducer';
import AdminReducers from '../../admin/store/reducers/index';
const rootReducer = combineReducers({
	cardReducer,
 listTemplateReducer,
 AdminReducers
});

export default rootReducer;