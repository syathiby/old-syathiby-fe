import React from 'react';

function Post() {
  return (
    <div className="container px-6 py-10 mx-auto">
        <div className='py-4'>
            <h1 className='font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white'>Artikel Ma'had</h1>
            <label htmlFor="">Jelajahi Artikel Ma'had AL-Imam Asy-Syathiby</label>
            <div className="flex justify-start mx-auto mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div>
                <img
                className="relative z-10 object-cover w-full rounded-md h-80"
                src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                />

                <div className="relative z-20  p-6 mx-auto -mt-20 glass bg-white rounded-md shadow dark:bg-gray-900">
                <a
                    href="#"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                    All the features you want to know
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem
                    nesciunt, laudantium quia tempore delect
                </p>

                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Post;
