import { Router } from "express";
const routes =  Router()

import {CreateUsers} from '../controller/CreateUsers'
const createUsers = new CreateUsers()

routes.post('/create_account', createUsers.Create)

export {routes}