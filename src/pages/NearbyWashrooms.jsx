import { useEffect, useState } from "react";
import useLocation from "../features/useLocation";
import { getNearbyWashrooms } from "../services/washroomService";
import WashroomCard from "../components/WashroomCard";

export default function NearbyWashrooms() {
  const { location, error } = useLocation();
  const [washrooms, setWashrooms] = useState([]);

  useEffect(() => {
    if (location) {
      getNearbyWashrooms(location.latitude, location.longitude).then(setWashrooms);
    }
  }, [location]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!location) return <p>Loading your location...</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Nearby Washrooms</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {washrooms.map((washroom) => (
          <WashroomCard key={washroom.id} washroom={washroom} />
        ))}
      </div>
    </div>
  );
}
