const INITIAL_STATE = { selected: '' }

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED': 
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED': 
            return { ...state, visible: action.payload }
        default: 
            return state
    }
}
