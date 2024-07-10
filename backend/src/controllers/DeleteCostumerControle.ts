import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

export class DeleteCostumerControle{
     async handle(request: FastifyRequest, reply: FastifyReply){

          const { id } = request.query as { id: string }
          
          const costumerService = new DeleteCustomerService();

          const costumer = costumerService.execute({ id });

          reply.send(costumer);

     }
}