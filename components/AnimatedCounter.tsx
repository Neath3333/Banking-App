'use client'
import CountUp from 'react-countup';

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div><CountUp
    duration={2.7}
     end={amount}
     decimal=","
     decimals={2}
     prefix="$"
      />
      </div>
  )
}

export default AnimatedCounter