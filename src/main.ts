import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import viteSSR,{ClientOnly} from 'vite-ssr/vue'
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { createHead, useHead } from '@vueuse/head'
import devalue from '@nuxt/devalue'
import { asyncComputed } from '@vueuse/core'
const routes = setupLayouts(generatedRoutes)


export default viteSSR(App,
    {routes,
    transformState:(state)=>{
       // pinia advises using it for security.
        return import.meta.env.SSR ? devalue(state) : state
    }},
    ({app,initialState})=>{

    const head=createHead()
    const pinia=createPinia()
    app.use(head)
    .component(ClientOnly.name,ClientOnly)
    .use(pinia)
    // to get pinia from server.
    if(import.meta.env.SSR) initialState["pinia"]=pinia.state.value 
    else pinia.state.value=initialState["pinia"]
    return {head}
})

// Notes 
// onServerPrefetch (()=>{}) this function work only at server
// <ClientOnly></ClientOnly> to compile an template only at client. 
// U can demand request,response in all component.Just say import { useContext,ClientOnly} from "vite-ssr";   const {request}=useContext()
    