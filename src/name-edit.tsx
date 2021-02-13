import * as React from "react"

// interface Props {
//     userName: string
//     onChange: (e: React.ChangeEvent<HTMLInputElement> ) => void
// }

interface Props {
    initialUserName: string
    onNameUpdated: (name: string ) => void
}


export const NameEditComponent = (props: Props) => {
    const [editingName, setEditingName] = React.useState(props.initialUserName)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingName(event.target.value)
    }
    const onNameSubmit = (event: any): any => {
        props.onNameUpdated(editingName)
    }
    return (
        <>
            <label> Set name: </label>
            <input value={editingName} onChange={onChange}/>
            <button onClick={onNameSubmit}>Change</button>
        </>
    )
}