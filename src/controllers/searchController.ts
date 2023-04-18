import { Request,Response } from "express"
import { pet } from "../models/pets"
import { createMenuObjects } from "../hellpers/createMenuObjects"

 export const search = (req:Request,res:Response)=>{
    let query:string = req.query.q as string

    let list = pet.getFromName(query)

    res.render('pages/pages',{
        menu:createMenuObjects(""),
        list,
        query
    })
}