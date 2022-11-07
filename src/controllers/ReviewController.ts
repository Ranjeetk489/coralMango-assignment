import { NextFunction } from 'express';
import  createHttpError  from 'http-errors';
import { Response } from 'express';
import { Request } from 'express';
import prisma from '../utils/client';


//TO edit review using using reviewID
async function editReview(req:Request, res:Response, next:NextFunction ){
    try {
        const {reviewId, content} = req.body;
        const data = await prisma.review.update({
            where:{id :reviewId},
            data : {
                content:content
            }
        })
        res.status(200)
        res.json({ status: "success" })
    }
    catch(err){
        // can address multiple error cases based on received error codes
        res.send(new createHttpError.BadRequest())
        console.log(err)
    }
}


// gets Reviews based on restaurantID for a particular restaurant
async function getReviews(req:Request, res:Response, next:NextFunction ){
    const restaurantId = req.params.id;
    try {
        if(!restaurantId) return res.send(new createHttpError.PreconditionFailed())
        const data = await prisma.review.findMany({
            where:{
                restaurantId : restaurantId
            }
        })
        res.status(200)
        res.json({ data })
    }
    catch(err){
        // can address multiple error cases based on received error codes
        res.send(new createHttpError.BadRequest())
        console.log(err)
    }
    console.log(req.params)
}


// Post review using restaurant id under selective restaurant
async function postReview(req:Request, res:Response, next:NextFunction): Promise<void> {
    const {restaurantId,content}  = req.body;
    console.log(restaurantId, content)
    try {
        await prisma.review.create({
            data: {
                content:content,
                restaurantId: restaurantId,
            },
        })
        res.status(200).json({status: "success"})
    }
    catch(err){
        // can address multiple error cases based on received error codes
        res.send(new createHttpError.BadRequest())
        console.log(err);
    }
}


export {editReview, getReviews, postReview}