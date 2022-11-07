import { Request } from 'express';
import { Response } from 'express';
import { NextFunction } from 'express';


// can be used as middleware to check whether the user is authenticated or not and whether a visitor should be allowed to visit the page. 
export function authUtils(req: Request, res: Response,next:NextFunction) {
    next()
}