import react, { useEffect, useState } from 'react'


function Github() {
    const [data, setData] = useState([])
useEffect(() => {
    fetch('https://api.github.com/users/mohdsams023')
    .then(response => response.json())
    .then(data => {
        setData(data)
    })
}, [])
  return (
    <div className='bg-slate-600 text-white p-4 m-5 text-3xl '>
      Followers: {data.followers}
      <img src={data.avatar_url} alt="" width={300} />
      </div>
  )
}

export default Github
