import Profile from '../../assets/profile.jpeg'

const Home = (props) => {
  return (
    <div className='container-fluid' id='homeProfile' ref={props.homeRef}>
      <h1>Naveen Bhatti, Jr.</h1>
      <h2>Software Engineer</h2>
      <img className='profileImage' src={Profile} alt='profile' />


    </div>
  );
}

export default Home;