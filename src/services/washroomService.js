import axios from "axios";

const API_URL = "https://your-backend-api.com/washrooms"; // Replace with actual API

export async function getNearbyWashrooms(lat, lon) {
  try {
    const response = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching washrooms:", error);
    return [];
  }
}
