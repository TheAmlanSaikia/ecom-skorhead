const ReducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "CATEGORY_FILTER":
      return {
        ...state,
        categories: {
          ...state["categories"],
          [payload]: !state["categories"][payload],
        },
      };
    case "BRAND_FILTER": {
      return {
        ...state,
        brands: { ...state["brands"], [payload]: !state["brands"][payload] },
      };
    }
    case "ALL_CLEAR": {
      return {
        sortBy: "",
        categories: {
          ChuckTaylor: false,
          BasketBall: false,
          Running: false,
          SlipOn: false,
          Authentic: false,
        },
        brands: {
          Nike: false,
          Converse: false,
          Vans: false,
          Adidas: false,
        },
      };
    }

    case "ADD_CATEGORIES":{
      return {
         ...state,
         categories: {...state["categories"], [payload]: true}
      }
    }

    case "ADD_CATEGORIES_FROM_HOME":{
      return{
        ...state,
        categories: {[payload]: true }
      }
    }

    default:
        throw new Error("Action type not found.");
  }
};

export { ReducerFunction };
