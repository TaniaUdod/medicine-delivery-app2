import axios from "axios";

export const getAllMedicines = async () => {
  const { data } = await axios.get(
    "https://medicine-delivery-app2.onrender.com/medicines"
  );
  return data.result;
};
