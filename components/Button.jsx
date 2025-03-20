export default function Button({ children="-", onClick }) {
  return <button onClick={onClick} className="bg-purple-300 p-8 rounded-xl hover:bg-purple-400">
    {children}
  </button>;
}
