import { Request, Response } from "express";

interface IUsers{
  name: string,
  email: string,
  password: number
}

export class CreateUsers{
  async Create(req: Request ,res:Response){

    const {name,email,password} = req.body;

      const user = {
        name,
        email,
        password
      } as IUsers

        const allFieldsAreStrings = Object.values(user).every(value => typeof value === 'string')

        if(!allFieldsAreStrings){
          throw new Error('Tipo Inválido')
        }

       return res.json(user)     
    }
}