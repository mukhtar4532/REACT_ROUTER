export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinning Loader */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-lg font-semibold text-gray-700">
          Loading... Please wait
        </p>
      </div>
    </div>
  );
};
