import {model, Schema } from "mongoose"; //propiedades de mongoose, construir documenetos

const usuarioSchema= new Schema({
    name:{type:String,require:true},
    email:{type:String, require:true},
    password:{type:String, require:true}

},{
    versionKey:false
})

export default model("Usuarios",usuarioSchema)