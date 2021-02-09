import { appReducer } from './reducers/app-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { forgotPasswordReducer } from './reducers/forgot-password-reducer';
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    app: appReducer,
    forgotPassword: forgotPasswordReducer,
})
export type appStateType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

