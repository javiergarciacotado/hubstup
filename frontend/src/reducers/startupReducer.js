export default function startupReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_STARTUP':
      /*
      state.push(action.startup);
      return state;
      */
      return [...state, //ES6 spread operator
        Object.assign({}, action.startup)
      ];
    default:
      return state;

  }
}
