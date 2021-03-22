import Auth from '../views/Auth.vue';
import Home from '../views/Home.vue';
import Matches from '../views/Matches.vue';
import Router from 'vue-router';
import Vue from 'vue';
import auth from '../store/modules/auth';
import pageNotFound from '../views/PageNotFound';

Vue.use(Router);


let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'auth',
			component: Auth,
			meta: {
				title: "TorreAssistant | Authentication"
			}
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: "TorreAssistant | Home",
				requiresAuth: true
			}
		}, {
			path: '/matches',
			name: 'matches',
			component: Matches,
			meta: {
				title: "TorreAssistant | Matches",
				requiresAuth: true
			}
		},
		{
			path: "*",
			component: pageNotFound
		}
	]
});
router.beforeEach((to, from, next) => {
	let authenticated = !!auth.state.token;

	if (to.name == 'auth' && authenticated) {
		next({
			path: '/home'
		})
	}
	else if (to.meta.requiresAuth && !authenticated) {
		next({
			path: '/'
		})
	}
	else {
		next()
	}
})

export default router;
