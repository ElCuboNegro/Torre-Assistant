import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://job-matcher-backend.herokuapp.com/api/v1"
});

export default client;
