import React from 'react'

const ErrorBanner = ({message}) => {
  // props로 내려주는 문구가 없을경우에 이렇게 사용해도 됨
  let errorMessage = message || "에러가 발생했습니다."
  return (
    <div
      style={{backgroundColor:"red"}}
    >{errorMessage}</div>
  )
}

export default ErrorBanner