import React from 'react';
import AquaBrcktR from "../assets/AquabrkR2.png";
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .detailButton {
        float: right;
    }

    p, .p {
        font-size: 0.7em;
        margin-bottom: 0;
    }
`

const styleRight = {
    height: "4rem",
    float: "right"
};

class Absence extends React.Component{

    render(){
        const totalAbsence =  this.props.totalStudents - this.props.totalAttendance 
        return(
            <Styles>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title><h4>Inasistencias</h4></Card.Title>
                    <Card.Text>
                    <span className="numbers" style={{fontSize:50}}>{totalAbsence}</span>
                    <div className="detailButton">
                    <Link to="/absence-detailed">
                        <Button
                        variant="outline-light">
                        <img
                            className="brackets"
                            src={AquaBrcktR}
                            style={styleRight}
                            alt="LabBrackets"
                        />
                        </Button>
                        <small className="text-muted"><p>Ver</p></small>
                    </Link>
                    </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Styles>
        )
    }
}

export default Absence;