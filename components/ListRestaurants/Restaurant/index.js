import React from "react"
import { Col, Row, Card } from "react-bootstrap"
import { FaStar } from 'react-icons/fa'
import Link from "next/link"
import Image from "next/image"
import toCurrency from '../../../services/toCurrency'
import truncateString from '../../../services/truncateString'

const Restaurant = (props) => {
    return (
        <Col lg={6} md={6} xs={12} className='mb-4'>
            <Link href={`restaurants/${props.id}`}>
                <Card body className='clickable-effect'>
                    <Row>
                        <Col md={5} xs={12}>
                        { props.image_url ?
                            <Image
                                src={props.image_url}
                                alt={props.name}
                                width={300}
                                height={200}
                                layout='responsive'
                            />
                        : <img src='https://picsum.photos/300/200' className="img-fluid"/> }
                        </Col>
                        <Col md={5} xs={10}>
                            <h5>{truncateString(props.name, 25)}</h5>
                            <p className="mb-1">
                                <small>{truncateString(props.description, 60)}</small>
                            </p>
                            <p>
                                <small className='fw-bold'>{props.category_title}</small>
                            </p>
                            <small className='border px-3 border-custom-gray fw-bold'>
                                entrega {toCurrency(props.delivery_tax)}
                            </small>
                        </Col>
                        <Col md={2} xs={2} className='text-center'>
                            <span className='text-custom-orange'>
                                <FaStar /> 5
                            </span>
                        </Col>
                    </Row>
                </Card>
            </Link>
        </Col>
    )
}

export default Restaurant