import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import resume from '../images/resume.jpg';
import biopic from '../images/LS1.jpg';
import presspic from '../images/presspic.jpg';
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
          <h2 className="major">Reels</h2>
          <h3 className='minor'>Dramatic</h3>
          <ReactPlayer url='https://vimeo.com/217247146' width='35rem' />
          <br></br>
          <h3 className='minor'>Comedic</h3>
          <ReactPlayer url='https://vimeo.com/217246477' width='35rem' />
          {close}
        </article>

        <article id="gallery" className={`${this.props.article === 'gallery' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gallery</h2>
          <Link to="/headshots">Headshots</Link><br></br>
          <Link to="/portraits">Portraits</Link><br></br>
          <Link to="/theatre">Theatre</Link><br></br>
          <Link to="/film">Film</Link><br></br>
          <Link to="/television">Television</Link>
          {close}
        </article>

        <article id="press" className={`${this.props.article === 'press' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Press</h2>
          <span className="image main"><img src={presspic} alt="" /></span>
          <a href="https://www.hollywoodreporter.com/video/natasha-lyonne-orange-is-new-black-stand-tawny-sorensen-watch-1188467" target="_blank" rel="noopener noreferrer" ><span><h4>Natasha Lyonne with 'Russian Doll' Stand-In Tawny Sorensen | Behind the Scenes</h4></span></a>
          <p>"She puts her heart and soul into this gig," [Natasha] Lyonne says of Sorensen, who also worked with the actress on 'Orange is the New Black.' "I know she's got my back and I've always got hers." 2/21/19 by The Hollywood Reporter Staff</p>
          <a href="https://www.hollywoodreporter.com/features/jeff-bridges-sterling-k-brown-5-stars-introduce-stand-ins-1187882" target="_blank" rel="noopener noreferrer" ><span><h4>"Stars and Stand-Ins: Hollywood's Unsung Heroes Step Into the Spotlight"</h4></span></a>
          <p>The Hollywood Reporter. By Rebecca Ford, producer. February 21, 2019</p>
          <a href="https://nypost.com/2019/02/14/life-as-natasha-lyonnes-russian-doll-double-big-wigs-f-bombs-and-sex/" target="_blank" rel="noopener noreferrer" ><span><h4>"Life as Natasha Lyonne’s ‘Russian Doll’ double: Big Wigs, F-bombs and Sex"</h4></span></a>
          <p>The New York Post. By Raquel Laneri. Sep 13, 2017</p>
          <a href="https://www.youtube.com/watch?v=NLMZpJcisgI" target="_blank" rel="noopener noreferrer" ><span><h4>INSIDE THE WRITER'S BUBBLE Interview. Sep 13, 2017.</h4></span></a>
          <br></br>
          <a href="https://theindependentcritic.com/the_cats_cradle" target="_blank" rel="noopener noreferrer" ><span><h4>THE INDEPENDENT CRITIC, Richard Propes</h4></span></a>
          <p>"Sorensen comes off practically immersed in this story and how it all unfolds. It makes sense that she created the original story and stage play and clearly understands even the most intimate aspects of these characters yet she also possesses a naturalness, sort of lights up the screen, while also adding a strong emotional element to the film's later scenes. (...) 'The Cat's Cradle' is a valuable film telling truths and sharing insights in a way leaves you feeling its words and actions long after the closing credits have rolled."</p>
          <a href="http://sonic-cinema.com/movie/the-cats-cradle-short/" target="_blank" rel="noopener noreferrer" ><span><h4>SONIC CINEMA, Brian Skutle</h4></span></a>
          <p>"The performances by Sorensen and Vinas throughout the film are strong, but the final minutes are especially powerful as they put all their cards on the table, and learn a lot about how each one is going to deal with a crossroads in their lives together. It’s a moment that all couples have at times in their lives together, and Spaltro and Sorensen let it play out in a way that’s meaningful for us to experience."</p>
          <h4>BOOM! Film Reviews. 4/5 Rating. Nominated for Best Actress and Best Film. (Original review no longer online)</h4>
          <p>"Authentic and compelling dialogue. Jim and Amy's conversations felt grounded and realistic which allows the audience to connect with the characters and the story. (...) Sorensen delivered a natural and convincing performance. She was able to portray lighter moments as well as dramatic and stressful ones, impressively. (...) The Cat's Cradle is a well directed and will written short film with compelling dialogue and impressive performances."</p>
          <a href="https://adamthemoviegod.com/2017/07/16/cats-cradle-review/" target="_blank" rel="noopener noreferrer" ><span><h4>Adam the Movie God Review. 8.5/10 Rating. July 16, 2017</h4></span></a>
          <p>"The Cat’s Cradle is an engaging, thought-provoking and important Drama from first-timer, Tawny Sorensen. It’s well shot, most of the soundtrack shines through brightly and each of the performances command your attention. Both Sorensen and Vinas have solid chemistry together and their dialogue flows organically."</p>
          <a href="https://www.indyred.com/the-cats-cradle-review.html" target="_blank" rel="noopener noreferrer" ><span><h4>IndyRed Review. 3.5/5 Rating.</h4></span></a>
          <p>"You're hit with it. BANG! No way to turn back the clock. Picture a slow acceleration from zero to sixty. Paced out nicely and never pushing you back into your seat. Then, at that last minute you go from sixty to one twenty in six seconds. That's how "The Cat's Cradle" is paced, and it works like a charm. Nabil Vinas and Tawny Sorensen as Jim and Amy also feel perfectly cast. They dance around one and other just as you'd expect a married couple to do. When they begin to fight, you really feel for both of them, and maybe even understand a little why they did/do what they did/do. No question in my mind. "The Cat's Cradle" may be well written, but it's the acting that awesomely pushes it through."</p>
          <a href="http://onefilmfan.com/short-film-review-the-cats-cradle/" target="_blank" rel="noopener noreferrer" ><span><h4>ONE FILM FAN. August 17, 2017</h4></span></a>
          <p>"Sorensen does a wonderful job as Amy, a strong-willed, independent woman and loving wife who has no hesitations about how she feels about the concept of children being introduced to what she might actually perceive is already her ideal marriage. Her playfulness with Jim on what should be a freely romantic, re-bonding encounter turns south and becomes a confessional, an unanticipated and massively awkward one at that, which puts her on the defensive and the hot seat to very unnerving degrees as everything floods out. This highly volatile session is very believably enacted by Sorensen. (...) “The Cat’s Cradle” is one unwavering, candid, sincere, and potently affecting view of how burying secrets and being dishonest in a relationship can be lead to heartbreak, regret, disappointment, and even a questioning of what was or was not mutual aspiration, the coming back from which may truly prove to be the biggest challenge that tests what should always exist at the center of it all–love."</p>
          <a href="https://www.reelromp.com/the-cats-cradle.html" target="_blank" rel="noopener noreferrer" ><span><h4>REEL ROMP REVIEW.</h4></span></a>
          <p>"[The Cat's Cradle is [f]ull of drama, a little comedy and some electric acting. (...) The real beauty of this movie is within the acting itself. Our two leads manage to pull off quite the performance. "The Cat's Cradle" feels more like you're a fly on the wall during a real incident, not a fictional film. The anger and sadness of Jim, played by Nabil Vinas comes through loud and clear. (...) This is matched with an excellent performance from Tawny Sorensen as Amy. As the writer of this production, she completely understood and nailed the fear and guilt required for such a part. The two play off one and other like they truly have a history and something to lose.</p>
          <a href="https://filmshortage.com/dailyshortpicks/the-cats-cradle/" target="_blank" rel="noopener noreferrer" ><span><h4>FILM SHORTAGE: DAILY SHORT PICKS. JULY 15, 2017</h4></span></a>
          <br></br>
          <a href="https://www.youtube.com/watch?v=Sl5XeMfWRXE" target="_blank" rel="noopener noreferrer" ><span><h4>THE LONG ISLAND INTERNATIONAL FILM EXPO. Red Carpet Interview. August 7, 2015.</h4></span></a>
          <br></br>
          <a href="https://patch.com/new-jersey/newbrunswick/tawny-sorensens-important-short-film-cats-cradle-premieres-sunday-june-14-2015-new-jersey" target="_blank" rel="noopener noreferrer" ><span><h4>Tawny Sorensen's important short film "The Cat's Cradle" premieres on Sunday, June 14 at the 2015 New Jersey International Film Festival!</h4></span></a>
          <p>By Al Nigrin, New Jersey/ New Brunswick Patch Poster | Jun 9, 2015. Interview Part 1.</p>
          <a href="https://patch.com/new-jersey/newbrunswick/tawny-sorensens-important-short-film-cats-cradle-premieres-sunday-june-14--0" target="_blank" rel="noopener noreferrer" ><span><h4>Tawny Sorensen's important short film "The Cat's Cradle" premieres on Sunday, June 14 at the 2015 New Jersey International Film Festival!</h4></span></a>
          <p>By Al Nigrin, New Jersey/ New Brunswick Patch Poster | Jun 9, 2015. Interview Part 2.</p>
          <a href="https://www.youtube.com/watch?v=nFwPRE9JsFc" target="_blank" rel="noopener noreferrer" ><span><h4>TWIN CITIES INTERNATIONAL FILM FESTIVAL. Red Carpet Interview. November 15, 2014.</h4></span></a>
          <br></br>
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