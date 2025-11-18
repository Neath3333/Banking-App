import React from 'react'

interface TotalBalanceBoxProps {
  accounts?: Array<any>;
  totalBanks?: number;
  totalCurrentBalance?: number;
}

export const TotalBalanceBox = ({
  accounts=[],
  totalBanks,
  totalCurrentBalance
} : TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/*Doughnut Chart*/}

      </div>
      <div className='flex flex-col gap-6'>
        <h2></h2>
      </div>
    </section>
  )
}
