import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNearbyWashrooms } from "../services/washroomService";

export default function WashroomDetails() {
  const { id } = useParams();
  const [washroom, setWashroom] = useState(null);

  useEffect(() => {
    // Fetch washroom details (assuming API supports it)
    getNearbyWashrooms().then((data) => {
      setWashroom(data.find((w) => w.id === parseInt(id)));
    });
  }, [id]);

  if (!washroom) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">{washroom.name}</h2>
      <p>{washroom.address}</p>
      <p className={washroom.isPaid ? "text-red-500" : "text-green-500"}>
        {washroom.isPaid ? "Paid" : "Free"}
      </p>
    </div>
  );
}
