import * as Actions from '../actions'

const initialState = [
  {label: 'Theme Name', value: '', key: 'themename', type: 'input'},
  {label: 'Description', value: '', key: 'description', type: 'input' },
  {label: 'Slug', value: '', key: 'slug', type: 'input' },
  {label: 'Category', value: '', key: 'category', type: 'select', list: [] },
  {label: 'Male Bank', value: '', key: 'male_bank', type: 'select', list: [{label: 'Mandiri', value: 'mandiri'}] },
  {label: 'Male Rekening', value: '', key: 'male_rek', type: 'input' },
  {label: 'Female Bank', value: '', key: 'female_bank', type: 'select', list: [{label: 'Mandiri', value: 'mandiri'}] },
  {label: 'Female Rekening', value: '', key: 'female_rek', type: 'input'},
  {label: 'Evant Date', value: new Date(), key: 'event_date', type: 'datetime' },
  {label: 'none', value: 'none', key: 'none', type: 'none' },
  {label: 'Show Rek', value: false, key: 'is_rek', type: 'check' },
  {label: 'Play Music', value: false, key: 'is_music', type: 'check' },
  {label: 'Longitude', value: '106.824774', key: 'longitude', type: 'input', isDisabled: true },
  {label: 'Latitude', value: '-6.188604', key: 'latitude', type: 'input', isDisabled: true },
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