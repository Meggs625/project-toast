import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, setToastList }) {

  const removeToast = (deletedId) => {
    const filteredToasts = toastList.filter(({ id }) => id !== deletedId)
    setToastList(filteredToasts)
  }
  return (
    <ol className={styles.wrapper}>
      {toastList.map(({ id, selectedVariant, currentMessage }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={selectedVariant} message={currentMessage} removeToast={removeToast} id={id} />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
