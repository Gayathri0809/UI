import { Link,useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faClipboardList,faUsers, faStar} from '@fortawesome/free-solid-svg-icons'
export default function AdminDashboard() {
    
    return(
      

        <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card border">
              <div className="card-header text-center" style={{ backgroundColor: "hotpink", color: "white" }}>
                <h1>Admin Dashboard</h1>
              </div>
              <div className="card-body">
  
                <div className="row">
                  <div className="col-md-3">
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5><FontAwesomeIcon icon={faUsers} style={{ fontSize: "3em", color: "black" }} /></h5>
                        <h5><Link to={'/user'} className="text-decoration-none" style={{ fontSize: "18px", fontWeight: "bold", color: "grey" }}>Users</Link></h5>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3">
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5><FontAwesomeIcon icon={faPlus} style={{ fontSize: "3em", color: "black" }} /></h5>
                        <h5><Link to={`/addmenu`} className="text-decoration-none" style={{ fontSize: "18px", fontWeight: "bold", color: "grey" }}>AddMenu</Link></h5>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3">
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5><FontAwesomeIcon icon={faClipboardList} style={{ fontSize: "3em", color: "black" }} /></h5>
                        <h5><Link to={'/adminmenu'} className="text-decoration-none" style={{ fontSize: "18px", fontWeight: "bold", color: "grey" }}>AdminMenu</Link></h5>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3">
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5><FontAwesomeIcon icon={faStar} style={{ fontSize: "3em", color: "black" }} /></h5>
                        <h5><Link to={'/viewrate'} className="text-decoration-none" style={{ fontSize: "18px", fontWeight: "bold", color: "grey" }}>ViewReview</Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }