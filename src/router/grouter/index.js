import { ref, inject } from 'vue';
import RouterLink from './RouterLink.vue';
import RouterView from './RouterView.vue';

const ROUTER_KEY = '__router__';

function useRouter(){
    return inject(ROUTER_KEY);
}
function createRouter(opt){
    return new Router(opt);
}

function createWebHashHistory(){
    function bindEvents(fn){
        window.addEventListener('hashchange', fn);
    }

    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'
    }
}

class Router {
    constructor(opt){
        this.history = opt.history;
        this.routes = opt.routes;
        this.current = ref(this.history.url);

        this.history.bindEvents(()=> {
            this.current.value = window.location.hash.slice(1)
        })
    }

    install(app){
        app.provide(ROUTER_KEY, this);
        app.component('router-link', RouterLink);
        app.component('router-view', RouterView);
    }
}

export {
    useRouter,
    createRouter,
    createWebHashHistory
}