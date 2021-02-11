import { appReducer } from './app-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { loginReducer} from "./login-reducer";
import {profileReducer} from "./profile-reducer";
import { forgotPasswordReducer } from './reducers/forgot-password-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    login:  loginReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
