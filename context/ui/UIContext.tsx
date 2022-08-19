import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDraggin: boolean;

    /* Funciones */
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAddingEntry: boolean) => void
    startDragging: () => void
    endDragging: () => void
}

export const UIContext = createContext({} as ContextProps);