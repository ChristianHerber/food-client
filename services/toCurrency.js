const toCurrency = (value) => {

    const formatter = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return formatter.format(value)
}

export default toCurrency