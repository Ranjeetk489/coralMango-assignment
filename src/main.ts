import express , {Request, Response, NextFunction, Application, Router, ErrorRequestHandler} from "express";
import {Server} from "http";
import * as dotenv from "dotenv";
import createHttpError from "http-errors"; 

dotenv.config();
const app: Application = express();
const router: Router = express.Router();
const PORT = process.env.PORT || 3000;
console.log(PORT)

router.get("/", (req:Request, res:Response, next:NextFunction) => {
    res.send("hello")
})
router.use((req:Request, res:Response, next:NextFunction) => {
    next(new createHttpError.NotImplemented())
})

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
    return
}

router.use(errorHandler)
app.use(router)
const server: Server = app.listen(PORT, () => console.log("Server is running on port " + PORT))


