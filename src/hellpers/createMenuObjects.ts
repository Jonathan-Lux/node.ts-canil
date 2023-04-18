type Menuoption = "" | "all" | "dog"| "cat"| "fish"

export const createMenuObjects = (activeMenu:Menuoption)=>{
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(activeMenu !== ""){
        returnObject[activeMenu] = true
    }
    return returnObject
}