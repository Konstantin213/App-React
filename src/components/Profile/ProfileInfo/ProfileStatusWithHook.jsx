import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatusWithHook = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "Статуса нет"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange} value={status}/>


            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHook;
