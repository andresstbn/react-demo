import Link from 'next/link'

export default function Page() {
  return (
    <div className="">
      <section>
        Navega a las páginas de Demo:
        <div className="flex gap-4 my-4">
          <Link href="/pokedex" className="text-blue-500 bg-blue-300 rounded-xl px-4 py-2">Pokedex
          </Link>
          <Link href="/counter" className="text-blue-500 bg-blue-300 rounded-xl px-4 py-2">Counter
          </Link>
        </div>
      </section>
    </div>
  )
}