import ResumeFile from '../../assets/NaveenBhatti-Resume.pdf'
import Document from '../../assets/document.svg'

const Resume = (props) => {
  return ( 
    <div ref={props.resumeRef} id="resumeProfile">
      <img src={Document} alt="document icon" />
      <h1>Resume</h1>
      <p>Click the link to download <a href={ResumeFile}>my resume</a></p>
    </div>
   );
}
 
export default Resume;