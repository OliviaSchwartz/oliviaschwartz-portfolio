function Portfolio(props) {

    return (
        <div className='portfolio'>

          <div className='portfolio-text-container'>
            <h1 className='portfolio-subtitle'>PORTFOLIO</h1>
            <h2 className="portfolio-text">Click on a project below for more information.</h2>
          </div>

        <div className="portfolio-display">

              <div className="thumbnail-container">
                < div className='portfolio-link'>
                  <p className="project-name">Lupus Link</p>
                  <img className='thumbnail-images' src={require(`../assets/lupuslink.png`) }/>
                  <p className='text'>Lupus Link is a full-stack PERN web application. Lupus Link allows users to create their own accounts, track their Lupus symptoms, and connect with others in the community message board. It also provides user with clinical trials that are currently recruiting and different educational resources.</p>
                  <div className='details-button-container'>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://github.com/OliviaSchwartz/Lupus_Link'>SEE CODE</a>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://lupus-link.herokuapp.com/'>VISIT WEBSITE</a>
            </div>
                  </div>
                 </div>


              <div className="thumbnail-container">
                < div className='portfolio-link'>
                  <p className="project-name">Running Log</p>
                  <img className='thumbnail-images' src={require(`../assets/run.png`) }/>
                  <p className='text'>This project is a full-stack application that utilizes Mongoose, Express, React and Node. This application allows you to log and keep track of runs, as well as write about your training progress in a blog format.</p>
                  <div className='details-button-container'>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://github.com/OliviaSchwartz/Running_Log'>SEE CODE</a>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://olivias-run-log.herokuapp.com/'>VISIT WEBSITE</a>
            </div>
                  </div>
                </div>

             <div className="thumbnail-container">
                <div className='portfolio-link'>
                <p className="project-name">Memory Game</p>
            <img className='thumbnail-images' src={require(`../assets/memory.png`) }/>
            <p className='text'>A flashcard memory game built out with HTML, CSS and Vanilla Javascript </p>
            <div className='details-button-container'>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://github.com/OliviaSchwartz/Memory_Game'>SEE CODE </a>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://olivias-memory-game.surge.sh/index.html'>VISIT WEBSITE </a>
            </div>
            </div>
        </div>


        <div className="thumbnail-container">
                < div className='portfolio-link'>
                <p className="project-name">Ride Guide</p>
                  <img className='thumbnail-images' src={require(`../assets/ride.png`) }/>
                    <p className='text'>Ride Guide is a MERN stack app that will help park attendees make the most of their day at Full-Stack Kingdom. With the ability to create ride wish lists according to wait times, height restrictions, ratings, and more, Ruide Guide is the ultimate theme park companion.</p>
                    <div className='details-button-container'>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://github.com/OliviaSchwartz/Ride-Guide'>SEE CODE </a>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href='https://full-stack-kingdom.herokuapp.com/'>VISIT WEBSITE </a>
            </div>
                  </div>
                </div>

    </div>
</div>
    )
}


  export default Portfolio
