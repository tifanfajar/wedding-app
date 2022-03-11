export const CHANGE_DATA_CARD = '[CARD 1] CHANGE DATA'

export function cardActions (data) {
   return {
      type: CHANGE_DATA_CARD,
      payload: data
   }
}