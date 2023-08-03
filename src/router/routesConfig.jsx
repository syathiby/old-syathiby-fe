import {
  HomeOutlined,
  SettingOutlined,
  ReadOutlined,
  SwitcherOutlined,
  CameraOutlined,
  PictureOutlined,
  ProfileOutlined,
} from "@ant-design/icons/lib/icons";

// Dashboard Pages
import DBlog from "../pages/admin/dBlog";

// Artikel
import Artikel from "../pages/admin/post/artikel";
import AddPost from "../pages/admin/post/postArtikel";
import EditArtikel from "../pages/admin/post/editArtikel";
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
import TestiMoni from "../pages/admin/testimoni/testi";

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
            role: ["writer", "admin"]
          },
          {
            name: "lalala",
            path: '/admin/artikel/edit/:id/:link',
            component: <EditArtikel />,
            role: ["superuser", "admin"]
          }
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
            component: <AddFoto />,
            role: ["superuser", "admin"]
          },
          {
            name: "Add Banner",
            path: "/admin/banner/add",
            component: <AddBanner />,
            role: ["superuser", "admin"]
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
            component: <AddVideo />,
            role: ["superuser", "admin"],
          }
        ]
      },
    ],
  },
  {
    name: "Testimonial",
    path: '/admin/testimonial',
    icon: <ProfileOutlined />,
    component:<TestiMoni />,
    role: ["superuser", "admin"]
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
        path: "/admin/setting/app",
        role: ["admin"]
      },
    ],
  },
];