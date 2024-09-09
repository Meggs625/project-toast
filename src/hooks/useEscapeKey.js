import React from 'react';

export default function useEscapeKey(callbackFnc) {
    React.useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                callbackFnc(e);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [callbackFnc])
}