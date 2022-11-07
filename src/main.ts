import express , {Request, Response, NextFunction, Application, Router, ErrorRequestHandler} from "express";
import {Server} from "http";
import * as dotenv from "dotenv";
import createHttpError from "http-errors"; 
import { authUtils } from "./utils/authUtils";
import {getRestaurants, getOneRestaurant} from "./controllers/RestaurantController";
import {editReview, getReviews, postReview} from "./controllers/ReviewController";
import {login} from "./controllers/AuthController"

dotenv.config();
const app: Application = express();
const router: Router = express.Router();
app.use(express.json())
const PORT = process.env.PORT || 3000;

//restaurant related routes
router.get("/",authUtils, getRestaurants)
router.get("/restaurant_detail/:id", getOneRestaurant)
//review related routes
router.get("/reviews/:id", getReviews)
router.post("/edit_review", authUtils,editReview)
router.post("/post_review", authUtils, postReview)
// auth related route
router.post("/login", login)

//error handler for cases when user enters a unimplemented path in search bar
router.use((req:Request, res:Response, next:NextFunction) => {
    next(new createHttpError.NotImplemented())
})

// defines error 
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


