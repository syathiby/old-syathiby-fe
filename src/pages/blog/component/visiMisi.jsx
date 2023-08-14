const VisiMisi = () => {
    return(
        <section className="dark:bg-gray-900">

        <div className="grid grid-cols-1 shadow-md lg:grid-cols-2 my-8 mx-4 lg:mx-48">
            <div className="w-full px-8 py-8 bg-blue-00">
              <h1 className="text-center font-bold">Visi Ma'had</h1>
              <article className="my-4">
                Menjadi Lembaga tahfizh yang berkualitas dengan layanan excellent generasi salafush shalih yang mampu mencetak
                kader penghafal Al-Qur'an yang mutqin bermanhaj Ahlus Sunnah wal-Jama'ah dan memiliki akhlaq dan adab yang mulia.
              </article>
            </div>
            <div className="w-full px-8 py-8 bg-blue-00">
              <h1 className="text-center font-bold">Misi Ma'had</h1>
              <ul className="list-decimal">
                <li>
                  Membuat sistem hafalan Al-Qur'an yang komprehensif dan terpadu serta mampu menyiapkan lulusannya untuk menjadi generasi muslim sesuai manhaj salafus sholih <br />
                </li>
                <li>
                  Mencetak kader-kader imam shalat dan pemimpin Qur'ani <br />
                </li>
                <li>
                    Menjadikan Al-Qur'an Bacaan yang ringan dalam kehidupan sehari-hari <br />
                </li>
                <li>
                    Menciptakan generasi islam yang mencintai Al-Qur'an sebagai bagian hidupnya yang tak terpisahkan
                </li>
              </ul>
            </div>
        </div>
        </section>
    )
}

export default VisiMisi