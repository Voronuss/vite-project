import './Button.css';

export default function Button({ isActive, onClick, children }) {
  return (
    <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
