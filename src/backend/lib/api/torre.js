'use strict';

const client = require('axios');

module.exports = {
  async jobSearch(offset, user) {
    const response = await client.post(`https://search.torre.co/opportunities/_search/?offset=${offset}&size=20&aggregate=false`, {
      bestfor: {
        username: user,
      },
    });

    return response.data;
  },
  async getJobInfo(id) {
    const response = await client.get(`https://torre.co/api/opportunities/${id}`);

    return response.data;
  },
  async getBioInfo(user) {
    try {
      const response = await client.get(`https://torre.bio/api/bios/${user}`);

      return response.data;
    } catch (ex) {
      if (ex.response.status === 404) {
        throw new Error('The Torre account doesn\'t exists!');
      }

      throw ex;
    }
  },
};
