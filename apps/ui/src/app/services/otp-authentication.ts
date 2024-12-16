import axios from 'axios';

const apiUrlGenerateToken = 'http://localhost:8080/otp/generate';

export const postRequestToken = (email: string) => {

  const body = {
    email: email,
  }

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