import React, { useContext } from 'react'
import { Context } from './ContextComp'

function Counter() {
const {counts, user, setCounts} = useContext(Context);
console.log(counts);

  return (
    <div>
      {counts}
      
    </div>
  )
}

export default Counter
