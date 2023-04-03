import React from "react";
import Buttons from "./components/Buttons"
import Headertext from "./components/Headertext"
import Button2 from "./components/Button2";
import Blogtext  from "./components/Blogtext";


function App() {
  return (
      <body>
      <div className='container'>

          <div className='disp'>
              <div>
                  <Headertext/>
              </div>
              <div>
                  <Buttons/>


                  <Button2/>
              </div>
          </div>

        <Blogtext/>
      </div>
      </body>


  )

}

export default App;
