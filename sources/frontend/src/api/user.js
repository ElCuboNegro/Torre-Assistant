
import client from '../util/client';

export default {
	me: async () => {
		try {
			let token = localStorage.getItem("auth-token");
			let response = await client.get("/user/me", { headers: { "Authorization": `Bearer ${token}` } });
			return response.data;
		} catch (error) {
			if (error.response.status == 401) {
				throw error.response.data.error;
			}
			throw error;
		}
	}