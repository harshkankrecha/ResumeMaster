import React from 'react'
//
function Download() {
  const getDocument = async(event) =>{
    event.preventDefault();
    const res = await fetch("/main/fetch-pdf",{
        method:"GET",        
    })

  }
  return (
    <div>
      <h3>Your resume is ready..</h3> 
      <button type="submit">Download</button>
    </div>
  )
}

export default Download
