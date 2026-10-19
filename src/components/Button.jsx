export default function Button({ type, children }) {
  return (
    <button type={type} className="btn">
      {children}
    </button>
  );
}
