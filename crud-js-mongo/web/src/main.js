import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		base: " https://aruba.n9s.cc/api/v1/web/nuvolaris/addrmo/"
	}
});

export default app;