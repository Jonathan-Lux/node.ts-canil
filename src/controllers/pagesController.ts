import { Request,Response } from "express"


export const home = (req:Request,res:Response)=>{
    res.send('home')
}

export const dogs = (req:Request,res:Response)=>{
    res.render('dog')
}

export const cats = (req:Request,res:Response)=>{
    res.render('cats')
}

export const fishes = (req:Request,res:Response)=>{
    res.render('fishes')
}