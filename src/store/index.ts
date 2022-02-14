import {defineStore } from "pinia";

export const useStore=defineStore("storeId",{
    state : () => {
        return {
            msg:"Vite SPA starter template"
        }
    }
})

