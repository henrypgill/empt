import {
    BellOutlined,
    QuestionCircleOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, theme } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import "./App.css";
import AppMenu from "./menu";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="min-h-screen m-0">
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className="flex flex-col h-full">
                    <Link
                        to="/"
                        className="flex items-center justify-center p-[8px] border-r-[1px] border-0 border-solid box-border border-ant-border-color"
                    >
                        <Image
                            src={
                                collapsed
                                    ? "/encordLogo.svg"
                                    : "/encordFullLogo.svg"
                            }
                            height={26}
                            width={130}
                            preview={false}
                            alt="Encord logo"
                        />
                    </Link>
                    <AppMenu />
                </div>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        height: 43,
                    }}
                    className="leading-[43px]"
                >
                    <div className="grid grid-cols-2 h-full">
                        <div className="flex flex-row align-middle justify-start px-8"></div>
                        <div className="flex flex-row items-center justify-end px-8 gap-x-2">
                            <Button type="text">
                                <QuestionCircleOutlined /> help
                            </Button>
                            <Button type="text">
                                <BellOutlined />
                            </Button>
                            <Button type="text">
                                <UserOutlined />
                            </Button>
                        </div>
                    </div>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
