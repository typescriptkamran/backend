"use client"
import React from 'react'
import { Button } from './ui/button'

function ButtonMain({name, onClick}) {
  return (
    <Button onClick={onClick}>{name}</Button>
  )
}

export default ButtonMain