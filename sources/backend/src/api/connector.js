'use strict';
const client = require('axios');
const {
  response
} = require('express');
const db = require.main.require('./models');
const User = db.User;

module.exports = {
  getBestFor: async (offset, user) => {
    try {
      let response = await client.post(`https://search.torre.co/opportunities/_search/?offset=${offset}&size=20&aggregate=false`, 
            {
        bestfor: {
          username: user,
        }
      });
      return response;
    } catch (e) {
            throw e;
        }
    },

  jobSearch: async (offset, user, active, remote, timezone) => {
    try {
      let base = `https://search.torre.co/opportunities/_search?currency=${currency}%24&periodicity=${periodicity}&lang=${language}}&size=10&aggregate=true&offset=${offset}`
      let payload = {
        "and": [{
            "bestfor": {
              "username": user
            }
          },
          {
            "status": {
              "code": active
            }
          },
          {
            "remote": {
              "term": remote
            }
          },
          {
            "timezone": {
              "code": timezone
            }
          }
        ]
      }



      let response = await client.post(base, payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getJobInfo: async (id) => {
    try {
      let response = await client.get(`https://torre.co/api/opportunities/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getBioInfo: async (user) => {
    try {
      let response = await client.get(`https://torre.bio/api/bios/${user}`);
      return response;
    } catch (error) {
      if (error.response.status == 404) {
        throw "The Torre account doesn't exists!";
      }
      throw error;
    }
  },
  deleteUser: async (user) => {
    try {
      let {gaccountToken, torre_user, email} = req.body;
      let user = await User.findAll({where: { gaccountToken }});
      if (user.length) {
          //TODO
      }
    } catch (e){
      if (error.response.status == 400) {
        throw "The Torre account isn't linked in the assistant!"
      }
    }
  }
}