import { useState, useEffect } from "react";
import CardDotted from "../../../component/card/cardDotted";
import LayoutAdmin from "../../../layout/adminLayout/layout";
import TableAddUser from "./component/tAddUser";
import { handleAddUser } from "../../../middleware/services/admin/usersAdd";

const formUser = {
  name: "",
  username: "",
  password: "",
  role: "",
  photo: "default.png",
};

const UsersAdd = () => {
  const [user, setUser] = useState(formUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleAddUser(user, (handleResult) => {
      if ((handleResult = "ok")) {
        setUser(formUser);
      }
    });
  };

  return (
    <LayoutAdmin>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <CardDotted>
            <h1 className="text-center font-semibold">Table User</h1>
            <div className="overflow-x-auto my-2">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="text-left">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Nama
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Username
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Role
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <TableAddUser />
                </tbody>
              </table>
            </div>
          </CardDotted>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <CardDotted>
            <h1 className="text-center font-semibold">Tambah User</h1>
            <form>
              <div className="my-2 w-full">
                <label
                  htmlFor="name"
                  className="relative block rounded-md border border-gray-200 shadow-sm w-full h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer border-none h-14 bg-transparent w-full px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="title"
                    value={user.name}
                    onChange={handleInputChange}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Nama
                  </span>
                </label>
              </div>
              <div className="my-2 w-full">
                <label
                  htmlFor="username"
                  className="relative block rounded-md border border-gray-200 shadow-sm w-full h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="peer border-none h-14 bg-transparent w-full px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="title"
                    value={user.username}
                    onChange={handleInputChange}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Username
                  </span>
                </label>
              </div>
              <div className="my-2 w-full">
                <label
                  htmlFor="password"
                  className="relative block rounded-md border border-gray-200 shadow-sm w-full h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="peer border-none h-14 bg-transparent w-full px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="title"
                    value={user.password}
                    onChange={handleInputChange}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Passsword
                  </span>
                </label>
              </div>
              <div className="my-4 w-full">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-900"
                >
                  Role
                </label>

                <select
                  name="role"
                  id="role"
                  className="mt-1.5 w-full rounded-lg border-2 px-2 py-2 dark:bg-white border-gray-300 text-gray-700 sm:text-sm"
                  value={user.role}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="admin">Admin</option>
                  <option value="writer">Writer</option>
                  <option value="adminPsb">Admin PSB</option>
                </select>
              </div>

              <div>
                <a
                  href="#"
                  onClick={handleSubmit}
                  className="group text-center relative w-full inline-block focus:outline-none focus:ring "
                >
                  <span className="absolute inset-0 w-full translate-x-0 translate-y-0 bg-blue-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                  <span className="relative inline-block w-full border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                    post
                  </span>
                </a>
              </div>
            </form>
          </CardDotted>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default UsersAdd;
