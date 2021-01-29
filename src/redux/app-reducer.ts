import React from 'react'

export const initialAppState = {
    app: [
        
    ] 
}
export type initialAppStateType = {
    app: string[]
}

export const appReducer = (state: initialAppStateType = initialAppState, action: any) => {
    switch(action.type) {
        default: 
            return state;
    }
}
