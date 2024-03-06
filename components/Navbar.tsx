'use client'

import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const route = useRouter();
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div>
      <h3 className='font-extrabold'>Poetic Echoes</h3>
      </div>
      <div>
      <Button variant="outlined" onClick={() => {
        route.push('/createPost')
      }}>Post</Button>
      </div>
        
        
    </div>
  )
}

export default Navbar