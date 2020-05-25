const INITIAL_STATE = {currentBet: {initialRound: "0000", finalRound: "0007"}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CURRENT_BET_FETCHED':
            console.log('dashboardReducer.js')
            console.log(action.payload.data)
            return { ...state, currentBet: action.payload.data}
        default:
            return state
    }
} 