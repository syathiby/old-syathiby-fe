import { useEffect, useState } from "react"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { get } from "../../../middleware/services/api"

const Artikel = () => {

    return (
        <LayoutAdmin>
            <div className="">

                <CardDotted>
                    <a
                        class="group relative inline-flex items-center overflow-hidden rounded bg-blue-400 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                        href="/admin/artikel/add"
                    >
                        <span class="absolute -end-full transition-all group-hover:end-4">
                            <svg
                            class="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                            </svg>
                        </span>

                        <span class="text-sm font-medium transition-all group-hover:me-4">
                            Add Artikel
                        </span>
                    </a>
                </CardDotted>

            </div>
        </LayoutAdmin>
    )
}

export default Artikel;
