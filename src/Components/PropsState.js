import React from 'react'

function PropsState({state, setState}) {
    const handleAddClick = () => {
        setState(state + 1)
    }
  return (
    <div>
      {state}
      <div>
        <button onClick={handleAddClick}>
            Count
        </button>
      </div>
    </div>
  )
}

export default PropsState
