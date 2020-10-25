import { GET_PRODUCT } from "./type"

const initialState = {
  products: [],
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.products,
      }
    default: return state
  }
}
