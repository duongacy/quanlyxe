import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Table } from 'react-bootstrap';
import product from '../../data/data';

const Details = () => {
    const [src, setSrc] = useState(product.images[0].src);
    const handleChangeColor = (src: string) => {
        setSrc(src);
    }
    return (
        <Container className="py-5">
            <Row>
                <Col sm={8}>
                    <img src={src} className="w-100 mb-3" alt="" />
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <th>Color</th>
                                <td>{product.color}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>{product.price}</td>
                            </tr>
                            <tr>
                                <th>Engine type</th>
                                <td>{product.engineType}</td>
                            </tr>
                            <tr>
                                <th>Displacement</th>
                                <td>{product.displacement}</td>
                            </tr>
                            <tr>
                                <th>Horsepower</th>
                                <td>{product.horsePower}</td>
                            </tr>
                            <tr>
                                <th>Torque</th>
                                <td>{product.torque}</td>
                            </tr>
                            <tr>
                                <th>Redline</th>
                                <td>{product.redline}</td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
                <Col sm={4} >
                    <h3>Select color</h3>
                    <div className="border p-2">
                        {product.images.map((image, key) => (
                            <SelectCarButton image={image} handleChangeColor={handleChangeColor} key={key}/>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Details;

interface ISelectCarButtonProps {
    image: {
        src: string;
        btnSrc: string;

    };
    handleChangeColor: (src: string) => void;
}
const SelectCarButton: React.FC<ISelectCarButtonProps> = ({ image, handleChangeColor }) => {
    return (
        <button className="w-100 bg-transparent py-2 border-secondary my-1 change-color-btn" onClick={
            () => {
                handleChangeColor(image.src)
            }}
        >
            <img src={image.btnSrc} height={50} alt="" />
        </button>
    )
}




