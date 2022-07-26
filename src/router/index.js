import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/views/PageHome';
import PagePortfolio from '@/views/PagePortfolio';

import PageNotFound from '@/views/PageNotFound';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome,
		meta: {
			title: 'Compas Pro',
		}
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: PagePortfolio,
		meta: {
			title: 'Портфолио'
		}
	},

	{
		path: '/404',
		name: '404',
		component: PageNotFound,
		meta: {
			title: '404',
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

//* переход к странице с координатами x: 0, y: 0
router.beforeEach(() => { window.scrollTo(0, 0); })

export default router