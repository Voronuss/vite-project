import classes from './Button.module.css';

export default function Button({ isActive, onClick, children }) {
  return (
    <button
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
