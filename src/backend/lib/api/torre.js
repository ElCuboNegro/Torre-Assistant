'use strict';
const client = require('axios');

module.exports = {

  jobSearch: async (offset, user) => {
    try {
      const response = await client.post(`https://search.torre.co/opportunities/_search/?offset=${offset}&size=20&aggregate=false`, {
        bestfor: {
          username: user,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getJobInfo: async (id) => {
    try {
      const response = await client.get(`https://torre.co/api/opportunities/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getBioInfo: async (user) => {
    try {
      const response = await client.get(`https://torre.bio/api/bios/${user}`);
      return response.data;
    } catch (error) {
      if (error.response.status == 404) {
        error.status = 'The Torre account doesn\'t exists!';
        throw error;
      }
      throw error;
    }
  },
};
