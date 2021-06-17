const signupPath = "/api/1.0/users";

const loginPath = "/api/1.0/auth";

const getUsersPath = (page, size) => {
  return `/api/1.0/users?page=${page}&size=${size}`;
};

const getUserPath = (username) => {
  return `/api/1.0/users/${username}`;
};

const updateUserPath = (username) => {
  return `/api/1.0/users/${username}`;
};
const postHoaxPath = "/api/1.0/hoaxes";

const getHoaxesPath = (username) => {
  // usernmae varsa onun pathine gore getir, yoksa normal hepsini getir
  // username zorunlu olmadigi icin bu kontolu yaptik bosta gonderebiliriz
  return username
    ? `/api/1.0/users/${username}/hoaxes?page=`
    : "/api/1.0/hoaxes?page=";
};

const getOldHoaxesPath = (id, username) => {
  return username
    ? `/api/1.0/users/${username}/hoaxes/${id}`
    : `/api/1.0/hoaxes/${id}`;
};

const getNewHoaxCountPath = (id, username) => {
  return username
    ? `/api/1.0/users/${username}/hoaxes/${id}?count=true`
    : `/api/1.0/hoaxes/${id}?count=true`;
};

const getNewHoaxesPath = (id, username) => {
  return username
    ? `/api/1.0/users/${username}/hoaxes/${id}?direction=after`
    : `/api/1.0/hoaxes/${id}?direction=after`;
};
const deleteHoaxPath = (id) => {
  return `/api/1.0/hoaxes/${id}`;
};
//------- Hoax Submit Pending ---------
const pendingApiCallHoaxSubmitPath = "/api/1.0/hoaxes";
const postHoaxAttachmentPath = "/api/1.0/hoax-attachments";

const logoutPath = "/api/1.0/logout";

export {
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
  pendingApiCallHoaxSubmitPath,
};
