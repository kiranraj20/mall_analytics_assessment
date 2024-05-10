import React from 'react'
import Dashboard from '../../Layouts/Dashboard/Dashboard'
import Master from '../../Layouts/MasterSettings/Master'
import Analytics from '../../Layouts/Analytics/Analytics'
import Asset from '../../Layouts/Asset/Asset'
import User from '../../Layouts/User/User'
import Logout from '../../Layouts/Logout/Logout'

const Body = ({value}) => {
  switch (value) {
    case 'dashboard': return <Dashboard />
    case 'analytics': return <Analytics />
    case 'asset': return <Asset />
    case 'user': return <User />
    case 'master': return <Master />
    case 'logout': return <Logout />
    default: return <Dashboard />
  }
}

export default Body