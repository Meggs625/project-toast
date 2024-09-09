import React from 'react';
import { ToastProviderContext } from '../providers/ToastProvider/ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  const { toastList, setToastList } = React.useContext(ToastProviderContext);

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setToastList([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  const removeToast = (deletedId) => {
    const filteredToasts = toastList.filter(({ id }) => id !== deletedId)
    setToastList(filteredToasts)
  }
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toastList.map(({ id, selectedVariant, currentMessage }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={selectedVariant} message={currentMessage} removeToast={removeToast} id={id} />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
