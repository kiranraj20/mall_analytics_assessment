import React, {useState, useEffect} from 'react'
import './Machine.css';
import Dropdowns from '../../../Components/Dropdowns/Dropdowns';
import UniqueKey from '../../../Components/UniqueKey/UniqueKey';
import MachineAPI from '../../../api/MachineAPI.js'

const Machine = () => {

  const place = ['Mumbai', 'Agra', 'Ahmadabad', 'Bareilly', 'Bangalore', 'Chennai', 'Indore', 'Kolkata', 'Lucknow', 'Pune']
  const type = ['Jewelry', 'Cosmetics', 'Perfume', 'Chiller', 'Footware', 'Financial Service']
  const configuration = ['Dispenser', 'Hand picked', 'On Checkout', 'Kiosks']
  const size = ['1','2','3','4','5','6','7','8','9','10']

  const [Data, setData] = useState(
    {
      uniqueKey : '',
      place : '',
      type : '',
      configuration : '',
      size : '',
      description : '',
    }
  )
  // useEffect(() => {
  //   console.log(Data)
  // }, [Data])
  

  const handleValue = (id,value) => {
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }
  const handleUniqueKey = (value) => {
    setData((prevData) => ({
      ...prevData,
      uniqueKey: value,
    }));
  }
  const handleDescription = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };
  const handleSubmit = () => {
    if (Data.place === '' || Data.uniqueKey === '' ||Data.configuration === '' ||Data.size === '' ||Data.type === '' ) {
      alert('Values cannot be empty')
    }else{
      MachineAPI(Data) 
    }
  }

  return (
    <div className='machine'>
      <h4 className="machine-head">App Settings for the Whole System</h4>
      <div className="add-machines">
        <p className="add-text">Add Machines</p>
        <div className='d-flex justify-content-between gap-3'>
          <Dropdowns handleValue={handleValue} id='place' array={place} placeHolders='Enter or Select Location' />
          <Dropdowns handleValue={handleValue} id='type' array={type} placeHolders='Enter or Select Machine Type' />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <Dropdowns handleValue={handleValue} id='configuration' array={configuration} placeHolders='Select Machine Configuration' />
          <Dropdowns handleValue={handleValue} id='size' array={size} placeHolders='Enter Machine Size' />
        </div>
        <div>
          <UniqueKey handleUniqueKey={handleUniqueKey} />
        </div>
        <div>
          <input className='description-text' type='text' onChange={handleDescription} placeholder='Enter Description (Optional)' />
        </div>
        <div className='submit-buttons'>
          <div className='machine-text' onClick={handleSubmit}>ADD MACHINE</div>
          <div className='clear-text'>CLEAR FORM</div>
        </div>
      </div>
    </div>
  )
}

export default Machine