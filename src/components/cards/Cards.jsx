import React from 'react'
import computer1 from '../../images/computer.png';
import computer from '../../images/computer2.png';
import { Link } from 'react-router-dom';


import './Cards.css';


const Cards = () => {
  return (
    <div className='card'>
        <div className='cards__a'>
            <a>All</a>
            <a>UI Design</a>
            <a>UX Design</a>
            <a>Product Design</a>
            <a>Articles</a>
            <a>Tutorials</a>
            <a>News</a>
        </div>

        <div className='cards'>
            <div className='umumiy'>
            <div className='cards__one'>
                <img src={computer1}/>
                <p>NOV 23 2020</p>
                <h3>This way is wrong about UI Design.</h3>
                <p>A quick guide to assisting users in the challenging steps from learning<br></br> about your podcast on the web. A quick guide to assisting users in the <br></br>challenging steps from learning about your podcast on the web.</p>
           <Link to="/details">LEARN MORE</Link>
           </div>
           
           
            <div className='cards__one'>
                <img src={computer}/>
                <p>NOV 23 2020</p>
                <h3>This way is wrong about UI Design.</h3>
                <p>A quick guide to assisting users in the challenging steps from learning<br></br> about your podcast on the web. A quick guide to assisting users in the <br></br>challenging steps from learning about your podcast on the web.</p>
                <Link to="/details">LEARN MORE</Link>
           </div>
           </div>

           <div className='umumiy'>
            <div className='cards__one'>
                <img src={computer1}/>
                <p>NOV 23 2020</p>
                <h3>This way is wrong about UI Design.</h3>
                <p>A quick guide to assisting users in the challenging steps from learning<br></br> about your podcast on the web. A quick guide to assisting users in the <br></br>challenging steps from learning about your podcast on the web.</p>
                <Link to="/details">LEARN MORE</Link>
           </div>
           
           
            <div className='cards__one'>
                <img src={computer}/>
                <p>NOV 23 2020</p>
                <h3>This way is wrong about UI Design.</h3>
                <p>A quick guide to assisting users in the challenging steps from learning<br></br> about your podcast on the web. A quick guide to assisting users in the <br></br>challenging steps from learning about your podcast on the web.</p>
                <Link to="/details">LEARN MORE</Link>
           </div>
           </div>

           <div className='umumiy'>
            <div className='cards__one'>
                <img src={computer1}/>
                <p>NOV 23 2020</p>
                <h3>This way is wrong about UI Design.</h3>
                <p>A quick guide to assisting users in the challenging steps from learning<br></br> about your podcast on the web. A quick guide to assisting users in the <br></br>challenging steps from learning about your podcast on the web.</p>
                <Link to="/details">LEARN MORE</Link>
           </div>
           
           
            <div className='cards__one'>
                <img src={computer}/>
                <p>NOV 23 2020</p>
                <h3>This way is wrong about UI Design.</h3>
                <p>A quick guide to assisting users in the challenging steps from learning<br></br> about your podcast on the web. A quick guide to assisting users in the <br></br>challenging steps from learning about your podcast on the web.</p>
                <Link to="/details">LEARN MORE</Link>
           </div>
           </div>





        </div>
    </div>
  )
}

export default Cards