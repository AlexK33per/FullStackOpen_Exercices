function OkAlert ({ person }) {
    if(person.name === '')
    {
        return null
    } else {
        return (
            <div className="okalert">
                <h3>{person.name} has been successfully added</h3>
            </div>
        )
    }
}

export default OkAlert;