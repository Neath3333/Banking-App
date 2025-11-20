import { formatAmount } from '@/lib/utils';
import React from 'react'
import AnimatedCounter from '../AnimatedCounter';

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
        <h2 className='header-2'>
          Bank Accounts: {totalBanks || 0}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance
          </p>
          <p className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance || 0} />
          </p>
        </div>
      </div>
    </section>
  )
}
