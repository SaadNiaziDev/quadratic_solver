import React,{useState} from "react";
import { Form, Button,Container } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const Dashboard = () => {
    const [x2,setX2]= useState(0);
    const [x,setX] = useState(0);
    const [constant,setConstant] = useState(0);

    const submit = async() => {

    if(x2.length > 0&& x.length > 0 && constant.length > 0) {
        await axios.post("http://localhost:3001/api/equation/solve",{x2,x,constant})
        .then((response) => {
            Swal.fire({
                icon:"success",
                title:"Done",
                text:  `${response.data.data}`,
            })
        }
        ).catch((error) => {
            alert(error)
        })
    }else{
        Swal.fire({
            icon:"error",
            title:"Missing parameters",
            text: "Please provide all required parameters!"
        })
    }
    }
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              Value for x<sup>2</sup>
            </Form.Label>
            <Form.Control type="Number" placeholder="Enter a number" id="x2" onChange={(event)=>setX2(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Value for x</Form.Label>
            <Form.Control type="Number" placeholder="Enter a number" onChange={(event)=>setX(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Value for constant</Form.Label>
            <Form.Control type="Number" placeholder="Enter a number" onChange={(event)=>setConstant(event.target.value)}/>
          </Form.Group>
          <Button variant="primary" onClick={()=>submit()}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Dashboard;
