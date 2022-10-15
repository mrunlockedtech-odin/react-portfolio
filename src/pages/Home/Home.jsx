import Profile from '../../assets/profile.jpeg'

const Home = () => {
  return (
    <div className='container-fluid' id='homeProfile'>
      <h1>Naveen Bhatti, Jr.</h1>
      <img className='profileImage' src={Profile} alt='profile' />
      <h2>Software Engineer</h2>

    </div>
  );
}

export default Home;