import { useState } from 'react'
import xicon from '/xicon.svg'
import './books.css'

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
           <li class="nav-li"><a class="nav-text" href='skills.html'>Skills</a></li>
           <li class="nav-li"><a class="nav-text active" href='books.html'>Books</a></li>
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
        <h1>Books I've Read</h1>
        <div class="container">
  <main class="grid">
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668146336i/63275225.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ankur Warikoo</h3>
        <p>Get Epic Shit Done</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Colleen Hoover</h3>
        <p>It Ends With Us</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Colleen Hoover</h3>
        <p>It Starts With Us</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388189325i/43877.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Robin Sharma</h3>
        <p>The Monk Who Sold His Ferrari</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Mark Manson</h3>
        <p>The Subtle Art of Not Giving a F*ck</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>James Clear</h3>
        <p>Atomic Habits</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611937942i/56732449.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ali Hazelwood</h3>
        <p>The Love Hypothesis</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1481566824i/27213238.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Sally Thorne</h3>
        <p>The Hating Game</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618487915i/55817097.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ana Huang</h3>
        <p>Twisted Love</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1625752847i/56653002.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ana Huang</h3>
        <p>Twisted Games</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641478689i/56688531.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ana Huang</h3>
        <p>Twisted Hate</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654797490i/60217302.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ana Huang</h3>
        <p>Twisted Lies</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663874437i/61229235.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ana Huang</h3>
        <p>King of Wrath</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680192054i/62994279.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Ana Huang</h3>
        <p>King of Pride</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671865608i/74045390.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Lauren Asher</h3>
        <p>The Fine Print</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674743453i/86767939.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Lauren Asher</h3>
        <p>Terms and Conditions</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532353695i/33912183.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Makoto Shinkai</h3>
        <p>She and her Cat</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556604137i/34466963.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Matthew Walker</h3>
        <p>Why we sleep</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1670030190i/63912589.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Raj Shamani</h3>
        <p>Build don't talk</p>
      </div>
    </article>
    <article>
      <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Hector Garcia</h3>
        <p>Ikigai</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632597571i/17788401.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>Colleen Hoover</h3>
        <p>Ugly Love</p>
      </div>
    </article>
    <article>
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg" alt="Sample photo" class="book-img"></img>
      <div class="text">
        <h3>A.P.J. Abdul Kalam</h3>
        <p>Wings of Fire: An Autobiography</p>
      </div>
    </article>
  </main>
</div>
      </div>

      <p className="read-the-docs cgpt">
        I love reading books!
      </p>
    </main>
      
    </>
  )
}

export default App
