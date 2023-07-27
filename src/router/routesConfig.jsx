import {
  HomeOutlined,
  SettingOutlined,
  ReadOutlined,
  SwitcherOutlined,
  CameraOutlined,
  PictureOutlined,
} from "@ant-design/icons/lib/icons";

// Dashboard Pages
import DBlog from "../pages/admin/dBlog";

// Artikel
import Artikel from "../pages/admin/post/artikel";
import AddPost from "../pages/admin/post/postArtikel";
import Kategori from "../pages/admin/label";

// Fasilitas Pages
import FacilityAdmin from "../pages/admin/fasilitas";

// Galeri Pages
import FotoGaleri from "../pages/admin/galeri/foto";
import AddFoto from "../pages/admin/galeri/component/addFoto";
import GaleriKategori from "../pages/admin/galeri/kategori";
import VideoGaleri from "../pages/admin/galeri/video";
import AddVideo from "../pages/admin/galeri/component/addVideo";

// Banner Admin
import BannerAdmin from "../pages/admin/banner";
import AddBanner from "../pages/admin/banner/component/addBanner";

// User
import UsersAdd from "../pages/admin/setting/addUsers";

export const routes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <HomeOutlined />,
    component: <DBlog />,
    role: ["all"]
  },
  {
    name: "Fasilitas Ma'had",
    path: "/admin/fasilitas",
    icon: <SwitcherOutlined />,
    component: <FacilityAdmin />,
    role: ["superuser", "admin"]
  },
  {
    name: "Banner",
    path: "/admin/banner",
    icon: <PictureOutlined />,
    component: <BannerAdmin />,
    role: ["superuser", "admin"]
  },
  {
    name: "Post",
    icon: <ReadOutlined />,
    role: ["all"],
    children: [
      {
        name: "Kategori",
        path: "/admin/kategori",
        component: <Kategori />,
        role: ["admin", "superuser"]
      },
      {
        name: "Blog Artikel",
        path: "/admin/artikel",
        component: <Artikel />,
        secondary: true,
        role: ["all"],
        page: [
          {
            name: "Add Artikel",
            path: "/admin/artikel/add",
            component: <AddPost />,
          },
        ],
      }
    ],
  },
  {
    name: "Galeri",
    icon: <CameraOutlined />,
    role: ["superuser", "admin"],
    children: [
      {
        name: "Kategori",
        path: "/admin/galeri/kategori",
        component: <GaleriKategori />,
        role: ["superuser", "admin"]
      },
      {
        name: "Foto",
        path: "/admin/galeri/foto",
        component: <FotoGaleri />,
        role: ["superuser", "admin"],
        secondary: true,
        page: [
          {
            name: "Add Foto",
            path: "/admin/galeri/foto/add",
            component: <AddFoto />
          },
          {
            name: "Add Banner",
            path: "/admin/banner/add",
            component: <AddBanner />
          }
        ]
      },
      {
        name: "Video",
        path: "/admin/galeri/video",
        component: <VideoGaleri />,
        role: ["superuser", "admin"],
        secondary: true,
        page: [
          {
            name: "Add Foto",
            path: "/admin/galeri/video/add",
            component: <AddVideo />
          }
        ]
      },
    ],
  },
  {
    name: "Settings",
    icon: <SettingOutlined />,
    role: ["all"],
    children: [
      {
        name: "Add user",
        path: "/admin/setting/addUser",
        component: <UsersAdd />,
        role: ["superuser"]
      },
      {
        name: "Setting App",
        path: "setting/app",
        role: ["admin"]
      },
    ],
  },
];