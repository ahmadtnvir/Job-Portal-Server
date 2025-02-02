// import axios from "axios";

// const fetchData = async (...args) => {
//   const res = await axios.get(...args);
//   const data = res.data;
//   return data;
// };
// export default fetchData;

import axios from "axios";

const fetchData = async (url) => {
  try {
    const res = await axios.get(url, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Ensure SWR catches the error
  }
};

export default fetchData;
