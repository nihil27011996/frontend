import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const loginUser = async (email, password) => {
  try {
    //calling login function
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      userName: email,
      password,
    });

    if (loginResponse.status === 200) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: loginResponse.data.data._id,
          name: loginResponse.data.data.name,
          userName: loginResponse.data.data.userName,
          email: loginResponse.data.data.email,
          role: loginResponse.data.data.role,
        })
      );
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          userId: loginResponse.data.data._id,
          token: loginResponse.data.data.token,
        })
      );
    }

    return loginResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default { loginUser };
