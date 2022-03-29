import Link from 'next/link'
import {Button, Row, Col} from 'react-bootstrap'
import {FaCrosshairs} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Row className='mt-8 justify-content-center'>
        <Col md={7} xs={12} className='text-center'>
          <h1 className='fw-bolder text-custom-gray-darker mb-5 lh-base display-5'>
            Comida saudável e gostosa direto na sua casa
          </h1>
          <Link href='/restaurants'>
            <Button variant='custom-red' size='lg' className='text-white'>
              <FaCrosshairs />
              <span className='px-2 text-uppercase fw-bolder'>Encontrar Agora</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  )
}