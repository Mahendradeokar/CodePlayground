import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:4500/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

req.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token") ?? ""}`;
  return config;
});

export const login = async (values) => {
  try {
    const { data: responseData } = await req.post("auth/login", values);
    const { data } = responseData;
    const { token } = data;
    localStorage.setItem("token", token);
    return data;
  } catch (error) {
    alert(
      error?.response?.data?.errorMessage ??
        "Something went wrong! please check console..."
    );
    console.log(error);
    return null;
  }
};

export const signup = async (values) => {
  try {
    const { data: responseData } = await req.post("auth/signup", values);
    const { data } = responseData;
    console.log(responseData);
    return data ?? {};
  } catch (error) {
    alert(
      error?.response?.data?.errorMessage ??
        "Something went wrong! please check console..."
    );
    console.log(error);
    return null;
  }
};

export const getProfile = async () => {
  try {
    const { data: responseData } = await req.get("auth/profile");
    const { data } = responseData;
    console.log(responseData);
    return data ?? {};
  } catch (error) {
    // alert(
    //   error?.response?.data?.errorMessage ??
    //     "Something went wrong! please check console..."
    // );
    console.log(error);
    return null;
  }
};

export const getAllVendors = async () => {
  try {
    const { data: responseData } = await req.get("vendor/");
    const { data } = responseData;
    console.log(responseData);
    return data ?? [];
  } catch (error) {
    alert(
      error?.response?.data?.errorMessage ??
        "Something went wrong! please check console..."
    );
    console.log(error);
    return null;
  }
};

export const deleteVendor = async (vendorId) => {
  try {
    const { data: responseData } = await req.delete(`vendor/${vendorId}`);
    const { data } = responseData;
    console.log(responseData);
    return data ?? {};
  } catch (error) {
    alert(
      error?.response?.data?.errorMessage ??
        "Something went wrong! please check console..."
    );
    console.log(error);
    return null;
  }
};

export const approveVendor = async (vendorId) => {
  try {
    debugger;
    const { data: responseData } = await req.put(`vendor/approve/${vendorId}`);
    const { data } = responseData;
    console.log(responseData);
    return data ?? {};
  } catch (error) {
    alert(
      error?.response?.data?.errorMessage ??
        "Something went wrong! please check console..."
    );
    console.log(error);
    return null;
  }
};
