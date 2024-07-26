import React, { Component } from "react";
import MyTable from "./MyTable";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
        address: "",
        city: "",
        country: "argentina",
        acceptRules: false,
      },
      isEditing: true,
    };
  }

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: type === "checkbox" ? checked : value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isEditing: false });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  render() {
    const { formData, isEditing } = this.state;

    return (
      <div>
        {isEditing ? (
          <form name="myForm" method="post" onSubmit={this.handleSubmit}>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="col-form-label">
                Email
              </label>
              <input
                value={formData.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password" className="col-form-label">
                Password
              </label>
              <input
                value={formData.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="col-form-label">
                Address
              </label>
              <textarea
                onChange={this.handleChange}
                className="form-control"
                name="address"
                id="address"
                placeholder="1234 Main St"
                value={formData.address}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="col-form-label">
                City
              </label>
              <input
                value={formData.city}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="city"
                id="city"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="country" className="col-form-label">
                Country
              </label>
              <select
                value={formData.country}
                onChange={this.handleChange}
                id="country"
                name="country"
                className="form-control"
              >
                <option value="argentina">Argentina</option>
                <option value="ukraine">Ukraine</option>
                <option value="china">China</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-check">
                <label className="form-check-label" htmlFor="acceptRules">
                  <input
                    checked={formData.acceptRules}
                    onChange={this.handleChange}
                    id="acceptRules"
                    type="checkbox"
                    name="acceptRules"
                    className="form-check-input"
                  />
                  Accept Rules
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : (
          <MyTable formData={formData} handleEdit={this.handleEdit} />
        )}
      </div>
    );
  }
}

export default MyForm;
