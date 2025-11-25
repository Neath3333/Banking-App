'use client'
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp
        duration={2.0}
        end={amount}
        decimals={2}
        decimal="."
        separator="," 
        prefix="$"
      />
    </div>
  )
}

export default AnimatedCounter
