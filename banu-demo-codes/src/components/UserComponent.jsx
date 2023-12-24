import axios from "axios";
import React from "react";

const UserComponent = ({ data }) => {
  const deleteUser = async (id) => {
    try {
      let result = await axios.delete(
        `http://192.168.1.131:8000/api/login/?id=${id}`
      );
      console.log(`result ==>`, result.data);
    } catch (error) {
      console.log(`error ==>`, error);
    }
  };
  return (
    <div>
      {" "}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            console.log(`item ==>`, item);
            return (
              <tr key={index}>
                <th scope="row">{Number(index) + 1}</th>
                <td>{item.username || "-"}</td>
                <td>{item.email || "-"}</td>
                <td>
                  <button
                    onClick={() => deleteUser(item.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserComponent;
