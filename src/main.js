import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'

import components from '@/components/UI'

const app = createApp(App)

for (const key in components) {
	if (Object.hasOwnProperty.call(components, key)) {
		app.component(key, components[key]);
	}
}

app.use(router)
app.use(store)
app.mount('#app')