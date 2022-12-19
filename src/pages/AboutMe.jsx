import '../App.css'

const AboutMe = ()=> {
    return (
      <div >
        <div className="about-me">
          <h2 className='proj-name'>ABOUT ME</h2>

          <div className='about-me-container'>
            <section className="about-column about-column-a">
              <img alt='' className='profile-pic' src={require('../assets/picture.jpg')}/>
            </section>
            <section className="about-column">
              <p id='aboutme-text'>
Hi, Im Olivia. A Software engineer and part-time real estate agent who is passionate about creating innovative, user-friendly solutions. As a Realtor, I successfully built and ran my own business from the ground up. That experience taught me the importance of detailed planning, balancing multiple projects, and how to work with others to find a solution. I hope to take my skillset into a fast-paced engineering environment.
              </p>

              <div className='resume-container'>
                <a className='resume-button-container' rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/10-7Qo0szS23Y9q0e403LyT5suIKab26F/view?usp=sharing'>VIEW RESUME</a>
                <br></br>
              </div>
            </section>
          </div>

        </div>
      </div>
    );
  }

  export default AboutMe
