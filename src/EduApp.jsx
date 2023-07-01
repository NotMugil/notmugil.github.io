import { useState } from 'react'
import xicon from '/xicon.svg'
import './edu.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <div className="card">
        <nav>
          <ul class="nav-ul">
           <li class="nav-li"><a class="nav-text" href='index.html'>Home</a></li>
           <li class="nav-li"><a class="nav-text" href='work.html'>Work</a></li>
           <li class="nav-li"><a class="nav-text active" href='education.html'>Education</a></li>
           <li class="nav-li"><a class="nav-text" href='skills.html'>Skills</a></li>
           <li class="nav-li"><a class="nav-text" href='books.html'>Books</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div>
          <a href="https://www.instagram.com/notmugil/" target="_blank">
            <img src={xicon} className="logo" alt="Vite logo"/>
          </a>
      </div>

      <div class="main-text">
        <h1>Education</h1>

    <container>
        <div class="container-el con1">
            <h2>Bachelor of Technology</h2>
            <h3>Bharath University of Higher Education and Research</h3>
            <h4>2022 - Present</h4>
        </div>
        <div class="container-el con2">
            <h2>Higher Secondary Education</h2>
            <h3>Kittappa Municipal Higher Secondary School · Mayiladuthurai</h3>
            <h4>2020 - 2022</h4>
        </div>
        <div class="container-el con3">
            <h2>Secondary Education</h2>
            <h3>Guru Gnana Sambandar Mission Matric Higher Secondary School · Mayiladuthurai</h3>
            <h4>2015 - 2020</h4>
        </div>
    </container>
       
        
      </div>

      <p className="read-the-docs cgpt">
        I'm here to learn!
      </p>
    </main>
      
    </>
  )
}

export default App
