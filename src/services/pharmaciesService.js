import axios from "axios";

export const getAllPharmacies = async () => {
  const { data } = await axios.get(
    "https://medicine-delivery-app2.onrender.com/pharmacies"
  );
  return data.result;
};
