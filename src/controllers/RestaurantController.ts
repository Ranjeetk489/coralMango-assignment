import  createHttpError  from 'http-errors';
import { Response } from 'express';
import { Request } from 'express';
import prisma from '../utils/client';

// Gets specific restaurant based on provider Restaurant id via query params
async function getOneRestaurant(req:Request, res:Response){
    try{
        const restaurantId:string= req.params.id;
        console.log(restaurantId);
        const data  = await prisma.restaurant.findUnique({
            where:{id: restaurantId},
            include:{address:true, review:true}
        })
        res.status(200).send(data)
    }
    catch(err) {
        res.send(new createHttpError.BadRequest())
        console.log(err)
    }
}


// get all restaurants from db along with their addresses
async function getRestaurants(req:Request, res:Response){
    try{
        const data  = await prisma.restaurant.findMany({
            include: {address:true}
        })
        res.status(200).send(data)
    }
    catch(err) {
        console.log(err)
    }
}




export {getOneRestaurant, getRestaurants};