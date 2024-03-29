import React from 'react'

const Auth = () => {
  return (
    <div className={classes.register}>
        <h1 className={classes.title}>
            Register
        </h1>
        <form className={classes.authForm} onSubmit={register}>
            <label htmlFor='name'>
                Name
                <input type='text' name='name' placeholder='Full Name' required />
            </label>
            <label htmlFor='email'>
                Email
                <input type='email' name='email' placeholder='Email' required />
            </label>
            <label htmlFor='password'>
                Password
                <input type='password' name='password' placeholder='Password' required />
            </label>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Auth