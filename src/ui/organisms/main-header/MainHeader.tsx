import { Header, MediaQuery, Burger, useMantineTheme, Text, Box, Stack, Title, Group, Input, Avatar, Menu, Button } from "@mantine/core";
import Logo from "./logo.svg"


const MainHeader: React.FC<{ setOpened: (data: any) => void, opened: boolean }> = ({ opened, setOpened }) => {
    let theme = useMantineTheme()
    return <Header height={60} sx={theme => {
        return { borderBottom: "0px solid gray", boxShadow: theme.shadows.md }
    }}>
        <div style={{ display: 'flex', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Stack align={"center"} justify="center" px="md">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o: any) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </Stack>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Box sx={theme => {
                    return {
                        height: "100%", width: "250px", display: "flex", alignContent: 'center',
                        alignItems: 'center'
                    }
                }} p="md">
                    <img src={Logo} alt="React Logo" style={{ height: 40 }} />
                </Box>
            </MediaQuery>
            <Box p="md" sx={{ flex: 1 }}>
                <Group align={"center"} spacing="xl" sx={{ justifyContent: "space-between" }}>
                    <Box>
                    </Box>
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Box>
                            <UserPrimaryActions />
                        </Box>
                    </MediaQuery>
                </Group>
            </Box>
        </div>
    </Header>

}


function UserPrimaryActions() {
    return <Menu width={"280px"}>
        <Menu.Target>
            <Avatar src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"}
                size="md" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown >
            <Stack align={"center"} p="12px">
                <Avatar size={"lg"} sx={{ borderRadius: 50 }} src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" />
                <Box sx={{ textAlign: "center" }}>
                    <Text sx={{ fontWeight: "bold" }}>Emekus Kalu Enterprise</Text>
                    <Text>emekusenterprise@gmail.com</Text>
                </Box>

                <Group>
                    <Button variant="outline">
                        Edit Profile
                    </Button>
                    <Button variant="outline" color={"red"}>
                        Sign Out
                    </Button>
                </Group>


                <Stack sx={{ width: "100%" }}>
                    {[1, 2].map(element => {
                        return <Box>
                            <Group>
                                <Avatar />
                                <Box>
                                    <Text sx={{ fontWeight: "bold" }}>Brand Title</Text>
                                    <Text>email@gmail.com</Text>
                                </Box>
                            </Group>
                        </Box>
                    })}

                </Stack>

                <Button fullWidth>
                    Add Brand Store
                </Button>
            </Stack>
        </Menu.Dropdown>

    </Menu>
}

export default MainHeader;