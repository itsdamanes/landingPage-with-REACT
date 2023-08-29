import React from 'react'

export const Section = () => {
  return (
    <>
      {/*CARD SECTION*/}
      <div className= "display-flex" >


        <div className="card" style={{ width: '18rem' }}>

          <img src="https://tipsparatuviaje.com/wp-content/uploads/2019/03/chile-pais.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>

          <img src="https://farm1.static.flickr.com/194/463810391_b887ddb087_z.jpg?zz=1" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>

          <img src="https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2015/10/05164133/salar-de-tara_opt1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>

          <img src="https://imagenes.elpais.com/resizer/gDCERC8MIP2DDvHJ8DHurb0iqag=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XTIQ3AT3CVMV5K6UBQRVYCZZJA.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>

    </>
  )
}