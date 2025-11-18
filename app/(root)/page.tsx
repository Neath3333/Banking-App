import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import { TotalBalanceBox } from '@/components/ui/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: 'NeathPcY'}
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and Manage Your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000000.00}
          />
        </header>
      </div>
    </section>
  )
}

export default Home