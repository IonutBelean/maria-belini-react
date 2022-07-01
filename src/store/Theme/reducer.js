export const initiialState = {
  theme: "light",
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIGHT_THEME": {
      return {
        theme: "light",
      };
    }
    case "SET_DARK_THEME": {
      return {
        theme: "dark",
      };
    }
    default:
      return state;
  }
};
