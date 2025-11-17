import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'

const Home = () => {
  const loggedIn = { firstName: 'NeathPcY'}
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting "
            title= "Welcome"
            user = {loggedIn.firstName || 'Guest'}   
            subject = " Access and Manage Your account and transactions efficiently"
          />
        </header>
      </div>
    </section>
  )
}

export default Home