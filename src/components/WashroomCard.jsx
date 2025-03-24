import { Link } from "react-router-dom";

export default function WashroomCard({ washroom }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-xl font-semibold">{washroom.name}</h3>
      <p>{washroom.address}</p>
      <p className={`mt-2 ${washroom.isPaid ? "text-red-500" : "text-green-500"}`}>
        {washroom.isPaid ? "Paid" : "Free"}
      </p>
      <Link to={`/washroom/${washroom.id}`}>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
}
