// const BASE_URL = "http://192.168.1.92:3000";
const BASE_URL = "https://galaries-backend.onrender.com"
const url = new URL(BASE_URL);
const LOCAL_IP = url.hostname; // Extracts just the IP part

export default {
  BASE_URL,
  LOCAL_IP,
};
