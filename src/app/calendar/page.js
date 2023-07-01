'use client'

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='div'>
      <Calendar locale="ko" onChange={onChange} value={value} />
    </div>
  );
}