import { useState } from 'react'
import xicon from '/xicon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <div className="card">
        <nav>
          <ul class="nav-ul">
           <li class="nav-li"><a class="nav-text active" href='index.html'>Home</a></li>
           <li class="nav-li"><a class="nav-text" href='work.html'>Work</a></li>
           <li class="nav-li"><a class="nav-text" href='education.html'>Education</a></li>
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
        <h1>just keep swimming.</h1>
        <p>
          Greetings! I'm Mugilan, a passionate student, FOSS enthusiast, and web developer. Proficient in HTML, CSS, and JavaScript, I thrive on creating captivating digital experiences. Eager to expand my horizons, I have a relentless appetite for learning new technologies. When I'm not immersed in coding, you can find me engrossed in books, gaming adventures, or experimenting with culinary delights. Join me on my portfolio website, where innovation meets creativity, and together, we'll make the digital world come alive.
        </p>
      </div>

      <p className="read-the-docs cgpt">
        Thanks ChatGPT!
      </p>
    </main>
      
    </>
  )
}

export default App
