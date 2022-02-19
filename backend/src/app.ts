import express, { Request, Response } from "express";
import log from "./logger";
import config from "config"
import morgan from "morgan";
import routers from "./routers";
import errorHandler from "./middlewares/errorHandler";
import cookieParser from "cookie-parser"
import path from "path"
import cors from "cors"
const app=express()
const PORT=config.get("PORT") || 5050;
if(config.get("mode") === "dev")app.use(morgan("dev"))

app.use(express.static("public"))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:"*",
    credentials:true
}))


const dist="../../dist"
// This contains a list of static routes (assets)
const {ssr}=require(`${dist}/server/package.json`)
console.log(ssr.assets)
// The manifest is required for preloading assets
const manifest=require(`${dist}/client/ssr-manifest.json`)
const {default:renderPage}=require(`${dist}/server`)

// Serve every static asset route
for (const asset of ssr.assets || []) {
    app.use(
      '/' + asset,
      express.static(path.join(__dirname, `${dist}/client/` + asset))
    )
}
app.get('*', async (request:Request, response:Response) => {
    const url =
      request.protocol + '://' + request.get('host') + request.originalUrl
  
    const { html, status, statusText, headers } = await renderPage(url, {
      manifest,
      preload: true,
      // Anything passed here will be available in the main hook
      request,
      response,
      // initialState: { ... } // <- This would also be available
    })
  
    response.writeHead(status || 200, statusText || headers, headers)
    response.end(html)
  })

app.use(routers)
app.use(errorHandler)
app.listen(PORT,()=>log.info(`Server listening on http://localhost:${PORT}`))
