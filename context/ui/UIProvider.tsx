import React, { FC, PropsWithChildren, useReducer } from 'react'
import { uiReducer, UIContext } from './';
export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

export const UIProvider:FC<PropsWithChildren> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI - Close Sidebar'});
    }

  return (
    <UIContext.Provider value={{
        sidemenuOpen: state.sidemenuOpen,
        /* ...state */

        /* Funciones */
        openSideMenu,
        closeSideMenu
    }}>
        {children}
    </UIContext.Provider>
  )
};