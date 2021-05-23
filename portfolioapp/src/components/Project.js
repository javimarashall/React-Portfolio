import {Link} from 'react-router-dom'
import "./Project.css"

const Cards = ({ data }) => {

    return (
        <>
            {
                data ? (<div class="card-deck justify-content-center ml-5">
                <div className="card project-card">
                <img src={data.image} className="card-img-top" alt="Project Photo" />
                <div className="card-body mx-auto">
                    
                        <h5 className="card-title">{data.projectName}</h5>
                    
                   
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.description}</li>
                   
                </ul>
                <div className="card-body">
                    <a href={data.deployLink} className="card-link">Deploy Link</a>
                    <a href="#" className="card-link">{data.repoLink}</a>
                </div>
                </div>
            </div>) : null
            }
            
        </>
    )
}

export default Cards;


//pass data to project component

//router nest - swtich pagest - pass the data via - history push

