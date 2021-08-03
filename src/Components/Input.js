import Icon from "./Icon";

const Input = (props) => {
    let customStyle = {};
    let labelStyle;
    let paddingSize = "";

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

    if (props.size === "sm") {
        paddingSize = "10px 5px 10px 10px";
    } else if (props.size === "md") {
        paddingSize = "16px 8px 16px 16px";
    }

    customStyle.padding = paddingSize;

    if (props.fullWidth) {
        customStyle.width = "100%";
    }

    if (props.startIcon) {
        customStyle.padding = "10px 5px 10px 40px"
    }

    if (props.endIcon) {
        customStyle.padding = "10px 35px 10px 10px"
    }

    return (
        <div className="input-container">
            <p>{props.name}</p>
            <div className="form-group">
                <label style={labelStyle}>Label</label>
                {props.startIcon && <Icon iconName={props.startIcon} position="startIcon"/>}
                {!props.multiline && <input type="text" placeholder="Placeholder" style={customStyle} required={props.error ? true : false} 
                disabled={props.disabled ? true : false} value={props.value} onChange={(e) => e.target.value} />}
                {props.endIcon && <Icon iconName={props.endIcon} position="endIcon"/>}

                {props.multiline && <textarea rows={props.row} placeholder="Placeholder"></textarea>}
                <small style={labelStyle}>{props.helperText}</small>
            </div>
        </div>
    )
}

export default Input;