import { registerTicketDto, updateTicketDto } from "../DTO/ticketDto"
import { prisma } from "../lib/prisma"

export const createTicket = async(data: registerTicketDto)=>{
    const { title, description, sector, priority } = data
    return await prisma.ticket.create({
        data: {
            title: title, 
            description: description, 
            sector: sector,
            priority: priority,
            status: "ABERTO"
        }
    })
}

export const showTickets = async()=>{
    return await prisma.ticket.findMany()   
}

export const showTicketById = async(id: number)=>{
    return await prisma.ticket.findFirstOrThrow({
        where: {
            id: id
        }
    })
}

export const updateTicket = async(id: number,data: updateTicketDto)=>{
    const {title, description, sector, priority} = data
    return await prisma.ticket.findFirstOrThrow({
        where: {
            id: id
        },
        data: {
            title: title,
            description: description,
            sector: sector,
            priority: priority
        }
    })
}
export const deleteTicket = async(id: number)=>{
    return await prisma.ticket.delete({
        where: {
            id: id
        }
    })
}
export const startTicket = async(id: number)=>{
    return await prisma.ticket.findFirstOrThrow({
        where: {
            id: id
        },
        data: {
            status: "EM ANDAMENTO"
        }
    })

}
export const finishTicket = async(id: number)=>{
    const finish = new Date()
    return await prisma.ticket.findFirstOrThrow({
        where: {
            id: id
        },
        data: {
            status: "FINALIZADO",
            finishedAt: finish
        }
    })
}