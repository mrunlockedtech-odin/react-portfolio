
const Contact = (props) => {
  return (
    <div ref={props.contactRef} id="contactProfile">
      <section>
        <h1>Contact</h1>
        <p>Feel free to contact me for any projects or oppurtunities that might succeed from our collaboration through <a href="mailto:naveenjr@bhattids.com">email</a> </p>
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/naveen-bhatti-jr/">LinkedIn</a></li>
          <li><a href="https://github.com/mrunlockedtech-odin">Github</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;