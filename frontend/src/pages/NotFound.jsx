function NotFound() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">Not Found</h1>
        <p className="text-gray-600">
          The page you're looking for does not exist!
        </p>
      </div>
    </div>
  );
}

export default NotFound;
