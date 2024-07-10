import prismaClient from "../prisma";

export class ListCustomerService{
     async execute(){

          const costumer = await prismaClient.customer.findMany();

          return costumer;

     }
}