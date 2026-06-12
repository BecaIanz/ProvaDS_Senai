import { Request, Response } from "express";
import { registerTicketDto, updateTicketDto } from "../DTO/ticketDto";
import { createTicket, deleteTicket, showTicketById, showTickets, startTicket, updateTicket} from "../services/ticket.service";

export default class TicketController {
    static async create(req: Request, res: Response){
        const data: registerTicketDto = req.body
        try{
            await createTicket(data)
            return res.status(200).send({message : "Ticket criado"})
        }
        catch(e){
            return res.status(500).send({ message: `Problema no Servidor! Erro: ${e}`})
        }

    }
    static async show(req: Request, res: Response){
        try{
            await showTickets()
            return res.status(200).send({response: "Tickets"})
        }
        catch(e){
            return res.status(404).send({ message: "Nenhum Ticket encontrado"})
        }
    }
    static async showById(req: Request, res: Response){
        const id = req.params
        try{
            await showTicketById(Number(id))
            return res.status(200).send({response: "Ticket Encontrado"})
        }
        catch(e){
            return res.status(404).send({ message: "Nenhum Ticket encontrado"})
        }

    }
    static async update(req: Request, res: Response){
        const id = req.params
        const data: updateTicketDto = req.body
        try{
            await updateTicket(Number(id), data)
            return res.status(200).send({ message: "Ticket Atualizado"})
        }
        catch(e){
            return res.status(400).send({ message: `Não foi possivel Atualizar o ticket! Erro: ${e}`})
        }
    }
    static async delete(req: Request, res: Response){
        const id = req.params
        try{
            await deleteTicket(Number(id))
            return res.status(200).send({ message: "Ticket Deletado"})
        }
        catch(e){
            return res.status(400).send({ message: `Não foi possivel deletar o Ticket! Erro: ${e}`})
        }
    }
    static async start(req: Request, res: Response){
        const id = req.params
        try{
            await startTicket(Number(id))
            return res.status(200).send({message: "Ticket Iniciado"})
        }
        catch(e){
            return res.status(400).send({ message: `Não foi possivel iniciar o Ticket! Erro: ${e}`})
        }
    }
    static async finish(req: Request, res: Response){
        const id = req.params
        try{
            await deleteTicket(Number(id))
            return res.status(200).send({ message: "Ticket Finalizado com sucesso"})
        }
        catch(e){
            return res.status(400).send({ message: `Não foi possivel finalizar o ticket! Erro: ${e}`})
        }
        
    }
}