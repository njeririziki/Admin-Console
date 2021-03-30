import jwtDecode from 'jwt-decode'
import {differenceInMilliseconds} from 'date-fns';

export default {
    //saving the token to localstorage
    // NOTE: this is not foolproof 
    create(key) {
        localStorage.setItem('user', key);
        localStorage.setItem('start', Date.now().toString());
    },
  // deleting the token will prevent anyone from sending a request
    destroy() {
        localStorage.clear();
    },

    // accessing the token to use for authorization into the server
    retrieve(parsed = false) {
        const token = localStorage.getItem('user') || '';

        if (!parsed) return token;

        try {
            return jwtDecode(token);
        } catch (error) {
            return null;
        }
    },

    guard(slug) {
        const user = this.retrieve(true);
        const permissions = user?.permissions || [];

        if (permissions.length === 0) return false;

        return permissions.findIndex((x) => x === slug) !== -1;
    },

    //check if the session is ongoing and end after designated time
    get active() {
        const startDate = localStorage.getItem('start');
        const duration = differenceInMilliseconds(Date.now(), parseInt(startDate));

        if (!startDate) return false;

        if (duration > process.env.NEXT_PUBLIC_SESSION_DURATION) {
            this.destroy();
            return false;
        }

        if (!this.retrieve()) {
            return false;
        }

        return true;
    },
};
