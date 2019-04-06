import env from 'react-native-config';

const config = {
  api: {
    host: env.API_HOST,
    key: env.API_KEY,
    timeout: 20000
  }
};

const API_HOST = config.api.host;
const API_KEY = config.api.key;

export { API_HOST, API_KEY };

export default config;
