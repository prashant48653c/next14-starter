'use client'
import { BallTriangle } from 'react-loader-spinner'

const loading = () => {
  return (
  
<>
<BallTriangle
  height={"50vh"}
  width={"90%"}
  radius={5}
  color="blue"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperclassName=""
  visible={true}
  />
</>





  )
}

export default loading