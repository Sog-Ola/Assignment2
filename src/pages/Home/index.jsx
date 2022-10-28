import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchUsers = async () => {
      setProducts([])
      const response = await fetch(
        `https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&page=${page}`
      )
      const data = await response.json()
      setProducts(data)
    }
    fetchUsers()
  }, [page])

  return (
    <main>
      <div className='pagination'>
        <button
          className='cursor'
          onClick={() => setPage(prev => (prev === 1 ? 1 : prev--))}
        >
          Prev
        </button>
        {page > 1 && (
          <p className='cursor' onClick={() => setPage(page - 1)}>
            {page - 1}
          </p>
        )}
        <p className='cursor'>{page}</p>
        <p className='cursor' onClick={() => setPage(page + 1)}>
          {page + 1}
        </p>
        <button className='cursor' onClick={() => setPage(prev => prev++)}>
          Next
        </button>
      </div>
      <div>
        {products.map(item => (
          <div className='card' key={item.address}>
            <h1>{`${item.first} ${item.last}`}</h1>
            <p>{item.email}</p>
            <small>{item.address}</small>
            <br />
            <br />
            <Link to={`/details/${item.first}`}>See More</Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home
