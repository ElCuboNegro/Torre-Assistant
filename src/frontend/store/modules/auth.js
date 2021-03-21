import { AUTH_REGISTER, AUTH_LOGIN, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';
import { USER_REQUEST } from '../actions/user';
import api from '../../api/auth';

const state = {
	token: localStorage.getItem("auth-token") || "",
	status: "",
	hasLoadedOnce: false
};

const getters = {
	isAuthenticated: state => !!state.token,
	authStatus: state => state.status
};

const actions = {
	[AUTH_LOGIN]: async ({ commit, dispatch }, user) => {
		try {
			commit(AUTH_LOGIN);
			let resp = await api.login(user);
			localStorage.setItem("auth-token", resp.token);
			commit(AUTH_SUCCESS, resp);
			dispatch(USER_REQUEST);
			return resp;
		} catch (error) {
			commit(AUTH_ERROR, error);
			localStorage.removeItem("auth-token");
			throw error;
		}
	},
	[AUTH_REGISTER]: async ({ commit }, user) => {
		try {
			commit(AUTH_REGISTER);
			let resp = await api.register(user);
			return resp;
		} catch (error) {
			commit(AUTH_ERROR, error);
			throw error;
		}
	},

	[AUTH_LOGOUT]: ({ commit }) => {
		return new Promise(resolve => {
			commit(AUTH_LOGOUT);
			localStorage.removeItem("auth-token");
			resolve();
		});
	}
};

const mutations = {
	[AUTH_REGISTER]: state => {
		state.status = "loading";
	},
	[AUTH_LOGIN]: state => {
		state.status = "loading";
	},
	[AUTH_SUCCESS]: (state, resp) => {
		state.status = "success";
		state.token = resp.token;
		state.hasLoadedOnce = true;
	},
	[AUTH_ERROR]: state => {
		state.status = "error";
		state.hasLoadedOnce = true;
	},
	[AUTH_LOGOUT]: state => {
		state.token = "";
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};