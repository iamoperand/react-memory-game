const URLS = {
  FRONTEND_URL: 'http://localhost:3000',
};

const env = process.env.NODE_ENV;
if ((env === 'production') || (env === 'staging')) {
  URLS.FRONTEND_URL = 'https://everyday-education.netlify.com';
}


export { URLS };
