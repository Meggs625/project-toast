import React from 'react';

export const ToastProviderContext = React.createContext();

export default function ToastProvider({ children }) {
    const [toastList, setToastList] = React.useState([]);


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