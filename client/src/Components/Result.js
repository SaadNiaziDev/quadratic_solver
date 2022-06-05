import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const Result = () => {
  const [state, setState] = useState([])
  let arr = [];
  const fetch = async () => {
    await axios
      .get("http://localhost:3001/api/equation/get")
      .then((response) => {
        setState(response.data.data)
        arr=response.data.data;
        console.log(arr)
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: err.message,
        });
      });
  };
  useEffect(() => {
    fetch();
  },[]);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>x<sup>2</sup></th>
            <th>x</th>
            <th>constant</th>
            <th>root # 1</th>
            <th>root # 2</th>
            <th>RealPart</th>
            <th>ImaginaryPart</th>
          </tr>
        </thead>
        <tbody>
        {state.map((arr, key) => {
          return (
          <tr key={key}>
            <th>{key+1}</th>
            <td>{arr.a}</td>
            <td>{arr.b}</td>
            <td>{arr.c}</td>
            {arr.root1 && <td>-</td>}
            {arr.root2 && <td>-</td>}
            {arr.root1 && <td>{arr.root1}</td>}
            {arr.root2 && <td>{arr.root2}</td>}
            {arr.imagPart && <td>-</td>}
            {arr.realPart && <td>-</td>}
            {arr.realPart && <td>{arr.realPart}</td>}
            {arr.imagPart && <td>{arr.imagPart}</td>}
          </tr>)
        })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Result;
