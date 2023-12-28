import Link from 'next/link'
const Notfound  = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <p className="text-4xl font-bold text-red-500">Page not found</p>
      <Link href="/" className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Go back
      </Link>
    </div>
  </div>
  )
}

export default Notfound