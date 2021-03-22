import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://us-central1-torre-assistant.cloudfunctions.net/api"
});

export default client;
