import axios from "axios";

export const orderService = {
  async submitOrder(orderData) {
    const response = await axios.post(
      "https://medicine-delivery-app2.onrender.com/order",
      orderData
    );
    return response.data;
  },
};
