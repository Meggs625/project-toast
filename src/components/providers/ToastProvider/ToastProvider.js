import React from 'react';
import useEscapeKey from '../../../hooks/useEscapeKey';

export const ToastProviderContext = React.createContext();

export default function ToastProvider({ children }) {
    const [toastList, setToastList] = React.useState([]);

    useEscapeKey(() => setToastList([]));


    return (
        <ToastProviderContext.Provider
            value={{
                toastList,
                setToastList,
            }}
        >
            {children}
        </ToastProviderContext.Provider>
    )
}