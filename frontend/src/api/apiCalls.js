import axios from "axios";
import {
  logoutPath,
  signupPath,
  loginPath,
  getUsersPath,
  getUserPath,
  updateUserPath,
  getNewHoaxesPath,
  postHoaxPath,
  getNewHoaxCountPath,
  getOldHoaxesPath,
  getHoaxesPath,
  postHoaxAttachmentPath,
  deleteHoaxPath,
} from "./apiCallsPath";

export const signup = (body) => {
  return axios.post(signupPath, body);
};

export const login = (creds) => {
  return axios.post(loginPath, creds);
};
export const changeLanguage = (language) => {
  axios.defaults.headers["accept-language"] = language;
};

export const getUsers = (page = 0, size = 3) => {
  return axios.get(getUsersPath(page, size));
};
// Kullanicinin login olup olmama durumuna gore Authoraziton headerini degistiriyoruz,
// loginse headeri ekle, degilse sil.
export const setAuthorizationHeader = ({ isLoggedIn, token }) => {
  if (isLoggedIn) {
    const authorizationHeaderValue = `Bearer ${token}`;
    axios.defaults.headers["Authorization"] = authorizationHeaderValue;
  } else {
    delete axios.defaults.headers["Authorization"];
  }
};

export const getUser = (username) => {
  return axios.get(getUserPath(username));
};

export const updateUser = (username, body) => {
  return axios.put(updateUserPath(username), body);
};

export const postHoax = (hoax) => {
  return axios.post(postHoaxPath, hoax);
};

export const getHoaxes = (username, page = 0) => {
  return axios.get(getHoaxesPath(username) + page);
};

export const getOldHoaxes = (id, username) => {
  return axios.get(getOldHoaxesPath(id, username));
};

export const getNewHoaxCount = (id, username) => {
  return axios.get(getNewHoaxCountPath(id, username));
};

export const getNewHoaxes = (id, username) => {
  return axios.get(getNewHoaxesPath(id, username));
};
export const postHoaxAttachment = (attachment) => {
  return axios.post(postHoaxAttachmentPath, attachment);
};

export const deleteHoax = (id) => {
  return axios.delete(deleteHoaxPath(id));
};

export const deleteUser = (username) => {
  return axios.delete(getUserPath(username));
};

export const logout = () => {
  return axios.post(logoutPath);
};
