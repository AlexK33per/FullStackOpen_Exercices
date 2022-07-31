function Filter (props) {
    return (
      <div>
        <h3>Filter</h3>
        <div>
          filter shown with: <input value={props.value} onChange={props.handler}/>
        </div>
      </div>
    )
}

export default Filter;