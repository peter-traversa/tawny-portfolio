import React from 'react';
import { Link } from 'gatsby';
import Pictures from '../components/Pictures';

import Layout from '../components/layout';
import pic01 from '../images/portraits/AlexisHolloway1.jpg';
import pic02 from '../images/portraits/AlexisHolloway3.jpg';
import pic03 from '../images/portraits/EJS Photography.jpg';
import pic04 from '../images/portraits/IMG_2581.jpg';
import pic05 from '../images/portraits/IMG_9009.jpg';
import pic06 from '../images/portraits/Jin Hwang2.jpg';
import pic07 from '../images/portraits/Jin Hwang3.jpg';
import pic08 from '../images/portraits/MaggieTakyar1.jpg';
import pic09 from '../images/portraits/MaggieTakyar2.jpg';
import pic10 from '../images/portraits/MaggieTakyar3.jpg';
import pic11 from '../images/portraits/MaggieTakyar4.jpg';
import pic12 from '../images/portraits/MaggieTakyar5.jpg';
import pic13 from '../images/portraits/TaraLeighPhotography1.jpg';
import pic14 from '../images/portraits/TaraLeighPhotography2.jpg';
import pic15 from '../images/portraits/TheBlasiaCollection.jpg';
import pic16 from '../images/portraits/TiffenyGarciaPhotography.jpg';
import pic17 from '../images/portraits/ZachDeZon.jpg';

const images = [pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17,]

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <h1>Portraits</h1><br></br>
    <Pictures images={images} />
  </Layout>
)

export default SecondPage
