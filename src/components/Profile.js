import React from 'react'

const Profile = () => {
    const name = "Wisanu"
    const lastName = "Phonjariyatham"
    const age = 36
    const height = 175
    const weight = 96
  return (
    <div style={{marginLeft:16}}>
        <h3>ชื่อ:{name}</h3>
        <h3>นามสกุล:{lastName}</h3>
        <h3>อายุ:{age}</h3>
        <h3>ส่วนสูง:{height}</h3>
        <h3>น้ำหนัก:{weight}</h3>
    </div>
  )
}

export default Profile