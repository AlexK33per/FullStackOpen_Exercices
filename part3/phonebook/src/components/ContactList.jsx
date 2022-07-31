function ContactList (props) {
    const persons = props.contacts
    const filter = props.filter

    return (
        <div>
            <h2>Numbers</h2>
            <ul>
            {
                persons
                    .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(person => <p key={person.name}>{person.name} {person.number}</p>)
            }
            </ul>
        </div>
    )
}

export default ContactList;