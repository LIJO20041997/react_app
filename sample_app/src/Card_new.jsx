import profilePic from './assets/kholi.jpg'
import './index.css'


function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt='Profile Picture'/>
            <h2 className='card-title'>Virat Kholi</h2>
            <p className='card-text'>Virat Kohli  born 5 November 1988 is an Indian international cricketer who plays Test ODI and T20 Cricker</p>

        </div>
    );
}

export default Card



