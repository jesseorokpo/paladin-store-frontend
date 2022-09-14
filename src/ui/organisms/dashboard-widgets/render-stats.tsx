import { Group, Title, Box } from "@mantine/core";
import React from "react";

type RenderStatsMainProps = {
    stats: {
        label: string;
        value: string;
    }[]
}

export function RenderStatsMain({ stats }: RenderStatsMainProps) {
    return <Group sx={{ flex: 1 }} position="apart" align={"center"} spacing={"lg"}>
        {stats.map((element, index) => {
            return <React.Fragment>
                <Box sx={{ textAlign: "center" }} px="24px">
                    <Title sx={{ fontWeight: "bold", fontSize:24 }}>{element.value}</Title>
                    <div>{element.label}</div>
                </Box>
                {index == (stats.length - 1) ? null : <Box sx={{ height: 60, width: "1px", background: "gray" }}></Box>}
            </React.Fragment>
        })}
    </Group>
}
