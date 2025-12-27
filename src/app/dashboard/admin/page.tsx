// "use client"; remove this line to make it a server component

import { updateStatusAction } from "@/lib/actions"; // Import the server action
import { getBooks } from "@/lib/data"; // Import the data fetching function

export default async function AdminPage() {
  // async function to use await
  // Fetch books data on the server side
  const books = await getBooks();

  // Same Implementation as before
  // ...
  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Editor Dashboard</h1>
        <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold">
          Admin Mode
        </div>
      </header>

      {/* Stats Cards (Grid Layout) */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-400">
          <h3 className="text-gray-500 text-sm">Total Submissions</h3>
          <p className="text-3xl font-bold">{books.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm">Published Books</h3>
          <p className="text-3xl font-bold">
            {books.filter((b) => b.status === "Published").length}
          </p>
        </div>
      </div>

      {/* Management Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">Current Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium">{book.title}</td>
                <td className="p-4 text-gray-600">{book.author}</td>

                {/* Status Column */}
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold
                    ${
                      book.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : book.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                {/* Since we are in a Server Component, we can't use onClick.
                     We use small forms for the buttons. This is the "Pure Server" way.
                */}
                <td className="p-4 flex gap-2">
                  <form
                    action={updateStatusAction.bind(null, book.id, "Published")}
                  >
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Approve
                    </button>
                  </form>
                  <form
                    action={updateStatusAction.bind(null, book.id, "Rejected")}
                  >
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                      Reject
                    </button>
                  </form>
                  {/*  CHALLENGE: Call the delete action */}
                  <form action="">
                    <button className="text-gray-400 hover:text-red-600 ml-2">
                      (x)
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
