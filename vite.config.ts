import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss' 
import ViteSSR from "vite-ssr/plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    Components({ 
      resolvers: [
        IconsResolver({
          prefix:false
        }),
      ]
    }),
    Icons(),
    AutoImport({ 
      dts:"./src/auto-imports.d.ts",
      imports: [
      'vue',
      'vue-router',
      'pinia',
    ]
  }),
  WindiCSS(),
  ViteSSR()
  ],
  
})
