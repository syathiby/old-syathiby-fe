import { useNavigate, useParams } from "react-router-dom"
import Layout from "./Layout"
import { useState } from "react"
import { useEffect } from "react"
import { API_URL, get } from "../../middleware/services/api"
import moment from "moment"

const ArtikelLabel = () => {
    const { name } = useParams()
     const [ data, setData ] = useState([])

     const navigate = useNavigate()

     useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await get(`v1/post/label/${name}`);
            setData(response);
          } catch (error) {
            console.error("Error Fetching Data", error);
          }
        };
    
        fetchData();
      }, []);

      const handleClick = (name, link) => {
        navigate(`/artikel/${name}/${link}`);
      };

      const truncateDescription = (description, maxLength) => {
        if (!description) {
          return '';
        }
        const strippedDescription = description.replace(/(<([^>]+)>)/gi, '');
        if (strippedDescription.length > maxLength) {
          return strippedDescription.substring(0, maxLength) + '...';
        }
        return strippedDescription;
      };
  
    return (
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              {name}
            </h1>
  
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {data.map((item) => (
                <div key={item.id} className="lg:flex">
                    <img
                        className="object-cover w-full h-56 rounded-lg lg:w-64"
                        src={`${API_URL}/upload/Post/${item.img}`}
                        alt={item.link}
                        onClick={() => handleClick(item.name, item.link)}
                    />

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href={item.link} onClick={() => handleClick(item.name, item.link)} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                            {item.title}
                        </a>

                        <article>
                          {truncateDescription(item.description, 120)}
                        </article>
                        
                        <span className="text-sm text-gray-500 dark:text-gray-300">On: {moment(item.created_at).isAfter(moment().subtract(24, 'hours'))
                  ? moment(item.created_at).fromNow()
                  : moment(item.created_at).format('DD MMMM Y')}</span>
                    </div>
                </div>
              ))}
              {/* Add similar buttons for other content */}
              {/* ... */}
            </div>
          </div>
        </section>
      </Layout>
    )
}

export default ArtikelLabel