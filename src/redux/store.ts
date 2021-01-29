import { appReducer } from './app-reducer';
import React from 'react'
import { createStore } from 'redux'


export const store = createStore(appReducer);

