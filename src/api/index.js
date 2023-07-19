import { BASE_URL } from "@/constants";

export const getAllCafe = () => {
  return fetch(`${BASE_URL}/get-index`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCafeById = (id) => {
  return fetch(`${BASE_URL}/get-view?id=${id}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
