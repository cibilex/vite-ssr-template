import {defineStore } from "pinia";

export const useStore=defineStore("storeId",{
    state : () => {
        return {
            msg:"Vite SSR starter template",
        }
    }
})

