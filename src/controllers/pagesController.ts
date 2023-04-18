import { Request,Response } from "express"
import { createMenuObjects } from "../hellpers/createMenuObjects"
import { pet } from "../models/pets"


export const home = (req:Request,res:Response)=>{
    let list = pet.getAll()

    res.render('pages/pages',{
        menu: createMenuObjects("all"),
        banner:{
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    })
}

export const dogs = (req:Request,res:Response)=>{
    let list = pet.getFromtype("dog")
    res.render('pages/pages',{
        menu: createMenuObjects("dog"),
        banner:{
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    })
}

export const cats = (req:Request,res:Response)=>{
    let list = pet.getFromtype("cat")
    res.render('pages/pages',{
        menu: createMenuObjects("cat"),
        banner:{
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    })
}

export const fishes = (req:Request,res:Response)=>{
    let list = pet.getFromtype("fish")
    res.render('pages/pages',{
        menu: createMenuObjects("fish"),
        banner:{
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    })
}