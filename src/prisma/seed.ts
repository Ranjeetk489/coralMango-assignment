import prisma from "../utils/client"



async function main() {
    const shop1 = await prisma.restaurant.create({
        data:{
            name:"shop1",
            
        }
    })
}