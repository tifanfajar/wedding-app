export const CHANGE_LIST_ACTION = '[List Template] Change List Template'

export function changeListTemplate (data) {
   return {
      type: CHANGE_LIST_ACTION,
      payload: data
   }
}