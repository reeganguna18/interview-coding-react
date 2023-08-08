import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiFetching() {
    const [datas, setDatas] = useState([])
  //https://jsonplaceholder.typicode.com/posts
  const url = "https://jsonplaceholder.typicode.com/posts";
  console.log(datas);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        // console.log(data);
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return <div>
    <ol>
        {datas && datas.slice(0,10).map((list, i)=> {
            return (
                <li key={i}>
                    {list.title}
                </li>
            )
        })}
    </ol>
  </div>;
}

export default ApiFetching;
