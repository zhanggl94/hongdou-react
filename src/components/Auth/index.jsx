import React from 'react'
import { useHistory } from 'react-router'
import { getLocalStorageItem } from '../../util/utils'
import Signin from '../../pages/Signin'


export default function Auth(Component) {
  // const history = useHistory();
  const jwtToken = getLocalStorageItem('jwtToken');
  let next;
  if (jwtToken) {
    next = (<Component />);
  } else {
    next = (<Signin />)
  }

  return next
}
