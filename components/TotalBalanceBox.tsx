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
    <section className='card-modern p-8 md:p-10 animate-fade-in animate-glow-enhanced bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50'>
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
        {/* Chart Section */}
        <div className='relative'>
          <div className='w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-3xl bg-gradient-primary shadow-strong flex items-center justify-center relative group overflow-hidden animate-float'>
            <div className="absolute inset-0 bg-gradient-secondary opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <DoughnutChart balance={totalCurrentBalance || 0} />
          </div>

          {/* Floating indicators */}
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-medium animate-pulse">
            Active
          </div>
        </div>

        {/* Content Section */}
        <div className='flex-1 text-center lg:text-left space-y-8'>
          {/* Header */}
          <div className='flex items-center justify-center lg:justify-start gap-3'>
            <div className="relative">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <h2 className='text-xl lg:text-2xl font-bold text-gray-900 uppercase tracking-wide'>
              Account Overview
            </h2>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Connected Accounts */}
            <div className="card-interactive p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 font-medium'>Connected Banks</p>
                    <p className='text-3xl font-bold text-gray-900 mt-1'>{totalBanks || 0}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Balance */}
            <div className="card-interactive p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Total Balance</p>
                  <div className="text-3xl font-bold text-gradient-primary mt-1">
                    <AnimatedCounter amount={totalCurrentBalance || 0} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Real-time Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
