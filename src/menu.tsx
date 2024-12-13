import {
    BranchesOutlined,
    PictureOutlined,
    TagsOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

function AppMenu(): JSX.Element {
    const [current, setCurrent] = useState("home");
    const [openKeys, setOpenKeys] = useState<string[]>(["labeling"]);

    const onMenuClick: MenuProps["onClick"] = (e) => {
        //   console.log('click ', e);
        setCurrent(e.key);
    };
    const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        {
            label: "Generate",
            key: "generate",
            icon: <TagsOutlined />,
            // onClick: () => navigate("/generate"),

            children: [
                {
                    label: "Component",
                    key: "component",
                    icon: <PictureOutlined />,
                    onClick: () => navigate("/generate/component"),
                },
                {
                    label: "JSDoc",
                    key: "jsdoc",
                    icon: <BranchesOutlined />,
                    onClick: () => navigate("/generate/jsdoc"),
                },
            ],
        },
    ];

    return (
        <Menu
            onClick={onMenuClick}
            className="h-full"
            mode="inline"
            items={menuItems}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys)}
        />
    );
}

export default AppMenu;
