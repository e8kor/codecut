import * as React from "react"
import { NameEditComponent } from "./name-edit"
import {HelloUser} from "./named-hello"

export const App = () => {
    const [name, setName] = React.useState('defaultUserName')
    const setUsernameState = (newName: string) => {
        setName(newName)
    }
    return (
        <>
            <HelloUser userName={name} />
            <NameEditComponent initialUserName={name} onNameUpdated={setUsernameState} />
        </>
    )
}