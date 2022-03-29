import {useState, useEffect} from "react"

const Typewriter = (props) => {

    const [phrase, setPhrase] = useState('')

    useEffect( () => {
        let currentText = ''

        props.text.split('').foreach( (char, index) => {

            setTimeout( () => {
                currentText = currentText.slice(0, -1)
                currentText += char
                if(props.text.lenght != index + 1) {
                    currentText += '|'
                }
                setPhrase(currentText)
            }, 200 + (index * 100))

        })

    }, [])

    return (
        <>
            {phrase}
        </>
    )
}

export default Typewriter