import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import RegistroApostaReducer from '../apostas/registroApostasReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    apostas: RegistroApostaReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer