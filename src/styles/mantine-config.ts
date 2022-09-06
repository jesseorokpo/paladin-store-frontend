import { MantineTheme, MantineThemeOverride } from "@mantine/core";



export const MaintineThemeConfig: MantineThemeOverride = {
    colorScheme: "light",
    // fontFamily: "'AppRegularFont', sans-serif",
    // fontFamilyMonospace: "'AppRegularFont', sans-serif",
    // headings: { fontFamily: "'AppRegularFont', sans-serif" },
    primaryColor: "orange",
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
                        }
                    }
                }
            },
        },
        Paper: {
            styles(theme, params) {
                return {
                    root: {
                        //@ts-ignore
                        background: theme.fn.lighten(theme.colors.darkBlue[5], .1),
                        borderRadius: 0
                    }
                }
            },
        },
        Tabs: {
            defaultProps: {
                color: "orange"
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
                        background: theme.fn.darken(theme.colors.darkBlue[5], .2),
                        borderColor: "transparent"
                    },
                }
            },
        },
        Select: {
            styles(theme, params) {
                return {
                    input: {
                        background: theme.fn.darken(theme.colors.darkBlue[5], .2),
                        borderColor: "transparent"
                    },
                    dropdown: {
                        background: theme.fn.darken(theme.colors.darkBlue[5], .2),
                        borderColor: "transparent"
                    },

                }
            },
        },
        Modal: {
            styles(theme, params) {
                return {
                    modal: {
                        background: theme.colors.darkBlue[5],
                        borderColor: "transparent",
                        alignSelf: 'center'
                    },

                }
            },
        }
    }

}