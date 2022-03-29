import { Navbar } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <Navbar bg='white' expand='lg' className='border-bottom border-custom-gray'>
            <Navbar.Brand>
                <Link href='/restaurants'>
                    <Image
                        src='/logo.png'
                        alt='Food'
                        width={200}
                        height={44}
                    />
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header