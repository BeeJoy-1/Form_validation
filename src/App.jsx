import { useState } from "react"


function App() {

  const [Info, setInfo] = useState({
    Name : "",
    Email : "",
    Mobile : "",
    Password : ""
  })
  const [error, setError] = useState({
    Name : "",
    Email : "",
    Mobile : "",
    Password : ""
  })
  const [Result, setResult] = useState({
    Name : "",
    Email : "",
    Mobile : "",
    Password : ""
  })

  let handleform = (e) => {
    let {name, value} = e.target
    setInfo({...Info, [name]: value})
  }

  let submitForm = () => {
    if(!Info.Name){
      setError({Name : "Please Enter Your Name *"})
    }else if (!Info.Email){
      setError({Email : "Please Enter Your Email *"})
    }else if (!Info.Mobile){
      setError({Mobile : "Please Provide Your Number *"})
    }else if (!Info.Password){
      setError({Password : "Enter A Password *"})
    }else {
      setResult(Info)
    }
  }

  return (
    <>
      <div className="Main">
          <div className="Wrapper">
              <div className="Form">
                  <div className="Heading">
                    <h1>Form</h1>
                  </div>
                    <input onChange={handleform} type="text" name="Name" placeholder="Name" />
                    <p className="error">{error.Name}</p>
                    <input onChange={handleform} type="email" name="Email" placeholder="Email" />
                    <p className="error">{error.Email}</p>
                    <input onChange={handleform} type="number" name="Mobile" placeholder="Number" />
                    <p className="error">{error.Mobile}</p>
                    <input onChange={handleform} type="password" name="Password" placeholder="Password" />
                    <p className="error">{error.Password}</p>
                  <div className="btn">
                      <button className="form_btn" onClick={submitForm}>Submit</button>
                  </div>
              </div>
              <div className="Result">
                  <div className="Heading">
                    <h1>Your Data</h1>
                  </div>
                  <div className="Info">
                    <h2>Firstname : <span>{Result.Name}</span></h2>   
                    <h2>Email : <span>{Result.Email}</span></h2>   
                    <h2>Mobile : <span>{Result.Mobile}</span></h2>   
                    <h2>Password : <span>{Result.Password}</span></h2>   
                  </div>
              </div>
          </div>
      </div>
    </>

  )
}

export default App
