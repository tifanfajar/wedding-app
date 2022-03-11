import { combineReducers } from 'redux';
import ThemeSelectCategoryReducer from './theme-select-category-reducer';
import AddThemeFormReducer from './add-theme-form-reducer';
const ThemeReducer = combineReducers({
	ThemeSelectCategoryReducer,
 AddThemeFormReducer
});

export default ThemeReducer;