import BaseAxios from 'axios';

const axios = BaseAxios.create({
  timeout: 60000
});

const callApi = async (apiConfig) => {
  try {
    const response = await axios.request({
      ...apiConfig
    });
    return {
      error: false,
      data: response.data
    };
  } catch (error) {
    return {
      error: true,
      message: error.message
    }
  }
};

export default callApi;
