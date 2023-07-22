import {
  HomeOutlined,
  SettingOutlined,
  ReadOutlined,
  AlignLeftOutlined
} from "@ant-design/icons/lib/icons";

// import Pages
import Artikel from "../pages/admin/post/artikel";
import DBlog from "../pages/admin/dBlog";
import Kategori from "../pages/admin/label";
import AddPost from "../pages/admin/post/postArtikel";

export const routes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <HomeOutlined />,
    component: <DBlog />
  },
  {
    name: "Kategori",
    path: "/admin/kategori",
    icon: <AlignLeftOutlined />,
    component: <Kategori />
  },
  {
    name: "Post",
    icon: <ReadOutlined />,
    children: [{
      name: "Blog Artikel",
      path: "/admin/artikel",
      component: <Artikel />,
      secondary: true,
      page: [{
        name: 'Add Artikel',
        path: "/admin/artikel/add",
        component: <AddPost />
      }]
    }]
  },
  {
    name: "Settings",
    icon: <SettingOutlined />,
    children: [
      {
        name: "Add user",
        path: "setting/add-user",
      },
      {
        name: "Setting App",
        path: "setting/app"
      },
      {
        name: "Profile",
        path: "setting/profile",
      },
    ],
  },
];

