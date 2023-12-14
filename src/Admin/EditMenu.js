import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditMenu() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [list, setList] = useState({
    name: "",
    price: "",
    description:"",
    category:"",
    images:"",
    
  });

  const { name, price,description,category,images } = list;

  const onInputChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4830/list/${id}`, list);
    navigate("/adminmenu");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4830/list/${id}`);
    setList(result.data);
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h2 className="text-center m-4">Edit Menu</h2>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Menu Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  name="category"
                  value={category}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Images" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image URL"
                  name="images"
                  value={images}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="btn btn-danger mx-2" to="/adminmenu">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}