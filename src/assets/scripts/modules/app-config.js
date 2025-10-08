const app = {
    api: window.location.hostname.includes('localhost') ? 'https://localhost:4000' : `https://api.apptiser.io`,
    isProd: process.env.NODE_ENV === 'production',
    server: process.env.NODE_ENV === 'production' ? `https://api.apptiser.io` : `http://localhost:4000`
}

export default app;
