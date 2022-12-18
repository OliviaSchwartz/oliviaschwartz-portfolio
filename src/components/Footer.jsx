

const Footer= (props) => {
  return (
    <div className='footer'>
      <p className='footer-text'>CONNECT WITH ME:</p>
      <div className='footer-icon-container'>
      <a rel="noreferrer" target="_blank" alt="linkedin" href='https://www.linkedin.com/in/olivia-c-schwartz/'><img className='footer-icon'  src={require('../assets/linkedin.png')} /></a>
      <a rel="noreferrer" target="_blank" alt="github" href='https://github.com/OliviaSchwartz'><img className='footer-icon' src={require('../assets/github-white.png')}/></a>
      <a rel="noreferrer" target="_blank" alt= "email" href="mailto:ocmooney@gmail.com"><img className='footer-icon' src={require('../assets/email.png')}/></a>
      </div>

    </div>
  );
}

export default Footer;
