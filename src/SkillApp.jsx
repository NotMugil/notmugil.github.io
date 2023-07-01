import { useState } from 'react'
import xicon from '/xicon.svg'
import './skill.css'


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
           <li class="nav-li"><a class="nav-text" href='education.html'>Education</a></li>
           <li class="nav-li"><a class="nav-text active" href='skills.html'>Skills</a></li>
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

    <container>
        <div class="container-el con1">
        <h1>Skills</h1>
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>JavaScript</h2>
            <h2>ReactJS</h2>
        </div>
        <div class="container-el con2">
        <h1>Hobbies</h1>
            <h2>Reading</h2>
            <h2>Cooking</h2>
            <h2>Programming</h2>
            <h2>Travel</h2>
            <h2>Football</h2>
        </div>
        <div class="container-el con3">
        <h1>Languages</h1>
        <h2>Reading</h2>
            <h2>Tamil</h2>
            <h2>English</h2>
            <h2>Hindi</h2>
            <h2>Japanese</h2>
        </div>
    </container>
      <p className="read-the-docs cgpt">
        I'm here to learn!
      </p>
    </main>
      
    </>
  )
}

export default App
