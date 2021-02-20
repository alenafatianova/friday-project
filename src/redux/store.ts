import { PacksReducer } from './reducers/cards-pack-reducer';
import { appReducer } from './reducers/app-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { loginReducer} from "./reducers/login-reducer";
import {profileReducer} from "../redux/reducers/profile-reducer";
import { forgotPasswordReducer } from './reducers/forgot-password-reducer';
import {CardsReducer} from "./reducers/card-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    login:  loginReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    packs: PacksReducer,
    cards: CardsReducer
})
// непосредственно создаём store
export const store = createStore(
    rootReducer, 
    composeWithDevTools( applyMiddleware(thunkMiddleware))
   )

export type AppRootStateType = ReturnType<typeof rootReducer>
