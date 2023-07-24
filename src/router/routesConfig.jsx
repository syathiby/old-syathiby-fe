import {
  HomeOutlined,
  SettingOutlined,
  ReadOutlined,
  AlignLeftOutlined,
  SwitcherOutlined,
  CameraOutlined
} from "@ant-design/icons/lib/icons";

// import Pages
import Artikel from "../pages/admin/post/artikel";
import DBlog from "../pages/admin/dBlog";
import Kategori from "../pages/admin/label";
import AddPost from "../pages/admin/post/postArtikel";
import FacilityAdmin from "../pages/admin/fasilitas";

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
    name: "Fasilitas Ma'had",
    path: "/admin/fasilitas",
    icon: <SwitcherOutlined />,
    component: <FacilityAdmin />
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
    name: "Galeri",
    icon: <CameraOutlined />,
    children: [
      {
        name: "Foto",
      },
      {
        name: "Video"
      }
    ]
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

