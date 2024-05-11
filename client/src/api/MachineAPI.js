import React from 'react';
import axios from 'axios';

export const MachineAPICreate = async (data) => {
  const dataValues = data;
  console.log('dataValues', `'${dataValues.Data.place}'`);
  try {
    const response = await axios.post('http://localhost:5500/api/machines', {
      // uniqueKey: dataValues.Data.uniqueKey,
      place: dataValues.Data.place,
      // type: dataValues.Data.type,
      // configuration: dataValues.Data.configuration,
      // size: dataValues.Data.size,
      // description: dataValues.Data.description
    });
    console.log('Machine added:', response.data);
    return response.data; // Return the data if needed
  } catch (error) {
    console.error('Error adding machine:', error);
    throw error; // Throw the error to handle it where the function is called
  }
};

export const MachineAPIGet = async () => {
  console.log('get')
  try {
    const response = await axios.get('http://localhost:5500/api/machines');
    console.log('Machine list:', response.data);
    return response.data; // Return the data if needed
  } catch (error) {
    console.error('Error getting machine list:', error);
    throw error; // Throw the error to handle it where the function is called
  }
};
