import React from 'react'

function Body({children}) {
  return (<>
  <section className="min-h-screen h-auto w-full m-0 p-0">
    {children}
  </section>
  </>

  )
}

export default Body;