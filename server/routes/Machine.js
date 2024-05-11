import express from 'express'
import {createMachine} from '../controllers/MachineAuth.js'

const router = express.Router();

router.post('/', createMachine);

export default router;
