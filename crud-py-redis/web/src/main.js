import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		base: "https://linode.n9s.cc/api/v1/web/nuvolaris/addrpy/"
	}
});

export default app;