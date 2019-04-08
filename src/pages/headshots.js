import React from 'react';
import { Link } from 'gatsby';
import Pictures from '../components/Pictures';

import Layout from '../components/layout';
import pic01 from '../images/headshots/EJS Photography 2.jpg';
import pic02 from '../images/headshots/EJS Photography.jpg';
import pic03 from '../images/headshots/IMG_2774 Smaller.jpg';
import pic04 from '../images/headshots/Jin 11.jpg';
import pic05 from '../images/headshots/Zack DeZon Photography.jpg';

const images = [pic01, pic02, pic03, pic04, pic05];

const Headshots = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <h1>Headshots</h1><br></br>
    <div>
      <Pictures images={images} />
    </div>
  </Layout>
)

export default Headshots