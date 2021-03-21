import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import api from '../../api/user';
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";

const state = { status: "", profile: {} };

const getters = {
	getProfile: state => state.profile,
	isProfileLoaded: state => !!state.profile.name
};

const actions = {
	[USER_REQUEST]: async ({ commit, dispatch }) => {
		try {
			commit(USER_REQUEST);
			let resp = await api.me();
			console.log(resp.name);
			commit(USER_SUCCESS, resp);
		} catch (error) {
			commit(USER_ERROR);
			dispatch(AUTH_LOGOUT);
		}
	}
};

const mutations = {
	[USER_REQUEST]: state => {
		state.status = "loading";
	},
	[USER_SUCCESS]: (state, resp) => {
		state.status = "success";
		Vue.set(state, "profile", resp);
	},
	[USER_ERROR]: state => {
		state.status = "error";
	},
	[AUTH_LOGOUT]: state => {
		state.profile = {};
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};