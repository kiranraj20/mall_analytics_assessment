import Machine from '../models/Machine.js'


export const createMachine = async (req, res) => {
  try {
    const {place} = req.body
    if(!place){
      return res.status(400).json({ message: "place is required" });
    }
    const existingPlace = await Machine.findOne({place});
    if(existingPlace){
      return res.status(400).json({ message: "place already exists" });
    }
    const newMachine = new Machine({place});
    const savedMachine = await newMachine.save();
    res.status(201).json(savedMachine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllMachines = async (req, res) => {
  try {
    const machines = await Machine.find();
    res.json(machines);
  } catch (err) {
    console.error('Error fetching machines:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


