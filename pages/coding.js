import { Grid, MenuItem, Select } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Compiler from '../Component/Compiler'
import { customStyles } from '../src/customeStyles'
import monacoThemes from "monaco-themes/themes/themelist";
import { defineTheme } from '../src/defineTheme'
const coding = () => {
    const [value, setValue] = useState("")
    const [theme, setTheme] = useState("LAZY")
    const [language, setLanguage] = useState("javascript")

    function handleThemeChange(th) {
        const theme = th;
        console.log("theme...", theme);

        if (["light", "vs-dark"].includes(theme.value)) {
            setTheme(theme);
        } else {
            defineTheme(theme.value).then((_) => setTheme(theme));
        }
    }
    return (
        <Grid container  >
            <Grid item sx={12} lg={12}></Grid>
            <Grid item sx={12} lg={6}></Grid>
            <Grid item sx={12} lg={6}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item lg={12} xs={12}>
                        <Stack sx={{ display: "flex", justifyContent: "left" }}>
                            <Select
                                sx={{ width: "200px" }}
                                value={language}
                                label="Select Language"
                                onChange={(e) => setValue(e.target.value)}
                            >
                                <MenuItem value={"java"}>Java</MenuItem>
                                <MenuItem value={"javascript"}>Javascript</MenuItem>
                                <MenuItem value={"python"}>Python</MenuItem>
                            </Select>
                            <Select
                                placeholder={`Select Theme`}

                                value={theme}
                                styles={customStyles}
                                onChange={(e) => handleThemeChange(e.target.value)}
                            >{Object.keys(monacoThemes).map((ele, idx) => {
                                return (
                                    <MenuItem key={idx} value={ele}>{monacoThemes[ele]}</MenuItem>
                                )
                            })}
                            </Select >
                        </Stack>
                    </Grid>
                    <Grid item lg={12} xs={12}></Grid>
                    <Grid item lg={12} xs={12}></Grid>

                </Grid>
                <Compiler
                    language={language}
                    value={value}
                    theme={theme}
                    setValue={setValue} />
            </Grid>


        </Grid>
    )
}

export default coding