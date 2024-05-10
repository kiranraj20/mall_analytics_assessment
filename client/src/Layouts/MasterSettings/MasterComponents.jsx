import React from 'react'
import Threshold from './ThresholdValues/Threshold';
import Machine from './AddMachines/Machine';
import Billing from './Billing/Billing';

const MasterComponents = ({value}) => {
  switch (value) {
    case 'threshold': return <Threshold />
    case 'machines': return <Machine />
    case 'billing': return <Billing />
    default:
  }
}

export default MasterComponents