import Input from "../Input/Input";

import React from 'react'

export default function Forgot() {
  return (
    <form action="">
        <Input type="text" text="Email" />
        <div className="login_btn">
            <button>send</button>
        </div>
    </form>
  )
}
