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

export const routes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <HomeOutlined />,
    component: <DBlog />,
  },
  {
    name: "Fasilitas Ma'had",
    path: "/admin/fasilitas",
    icon: <SwitcherOutlined />,
    component: <FacilityAdmin />,
  },
  {
    name: "Banner",
    path: "/admin/banner",
    icon: <PictureOutlined />,
    component: <BannerAdmin />,
  },
  {
    name: "Post",
    icon: <ReadOutlined />,
    children: [
      {
        name: "Kategori",
        path: "/admin/kategori",
        component: <Kategori />,
      },
      {
        name: "Blog Artikel",
        path: "/admin/artikel",
        component: <Artikel />,
        secondary: true,
        page: [
          {
            name: "Add Artikel",
            path: "/admin/artikel/add",
            component: <AddPost />,
          },
        ],
      },
      {
        name: "Add Banner",
        path: "/admin/banner/add",
        component: <AddBanner />
      }
    ],
  },
  {
    name: "Galeri",
    icon: <CameraOutlined />,
    children: [
      {
        name: "Kategori",
        path: "/admin/galeri/kategori",
        component: <GaleriKategori />
      },
      {
        name: "Foto",
        path: "/admin/galeri/foto",
        component: <FotoGaleri />,
        secondary: true,
        page: [
          {
            name: "Add Foto",
            path: "/admin/galeri/foto/add",
            component: <AddFoto />
          }
        ]
      },
      {
        name: "Video",
        path: "/admin/galeri/video",
        component: <VideoGaleri />,
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
    children: [
      {
        name: "Add user",
        path: "setting/add-user",
      },
      {
        name: "Setting App",
        path: "setting/app",
      },
      {
        name: "Profile",
        path: "setting/profile",
      },
    ],
  },
];
