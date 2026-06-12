import { NextFunction, Request, Response} from "express";

export const validateCreate = (req: Request, res: Response, next: NextFunction)=>{
    const {title, description , sector, priority, } = req.body
    if(!title || !description){
        return res.status(400).send({response: `Preencha todos os campos para prosseguir!`})
    }
    if(sector != "TI" && sector != "RH" && sector != "PRODUCAO" && sector != "LOGISTICA"){
        return res.status(400).send({response: "Setor Invalido"})
    }
    if(priority != "BAIXA" && priority != "MEDIA" && priority != "ALTA"){
        return res.status(400).send({response: "Prioridade Invalida"})
    }
    next()
}
export const validateUpdate = (req: Request, res: Response, next: NextFunction)=>{
    const {title, description , sector, priority, } = req.body
    if(!title || !description){
        return res.status(400).send({response: `Preencha todos os campos para prosseguir!`})
    }
    if(sector != "TI" && sector != "RH" && sector != "PRODUCAO" && sector != "LOGISTICA"){
        return res.status(400).send({response: "Setor Invalido"})
    }
    if(priority != "BAIXA" && priority != "MEDIA" && priority != "ALTA"){
        return res.status(400).send({response: "Prioridade Invalida"})
    }
    next()
}
export const validateDelete = (req: Request, res: Response, next: NextFunction)=>{

}
