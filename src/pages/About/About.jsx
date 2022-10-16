import Picture from '../../assets/profile.jpeg'
const About = (props) => {
  return (
    <div ref={props.aboutRef} className='aboutSection'>
      <h1>Naveen Bhatti, Jr.</h1>
      <img className='profileImage' src={Picture} alt="naveen-profile" />
      <div className='aboutDesc'>
        <p>
          I am an aspiring software engineer that desires to create processes that increase efficiency as much as possible for all stakeholders of my tasks. I want to push myself towards challenges that require me to increase my knowledge of the subject while completing the task at hand. My analytical mind set and background of IT systems and Electrical Engineering allow me to bring a perspective of both a business and engineering mindset.
        </p>
        <p>
          In my personal time, I primarily like to work with computers, relax with my family and friends, and serve on my Church's media team to conduct the lights, live stream, sound, and other technicial aspects of the worship.
        </p>
      </div>


    </div>
  );
}

export default About;