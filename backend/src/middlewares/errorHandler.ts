import { NextFunction, Request, Response } from "express";
import log from "../logger";

export default function (err:any,_req:Request,res:Response,_next:NextFunction){
    log.error(err)
    res.status(err.code< 500 ? err.code : 400).json({
        message:err.message || "something went wrong",
        success:false
    })
}