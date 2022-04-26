import { useState, useEffect } from 'react';

import Pages from './Pages';

const categoryUrl = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories';
const bookUrl = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    const response = await fetch(`${bookUrl}&page=${page}`);
    console.log(page)
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    (async function () {
      setPosts(await getData())
    })()
  }, [page]);

  return (
    <div>
      <h1>b3k3n</h1>
      <Pages page={page} setPage={setPage} />
      {
        posts.length ? (
          posts.map(p => (
            <h2 key={p.id}>{p.title}</h2>
          ))
        ) :
        <h2>No posts</h2>
      }
    </div>
  );
}


export default App;
