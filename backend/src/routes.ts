import {  
     FastifyInstance, 
     FastifyPluginOptions, 
     FastifyRequest, 
     FastifyReply 
} from "fastify";
import { CreateCustomerControler } from "./controllers/CreateCustomerControler";
import { ListCustumerControler } from "./controllers/ListCustumerControler";
import { DeleteCostumerControle } from "./controllers/DeleteCostumerControle";

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
     fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
          return { ok: true }
     })

     fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{
          return new CreateCustomerControler().handle(request, reply);
     })

     fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply)=>{
          return new ListCustumerControler().handle(request, reply);
     })

     fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{
          return new DeleteCostumerControle().handle(request, reply);
     })
}