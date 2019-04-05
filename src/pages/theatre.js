import React from 'react';
import { Link } from 'gatsby';
import Pictures from '../components/Pictures';

import Layout from '../components/layout';
import pic01 from '../images/theatre/Black Snow 2.jpg';
import pic02 from '../images/theatre/Black Snow 9.jpg';
import pic03 from '../images/theatre/Exile.jpg';
import pic04 from '../images/theatre/Fire Escape.jpg';
import pic05 from '../images/theatre/Hamlet 1.jpg';
import pic06 from '../images/theatre/Hamlet 2.jpg';
import pic07 from '../images/theatre/Hamlet 3.jpg';
import pic08 from '../images/theatre/Hippolytus 1.jpg';
import pic09 from '../images/theatre/Hippolytus 2.jpg';
import pic10 from '../images/theatre/Its My Party.jpg';
import pic11 from "../images/theatre/It's My Party 2.jpg";
import pic12 from '../images/theatre/Last Call 1.jpg';
import pic13 from '../images/theatre/Last Call 2.jpg';
import pic14 from '../images/theatre/Last Call 3.jpg';
import pic15 from '../images/theatre/Life of Leisure Reading.jpg';
import pic16 from '../images/theatre/Senior Night 1.jpg';
import pic17 from '../images/theatre/Senior Night 3.jpg';
import pic18 from '../images/theatre/Senior Night 4.jpg';
import pic19 from '../images/theatre/The Blue Room 1.jpg';
import pic20 from '../images/theatre/The Blue Room 2.jpg';

const images = [pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,];

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <h1>Theatre</h1>
    <Pictures images={images} />
  </Layout>
)

export default SecondPage
