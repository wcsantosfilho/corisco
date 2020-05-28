const INITIAL_STATE = { currentBet: { _id: "5ecad662f0945c6d64e6cd42", betDate: "2019-01-01T22:35:00.000Z", initialRound: 1001, finalRound: 1010}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CURRENT_BET_FETCHED':
            var a = { _id: "5ecad662f0945c6d64e6cd42", betDate: "2019-01-01T22:35:00.000Z", initialRound: 2002, finalRound: 2020}
            //return { ...state, currentBet: a }
            return { ...state, currentBet: action.payload.data}
        default:
            return state
    }
} 