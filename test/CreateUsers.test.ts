import {test,expect, describe, beforeEach} from 'vitest'

import {CreateUsers} from '../src/controller/CreateUsers'
import {Request,Response} from 'express'


let sentData: any

const res = {
  send: (data: string) => { sentData =  data},
  json: (data: string) => { sentData = data}
} as any as Response


describe('Integrations Test', () => {
  
  let createUsers: CreateUsers;

  beforeEach(() => {
    createUsers = new CreateUsers();
  }) 

test('should be a string', async() => {

  let req = {
    body: {
      name: "test", 
      email: "test@gmail.com",
      password: "1"
    },  
  } as any as Request
  

  const createUsers = new CreateUsers()
  await createUsers.Create(req,res)

  expect(sentData).toEqual(
  {
    name: "test",
    email: "test@gmail.com",
    password: "1"
  }
 ) 
})


test('Should send a error if input be Another Type', async()=> {

  let req = {
    body: {
      name: "test",
      email: "test@gmail.com",
      password: 1
    }
  } as any as Request

  const createUsers = new CreateUsers()

  try {
    await createUsers.Create(req,res)
  } catch (error) {
    expect(error.message).toBe("Tipo Inválido")
  }
})

})




