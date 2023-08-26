import { Avatar, Stack } from "@mui/material"

function AvatarLogo () {
    return (
        <Stack
        direction="row" 
        justifyContent="space-around"
        alignItems="center"
        >
            <Avatar
            variant="square"
            alt="Logo"
            src="/Joychest_2.png"
            sx={{ width: 500, height: 100 }}
        />
        </Stack>
        
    )
}

export default AvatarLogo