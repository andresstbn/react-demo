export default function Button({ children = "-", onClick, highlight = false }) {
  return (
    <button
      onClick={onClick}
      className={`${
        highlight ? "bg-red-500" : "bg-purple-300"
      } px-8 rounded-xl hover:bg-purple-400`}
    >
      {children}
    </button>
  );
}
