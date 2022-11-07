import createHttpError  from 'http-errors';
import { Response } from 'express';
import { Request } from 'express';
import prisma from '../utils/client';


//Todo: Login admin based on credentials and show the data they've access to
export async function login(req: Request, res:Response){
    try{
        const {email, password} = req.body;
        const isAdmin = await prisma.admin.findFirst({
            where: {email}
        })
        if(!isAdmin){
            return res.status(401).json({
                status: "failure"
            })
        }
        if(isAdmin.password === password){
            return res.status(200).json({
                staus: "success",
            })
        }   
    } catch(err){
        res.send(new createHttpError.BadRequest())
        console.log(err)
    }
}