import {Link} from 'react-router-dom'

const Cards = ({ data }) => {

    return (
        <>
            {
                data ? (<div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link to={`/project/`} >
                        <h5 className="card-title">{data.projectName}</h5>
                    </Link>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.description}</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">{data.deployLink}</a>
                    <a href="#" className="card-link">{data.repoLink}</a>
                </div>
            </div>) : null
            }
            
        </>
    )
}

export default Cards;


//pass data to project component

//router nest - swtich pagest - pass the data via - history push

