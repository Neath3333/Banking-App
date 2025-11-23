import { formatAmount } from '@/lib/utils';
import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

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
    <section className='glass-card rounded-3xl p-8 md:p-10 border-custom animate-glow'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div className='w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-2xl flex items-center justify-center gradient-dark shadow-2xl relative group'>
          <div className="absolute inset-0 gradient-accent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <DoughnutChart balance={totalCurrentBalance || 0} />
        </div>

        <div className='flex-1 text-center md:text-left'>
          <div className='flex items-center gap-3 mb-6'>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <h2 className='text-lg md:text-xl font-semibold text-secondary uppercase tracking-wider'>
              Bank Accounts
            </h2>
          </div>

          <div className='space-y-4'>
            <div className="flex items-center justify-between">
              <p className='text-sm font-medium text-secondary'>
                Connected Accounts
              </p>
              <div className="flex items-center gap-2">
                <span className='text-2xl font-bold text-primary'>{totalBanks || 0}</span>
                <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-base font-medium text-gradient text-lg uppercase tracking-wide'>
                Total Current Balance
              </p>
              <div className='flex items-center gap-4 group'>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <AnimatedCounter amount={totalCurrentBalance || 0} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
