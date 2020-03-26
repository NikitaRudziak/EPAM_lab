import { cardStore } from "../store/cardStore";

export const cardReducer = (state = cardStore, action) => {
  switch (action.type) {
    case 'APICALL': {
      return {
        ...state,
        cards: action.data
      };
    }
    case 'FORM_CHANGE': {
      return {
        ...state,
        form: {
          title: action.title,
          imageUrl: action.imageUrl,
          res: action.res,
          price: action.price
        }
      }
    }
    case 'ADD_CARD': {
      return {
        ...state,
        cards: [...state.cards, action.formData]
      };
    }
    case 'DEL_ELEM': {
      return {
        ...state,
        cards: [...state.cards.filter(item => item.id !== action.id)]
      }
    }
    default:
      return state;
  }
};
