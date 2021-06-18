import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const User = ({userId, users}) => {
  const user = _.find(users, { number: userId });

  if (!user) {
    return <div>Sorry, but the user was not found</div>
  }
  
  return (
    <div>
      <h1>{user.name} (#{user.number})</h1>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default User