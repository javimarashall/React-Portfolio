//import {Link} from 'react-router-dom'
import "./Project.css"

const Cards = ({ data }) => {

    return (
        <>
            {
                data ? (<div class="card-deck justify-content-center ml-5">
                <div className="card project-card">
                <img src={data.image} className="card-img-top" alt="Project-Photo" />
                <div className="card-body mx-auto">
                    
                        <h3 className="card-title">{data.projectName}</h3>
                    
                   
                </div>
                <ul className="list-group ">
                    <li className="list-group-item">{data.description}</li>
                   
                </ul>
                <div className="card-body text-center">
                    <a href={data.deployLink} className="card-link">Deploy Link</a>
                    <a href={data.repoLink} className="card-link">Repository Link</a>
                </div>
                </div>
            </div>) : null
            }
            
        </>
    )
}

export default Cards;



