import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <p>Version 1.0.0</p>
      <p>
        React build by following along with TraversyMedia's React crash course
        2021
      </p>
      <Link to="/" className='link'>Go Back</Link>
    </div>
  );
};

export default About;
