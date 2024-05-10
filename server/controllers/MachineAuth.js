import Machine from '../models/Machine.js'

const MachineController = {};

MachineController.createMachine = async (req, res) => {
  try {
    const machine = new Machine(req.body);
    await machine.save();
    res.status(201).json(machine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default MachineController
