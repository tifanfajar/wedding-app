export const CHANGE_SELECT_CATEGORY = '[SELECT CATEGORY] CHANGE CATEGORY'
export const CHANGE_FORM = '[FORM ADD] CHANGE FORM CATEGORY'
export function changeCategory (data) {
   return {
     type: CHANGE_SELECT_CATEGORY,
     payload: data
   }
}

export function changeForm (data) {
   return {
     type: CHANGE_FORM,
     payload: data
   }
}