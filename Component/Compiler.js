import React from 'react'
import Editor from '@monaco-editor/react'
import { Stack } from '@mui/material'
const Compiler = ({language, value, setValue, theme}) => {

    return (
        <Stack sx={{ width: "100%" }}>
            <Editor
                height="85vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// Write Your code "
                onChange={(e) => setValue(e.target.value)}
            />
        </Stack>
    )
}

export default Compiler

