import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";
import Library from "../pages/Library.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/search',
			name: 'search',
			component: Search,
		},
		{
			path: '/library',
			name: 'library',
			component: Library,
		},
	]
})

export default router