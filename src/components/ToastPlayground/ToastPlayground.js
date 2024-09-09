import React from 'react';
import Button from '../Button';
import { ToastProviderContext } from '../providers/ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [selectedVariant, setSelectedVariant] = React.useState('notice');
  const [currentMessage, setCurrentMessage] = React.useState('');

  const { toastList, setToastList } = React.useContext(ToastProviderContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      selectedVariant,
      currentMessage
    }
    cleanForm();
    setToastList([...toastList, newToast]);

  }

  const cleanForm = () => {
    setCurrentMessage('');
    setSelectedVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastList.length > 0 && (
        <ToastShelf />
      )}

      <form className={styles.controlsWrapper} onSubmit={(e) => handleSubmit(e)} >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} spellCheck value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={`variant-${variant}`} key={variant}>

                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  onChange={() => setSelectedVariant(variant)}
                  checked={variant === selectedVariant}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit" disabled={!currentMessage}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
