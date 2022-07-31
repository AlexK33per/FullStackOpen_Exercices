function Button (props) {
    return (
        <div>
          <button type="submit" onClick={props.handler}>
            add
          </button>
        </div>
    )
}

export default Button;