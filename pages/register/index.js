import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import swal from "sweetalert";
import Users from "./Users";

export default function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])

    const registerHandler = event => {
        event.preventDefault()

        let userInfo = {
            firstName,
            lastName,
            email
        }

        fetch('https://snglisho-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => console.log(response))

    }

    return (<>



        <div className="havi"  >

        <li className='moshakhasat bigger'>
         ثبت نام کاربر          </li>

            <li className='moshakhasat'>
          لطفا جهت  درخواست ایجاد پروفایل ثبت نام نمایید

            </li>

            <div className="form-container">
                <form className="register-form" autoComplete="on" onSubmit={registerHandler}>
                    <input
                        id="first-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="form-field"
                        type="text"
                        placeholder="نام کاربری"
                        name="firstName"
                    />
                    <input
                        id="last-name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="form-field"
                        type="text"
                        placeholder="رمز عبور"


                    />

                    <input
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-field"
                        type="email"
                        placeholder="ایمیل"

                    />

                    <Button variant="outline-primary" className="form-enter" type="submit" onClick={() => swal({
                        title: "حساب  کاربری شما ساخته شد",
                        icon: "success",
                        buttons: "باشه !",
                    })}>      ثبت نام</Button>
                </form>
            </div>
            <Users />


        </div >

    </>



    )
}