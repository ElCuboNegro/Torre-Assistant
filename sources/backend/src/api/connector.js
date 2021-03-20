'use strict';
const client = ('axios');
const { response } = require('express');

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
    getJobInfo: async (id) => {
		try {
			let response = await client.get(`https://torre.co/api/opportunities/${id}`);
			return response.data;
		} catch (e) {
			throw e;
		}
    },
    getBioInfo: async (user) => {
        try {
            let response = await client.get(`https://torre.bio/api/bios/${user}`);
            return response.data;
        } catch (error) {
            if (error.response.status == 404) {
                throw "The Torre account doesn't exists!";
            }
            throw error;
        }
    }
}