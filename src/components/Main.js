import React from 'react';
import PropTypes from 'prop-types';

import Press from './Press';
import Reels from './Reels';
import Contact from './Contact';
import resume from '../images/resume.jpg';
import biopic from '../images/LS1.jpg';
import { Link } from 'gatsby';

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
          <Reels />
          {close}
        </article>

        <article id="gallery" className={`${this.props.article === 'gallery' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gallery</h2><br></br>
          <Link to="/headshots">Headshots</Link><br></br>
          <Link to="/portraits">Portraits</Link><br></br>
          <Link to="/theatre">Theatre</Link><br></br>
          <Link to="/film">Film</Link><br></br>
          <Link to="/television">Television</Link>
          {close}
        </article>

        <article id="press" className={`${this.props.article === 'press' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Press />
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Contact />
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