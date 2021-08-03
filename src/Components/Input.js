const Input = (props) => {
    let customStyle;
    let labelStyle;

    if (props.error === "true") {
        customStyle = {
            color: "#d94949",
            outline: "none",
            border: "2px solid #d94949"
        }

        labelStyle = {
            color: "#d94949"
        }
    }
    if (props.state === "focus" && props.error === "true") {
        customStyle = {
            color: "#d94949",
            outline: "none",
            border: "2px solid #d94949"
        }
    } else if (props.state === "focus") {
        customStyle = {
            outline: "none",
            border: "2px solid #2962FF",
            color: "#2962FF"
        }
    } else if (props.state === "hover") {
        customStyle = {
            border: "2px solid #333",
        }
    }

    return (
        <div className="input-container">
            <p>{props.name}</p>
            <label style={labelStyle}>Label</label>
            <input type="text" placeholder="Placeholder" style={customStyle} required={props.error ? true : false}></input>
        </div>
    )
}

export default Input;