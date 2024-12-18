import axios from 'axios';

const apiUrlGenerateToken = 'http://localhost:8080/otp/generate';
const apiURLValidateToken = 'http://localhost:8080/otp/verify';

export const postRequestToken = (email: string) => {
  const body = {
    email: email,
  };
  return axios
    .post(apiUrlGenerateToken, body)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  
};

export const postValidateToken = (email: string, otp: string) => {
  const body = {
    email: email,
    otp: otp,
  };
  return axios
    .post(apiURLValidateToken, body)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
