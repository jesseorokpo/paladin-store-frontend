import { MantineTheme, MantineThemeOverride } from "@mantine/core";



export const MaintineThemeConfig: MantineThemeOverride = {
    colorScheme: "light",
    fontFamily: "'AppRegularFont', sans-serif",
    fontFamilyMonospace: "'AppRegularFont', sans-serif",
    headings: { fontFamily: "'AppRegularFont', sans-serif" },
    primaryColor: "blue",
    colors: {
        darkBlue: ["black", "black", "black", "#2C4C59", "#667D86", "#1A3C4A", "black", "black", "black", "#667D86"]
    },
    components: {
        Button: {
            styles(theme, params) {
                return {
                    root: {
                        ":disabled": {
                            background: theme.colors.gray[6],
                            color: theme.colors.gray[3]
                        },
                        height:40,
                        borderRadius:8
                    }
                }
            },
        },
        Paper: {
            styles(theme, params) {
                return {
                    root: {
                     
                    }
                }
            },
        },
        Tabs: {
            defaultProps: {
                color: "blue"
            },
            styles(theme, params) {
                return {
                    tab: {
                        ":hover": {
                            background: "transparent",
                            borderColor: "transparent"
                        },
                    }
                }
            },
        },
        TextInput: {
            defaultProps: {
                color: "orange",
            },
            styles(theme, params) {
                return {
                    input: {
                        // background: theme.fn.darken(theme.colors.darkBlue[5], .2),
                       
                    },
                }
            },
        },
        Select: {
            styles(theme, params) {
                return {
                

                }
            },
        },
        Modal: {
            styles(theme, params) {
                return {
                    modal: {
                        // background: theme.colors.darkBlue[5],
                        borderColor: "transparent",
                        alignSelf: 'center'
                    },

                }
            },
        }
    }

}