import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold text-orange-600 mb-4">
        Cognifera Publishing
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
         Digital manuscript publishing system. Upload your work, monitor the process, and publish
      </p>

      <Link 
        href="/login" 
        className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition"
      >
        Start Publishing
      </Link>
    </div>
  );
}