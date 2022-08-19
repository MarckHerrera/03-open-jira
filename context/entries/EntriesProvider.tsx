import React, { FC, PropsWithChildren, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { entriesReducer, EntriesContext } from './';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Llelelelelelelelelelelellelelelellelel.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: Llololololololololololollolololollolol.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Llalalalalalalalalalalallalalalallalal.',
            status: 'finished',
            createdAt: Date.now() - 20000,
        },
    ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = (description: string) => {

        const newEntry: Entry={
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({type: '[Entry] Add-Entry', payload: newEntry})
    }

  return (
    <EntriesContext.Provider value={{
        ...state,

        // Metodos
        addNewEntry,
    }}>
        {children}
    </EntriesContext.Provider>
  )
};