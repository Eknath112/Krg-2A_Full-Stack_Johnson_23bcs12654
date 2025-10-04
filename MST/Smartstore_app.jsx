import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Productcard({name, price, description, instock}){
  return(
     <div style={{
      display: "inline-block",   
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "12px",
      width: "250px",
      textAlign: "center",
      verticalAlign: "top" 
    }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      {instock ? (
        <button style={{ padding: "8px 16px" }}>Buy Now</button>
      ) : (
        <p style={{ color: 'greenyellow'}}>Out of Stock</p>
      )}
    </div>

  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div style={{ textAlign: "center" }}>
      <Productcard
        name="Multigrain Dalia"
        price={30.99}
        description="Premium Quality multigrain Dalia, rich in fibres, and necessary nutrients. "
        instock={true}
      />
      <Productcard
        name="Cloud House"
        price={999999999999999}
        description="Floating House in the sky support by futuretech jet thrusters and levitation technology ."
        instock={false}
      />
      <Productcard
        name="Clock"
        price={200}
        description="A clock to see time analog+sundial (no battrey-> keep in sun, if night -> just sleep!)."
        instock={true}
      />
    </div>
    
  )
}

export default App
