import React, { FC, PropsWithChildren, useReducer } from 'react'
import { uiReducer, UIContext } from './';
export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDraggin: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDraggin: false
}

export const UIProvider:FC<PropsWithChildren> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI - Close Sidebar'});
    }
    
    const setIsAddingEntry = (isAddingEntry: boolean) => {
        dispatch({type: 'UI - Set adding entry', payload: isAddingEntry})
    }

    const startDragging = () => {
        dispatch({type: 'UI - Start Dragging'})
    }

    const endDragging = () => {
        dispatch({type: 'UI - End Dragging'})
    }


  return (
    <UIContext.Provider value={{
        /* sidemenuOpen: state.sidemenuOpen, */
        ...state,

        /* Funciones */
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        endDragging
    }}>
        {children}
    </UIContext.Provider>
  )
};