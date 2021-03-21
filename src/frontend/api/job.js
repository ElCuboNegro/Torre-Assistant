import client from '../util/client';

export default {
	getOffers: async (offset) => {
		try {
			let token = localStorage.getItem("auth-token");
			let response = await client.get(`/job/offers/${offset}`, { headers: { "Authorization": `Bearer ${token}` } });
			return response.data;
		} catch (error) {
			if (error.response.status == 401) {
				throw error.response.data.error;
			}
			throw error;
		}
	},
	getSavedOffers: async () => {
		try {
			let token = localStorage.getItem("auth-token");
			let response = await client.get(`/job/all/offers/`, { headers: { "Authorization": `Bearer ${token}` } });
			return response.data;
		} catch (error) {
			if (error.response.status == 401) {
				throw error.response.data.error;
			}
			throw error;
		}
	},
	saveOffer: async (offer) => {
		try {
			let token = localStorage.getItem("auth-token");
			let response = await client.post(`/job/save/offers/`, offer, { headers: { "Authorization": `Bearer ${token}` } });
			return response.data;
		} catch (error) {
			if (error.response.status == 401) {
				throw error.response.data.error;
			}
			throw error;
		}
	}
};