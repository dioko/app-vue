import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#144782',
            },
        },
    },
});
export default new Vuetify({
});
