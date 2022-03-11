import * as Actions from '../actions'

const initialState = [
  {label: 'Theme Name', value: '', key: 'themename', type: 'input'},
  {label: 'Description', value: '', key: 'description', type: 'input' },
  {label: 'Slug', value: '', key: 'slug', type: 'input' },
  {label: 'Category', value: '', key: 'category', type: 'select', list: [] },
  {label: 'Male Bank', value: '', key: 'male_bank', type: 'select', list: [] },
  {label: 'Male Rekening', value: '', key: 'male_rek', type: 'input', list: [] },
  {label: 'Female Bank', value: '', key: 'female_bank', type: 'select', list: [] },
  {label: 'Female Rekening', value: '', key: 'female_rek', type: 'input', list: [] },
  {label: 'Evant Date', value: new Date(), key: 'event_date', type: 'datetime' },
  {label: 'none', value: 'none', key: 'none', type: 'none' },
  {label: 'Show Rek', value: false, key: 'rek', type: 'check' },
  {label: 'Play Music', value: false, key: 'musik', type: 'check' },
  {label: 'Longitude', value: '', key: 'longitude', type: 'input', isDisabled: true },
  {label: 'Latitude', value: '', key: 'latitude', type: 'input', isDisabled: true },
]

const AddThemeFormReducer = (state = initialState, action) => {
   switch (action.type) {
      case Actions.CHANGE_FORM: {
         return action.payload
      }
      default: {
        return state
      }
   }
}

export default AddThemeFormReducer