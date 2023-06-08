import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-40">
      <h2>Not Found 404</h2>
      <button>
        <Link
          href="/"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          go home page
        </Link>
      </button>
    </div>
  );
}
