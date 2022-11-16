"use client"

import React from "react"
import { Test } from "./Test"
export interface ButtonProps {
  test: boolean
}

export const Button = (props: ButtonProps) => {
  console.log("client")
  React.useEffect(() => {
    console.log("loaded")
  }, [])
  return (
    <button onClick={() => console.log("hello")}>
      <Test />
    </button>
  )
}
