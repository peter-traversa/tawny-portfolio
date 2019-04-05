import React from 'react';
import { Link } from 'gatsby';
import Pictures from '../components/Pictures';

import Layout from '../components/layout';
import pic01 from "../../src/images/film/20181214_152109.jpg";
import pic02 from "../../src/images/film/20181214_161822.jpg";
import pic03 from "../../src/images/film/20181214_161926.jpg";
import pic04 from "../../src/images/film/20181214_163609.jpg";
import pic05 from "../../src/images/film/AmericanThief.jpg";
import pic06 from "../../src/images/film/Covered PostProduction.png";
import pic07 from "../../src/images/film/Covered.jpg";
import pic08 from "../../src/images/film/DateandTime1.png";
import pic09 from "../../src/images/film/DateandTime2.png";
import pic10 from "../../src/images/film/Hindmind1.jpg";
import pic11 from "../../src/images/film/Hindmind2.jpg";
import pic12 from "../../src/images/film/Hindmind3.jpg";
import pic13 from "../../src/images/film/Road Dove 1.jpg";
import pic14 from "../../src/images/film/Road Dove 2.jpg";
import pic15 from "../../src/images/film/The Cat's Cradle 2.jpg";
import pic16 from "../../src/images/film/The Cat's Cradle 4.jpg";
import pic17 from "../../src/images/film/The Cats Cradle 3.jpg";
import pic18 from "../../src/images/film/The Cats Cradle Still.png";
import pic19 from "../../src/images/film/WhatFreshHell1.png";
import pic20 from "../../src/images/film/WhatFreshHell2.jpg"

const images = [pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,]

const Film = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <h1>Film</h1><br></br>
    <Pictures images={images} />
  </Layout>
)

export default Film
