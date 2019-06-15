const mongoose = require("mongoose")

function getStuff(){
    return new Promise((res,err)=>{
        setTimeout(()=>{
            res("gg2")
        },2000)
    })
}



module.exports = getStuff