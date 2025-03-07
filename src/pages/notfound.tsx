function NotFoundPage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-white">
        <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="mb-4">The page you are looking for might have been removed or is temporarily unavailable.</p>
          <a 
            href="/" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }
  
  export default NotFoundPage;
  