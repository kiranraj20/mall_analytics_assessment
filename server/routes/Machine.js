import express from 'express'
import MachineController from '../controllers/MachineAuth.js'

const router = express.Router();

router.post('/', MachineController.createMachine);

export default router;
