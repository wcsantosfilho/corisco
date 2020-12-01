const INITIAL_STATE = {list: []}

export default function registroApostasReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REGISTRO_APOSTA_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}