import React, { Component } from "react";

class MyTable extends Component {
  render() {
    const { formData, handleEdit } = this.props;
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>Accept Rules</td>
              <td>{formData.acceptRules ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{formData.address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{formData.country}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{formData.password}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleEdit} type="button" className="btn btn-primary">
          Back
        </button>
      </div>
    );
  }
}

export default MyTable;
