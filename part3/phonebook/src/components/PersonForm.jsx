function PersonForm (props) {
    return (
        <div>
            <h3>add a new</h3>
            <div>
                name: <input value={props.values[0]} onChange={props.handlers[0]}/>
            </div>
            <div>
                number: <input value={props.values[1]} onChange={props.handlers[1]}/>
            </div>
        </div>
    )
}

export default PersonForm;