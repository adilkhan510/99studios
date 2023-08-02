const Spinner = () => (
  <div className="flex items-center justify-center">
    <svg
      className="w-10 h-10 text-gray-500 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
);

export default Spinner;
