const CONFIG = {
    ENV: process.env.NODE_ENV,
    isDevelopment () {
        return CONFIG.ENV === 'development';
    },
    isProduction () {
        return CONFIG.ENV === 'production';
    },
    isStaging () {
        return CONFIG.ENV === 'staging';
    },
    baseUrl () {
        if (CONFIG.isDevelopment()){
            return 'http://localhost:3000/';
        }
        else if (CONFIG.isProduction()){
            return 'http://localhost:3000/';
        }
        else if (CONFIG.isStaging()){
            return 'http://localhost:3000/';
        }
    }
};

export default CONFIG;
