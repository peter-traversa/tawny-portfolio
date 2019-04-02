import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import resume from '../images/resume.jpg';
import biopic from '../images/LS1.jpg';
import presspic from '../images/LS2.jpg';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="bio" className={`${this.props.article === 'bio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Bio</h2>
          <span className="image main"><img src={biopic} alt="" /></span>
          <p>Tawny Sorensen is a NYC based Actress, Writer, Filmmaker, and Producer. Her love for performance developed by the age of two when she began her dance training, and her passion for being on stage continued through her middle school drama club, local community theatre, high school dance theatre and high school musicals. She graduated Magna Cum Laude with her BA in Theatre/Performance from Fordham University at Lincoln Centre and received her MFA in Acting from the Actors Studio Drama School/ New School for Drama. Her studies at Fordham were based primarily on the techniques of Konstantin Stanislavski and Jerzy Grotowski, while her graduate studies focused on the Method and the techniques of Lee Strasberg. She also received additional training in Shakespeare and Acting for Film at the Stella Adler Conservatory in New York. She is a proud member of SAG-AFTRA and Actor's Equity.</p>
          <p>As a writer, her plays have been produced by Manhattan Repertory Theatre, Short Play Lab, and Spare Change Theatre Company in New York City. She has produced three of her original short films with her production company Over the High Moon Productions in association with Nobbs Ink. Her first original short film "The Cat's Cradle" premiered at the Twin Cities Film Festival in Minnesota on October 24, 2014 and went on to screen at 30 festivals in 21 states and 3 countries. The film won six awards and garnered five other nominations along the way. Her second short, a short satire "Covered" screened in over a dozen festivals across the US. Her first feature length screenplay "Anamnesia" was an Official Selection at several festivals and was nominated for Best Screenplay (unproduced) at the 2016 Northeast Film Festival Horror Fest.</p>
          <p>Outside of her time on-stage, on-screen, and behind the camera, she enjoys giving love and hugs to puppies, entertaining her nephews and nieces, snuggling up with a good book, creating exciting meals with random ingredients in her fridge, sketching, training for half-marathons and triathlons, raising funds for the Leukemia & Lymphoma Society, and screening films as a judge for several film festivals.</p>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={resume} alt="Tawny's performance resume" /></span>
          {close}
        </article>

        <article id="reels" className={`${this.props.article === 'reels' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Reels</h2>
          <h3 className='minor'>Dramatic</h3>
          <ReactPlayer url='https://vimeo.com/217247146' width='38rem' /><br></br>
          <h3 className='minor'>Comedic</h3>
          <ReactPlayer url='https://vimeo.com/217246477' width='38rem' />
          {close}
        </article>

        <article id="gallery" className={`${this.props.article === 'gallery' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gallery</h2>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="press" className={`${this.props.article === 'press' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Press</h2>
          <span className="image main"><img src={presspic} alt="" /></span>
          <a href="https://www.hollywoodreporter.com/video/natasha-lyonne-orange-is-new-black-stand-tawny-sorensen-watch-1188467" target="_blank" rel="noopener noreferrer" ><span><h4>Natasha Lyonne with 'Russian Doll' Stand-In Tawny Sorensen | Behind the Scenes</h4></span></a>
          <p>"She puts her heart and soul into this gig," [Natasha] Lyonne says of Sorensen, who also worked with the actress on 'Orange is the New Black.' "I know she's got my back and I've always got hers." 2/21/19 by The Hollywood Reporter Staff</p>
          <a href="https://www.hollywoodreporter.com/features/jeff-bridges-sterling-k-brown-5-stars-introduce-stand-ins-1187882" target="_blank" rel="noopener noreferrer" ><span><h4>"Stars and Stand-Ins: Hollywood's Unsung Heroes Step Into the Spotlight"</h4></span></a>
          <p>The Hollywood Reporter. By Rebecca Ford, producer. February 21, 2019</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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
          </form>
          <ul className="icons">
            <li><a href="https://www.instagram.com/tawnytwass/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.imdb.com/name/nm4399180/" target="_blank" rel="noopener noreferrer" className="icon fa-imdb"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main