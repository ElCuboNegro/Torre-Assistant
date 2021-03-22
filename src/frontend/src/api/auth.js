import client from '../util/client';

export default {
	login: async (user) => {
		try {
			let response = await client.post("/auth/login", user);
			return response.data;
		} catch (error) {
			if (error.response.status == 401) {
				throw error.response.data.error;
			}
			throw error;
		}
	},

	register: async (user) => {
		try {
			let response = await client.post("/auth/register", user);
			return response.data;
		} catch (error) {
			if (error.response.status == 500) {
				throw error.response.data.error;
			}
			throw error.Error;
		}
	}
};
