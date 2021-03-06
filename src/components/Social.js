import React from 'react';

const Social = () => {
  return (
    <>
      <h2 className="major">Social</h2>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul className="icons">
            <li><a href="https://www.instagram.com/tawnytwass/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a><span>{"  "}Instagram</span></li><br></br><br></br>
            <li><a href="https://www.imdb.com/name/nm4399180/" target="_blank" rel="noopener noreferrer" className="icon fa-imdb"><span className="label">IMDB</span></a><span>{"  "}IMDB</span></li><br></br><br></br>
            <li><a href="https://vimeo.com/overthehighmoon" target="_blank" rel="noopener noreferrer" className="icon fa-film"><span className="label">Production Company</span></a><span>{"  "}Over the High Moon Productions</span></li><br></br><br></br>
          </ul>
    </>
  )
}

export default Social