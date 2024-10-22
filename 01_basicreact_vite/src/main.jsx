import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


function MyApp() {
  return (
    <>
      <h1>Hiiii</h1>
    </>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click on the google'
// }

const anotherUser = "React Learning" 


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click Me for google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />

  </>

  // reactElement

)
