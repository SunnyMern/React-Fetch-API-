import React, { useEffect, useState } from 'react'
const Test = (props) => {
    const [temps, setTepms] = useState('')
    console.log(temps)

    useEffect(() => {
        fetch(
            "https://testing-std.herokuapp.com/api/student")
            .then((res) => res.json())
            .then((json) => {

                setTepms(
                    {
                        items: json,
                        DataisLoaded: true
                    }
                )
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Please check Console Log</h1>
        </div>
    )
}

export default Test