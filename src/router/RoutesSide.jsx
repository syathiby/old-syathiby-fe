import { HomeOutlined, DatabaseOutlined, SettingOutlined } from "@ant-design/icons/lib/icons"

export const routes = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: <HomeOutlined />
    },
    {
        name: "Data Master",
        icon: <DatabaseOutlined />,
        role: "admin",
        children: [
            {
                name: "Data Kelas",
                path: "datamaster/kelas"
            },
            {
                name: "Data Santri",
                path: 'datamaster/santri'
            }
        ]
    },
    {
        name: "Settings",
        icon: <SettingOutlined />,
        children: [
            {
                name: "Add user",
                path: 'setting/add-user',
                role: 'admin'
            },
            {
                name: "Setting App",
                path: 'setting/app',
                role: 'admin'
            },
            {
                name: "Profile",
                path: "setting/profile",
            }
        ]
    }
]