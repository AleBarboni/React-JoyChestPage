import { Avatar, Stack } from "@mui/material"

function AvatarLogo () {
    return (
        <Stack
        justifyContent="space-around"
        alignItems="center"
        >
            <Avatar
            variant="square"
            alt="Logo"
            src="/Joychest_2.png"
            sx={{ width: 400, height: 100 }}
        />
        </Stack>
        
    )
}

export default AvatarLogo