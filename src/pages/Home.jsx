import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold">Find the Nearest Washroom</h1>
      <Link to="/nearby">
        <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Find Washrooms Near Me
        </button>
      </Link>
    </div>
  );
}
