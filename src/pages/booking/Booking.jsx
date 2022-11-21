import React, { useRef } from 'react';
import Menu from '../../compoment/BookingNow';
import {HOTELS} from '../list/data'

const Booking = () => {
  const menuRef = useRef();
  return (
    <div>
        <Menu list={HOTELS} ref={menuRef} />
    </div>
  )
}

export default Booking