import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;

    /* Funciones */
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);