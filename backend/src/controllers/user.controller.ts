import { Request, Response } from "express";

export const loginUser=(_req:Request,res:Response)=>{
    res.send("user login operations.")
}