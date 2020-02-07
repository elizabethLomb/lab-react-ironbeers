import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="container mt-4 pt-4">
      <Link to="/beers">
        <div className="card mb-4">
          <img src="../images/beers.png" className="card-img-top" alt=""/>
          <div className="card-body">
            <h3 className="card-title">All Bears</h3>
            <p className="card-text">Suspendisse dapibus risus sed imperdiet gravida. Quisque eget mauris nunc. Sed augue libero, lacinia at malesuada iaculis, pharetra ac nisi. Quisque aliquam scelerisque semper. Quisque eu metus faucibus, convallis lacus sed, aliquet augue. Nulla vel felis consectetur risus iaculis dapibus nec eu nibh. Nullam rhoncus magna id velit vulputate, a cursus tellus sollicitudin. Maecenas ultricies nec lacus et volutpat. Cras vulputate metus in gravida sodales.</p>
          </div>
        </div>
      </Link>

      <Link to="/random-beer">
        <div className="card mb-4">
          <img src="../images/random-beer.png" className="card-img-top" alt=""/>
          <div className="card-body">
            <h3 className="card-title">Random Beer</h3>
            <p className="card-text">Suspendisse dapibus risus sed imperdiet gravida. Quisque eget mauris nunc. Sed augue libero, lacinia at malesuada iaculis, pharetra ac nisi. Quisque aliquam scelerisque semper. Quisque eu metus faucibus, convallis lacus sed, aliquet augue. Nulla vel felis consectetur risus iaculis dapibus nec eu nibh. Nullam rhoncus magna id velit vulputate, a cursus tellus sollicitudin. Maecenas ultricies nec lacus et volutpat. Cras vulputate metus in gravida sodales.</p>
          </div>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="card">
          <img src="../images/new-beer.png" className="card-img-top" alt=""/>
          <div className="card-body">
            <h3 className="card-title">New Beer</h3>
            <p className="card-text">Suspendisse dapibus risus sed imperdiet gravida. Quisque eget mauris nunc. Sed augue libero, lacinia at malesuada iaculis, pharetra ac nisi. Quisque aliquam scelerisque semper. Quisque eu metus faucibus, convallis lacus sed, aliquet augue. Nulla vel felis consectetur risus iaculis dapibus nec eu nibh. Nullam rhoncus magna id velit vulputate, a cursus tellus sollicitudin. Maecenas ultricies nec lacus et volutpat. Cras vulputate metus in gravida sodales.</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Home;