import Vue from 'vue';
import Router from 'vue-router';
import Auth from '../views/Auth.vue';
import Home from '../views/Home.vue';
import Matches from '../views/Matches.vue';
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
				title: "Job♥Matcher | Authentication"
			}
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: "Job♥Matcher | Home",
				requiresAuth: true
			}
		}, {
			path: '/matches',
			name: 'matches',
			component: Matches,
			meta: {
				title: "Job♥Matcher | Matches",
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