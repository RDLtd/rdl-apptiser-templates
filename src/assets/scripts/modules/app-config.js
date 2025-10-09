
const app = {
    isProd: (process.env.NODE_ENV === 'production'),
    api: process.env.NODE_ENV === 'production' ? `https://api.apptiser.io` : `https://localhost:4000`
};

export default app;
