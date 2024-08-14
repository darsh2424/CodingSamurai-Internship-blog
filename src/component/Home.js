import React, { useState, useEffect } from 'react'
import Carousel from './Carousel';

const Home = ({ isDarkMode, loading, setLoading }) => {
  const [posts, setPosts] = useState([]);
  const [filterposts, setFilterPosts] = useState([]);
  const [displayPost, setDisplayPost] = useState([]);
  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyDKCILi9WRoaYoFed6m2sMRB2uFCxzV9o8`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (data.items && data.items.length > 0) {
          const formattedPosts = data.items.map(post => ({
            author: post.author.displayName || '',
            title: post.title || '',
            content: post.content ? stripHTML(post.content) : '',
            published: post.published || '',
            url: post.url || '',
          }));
          setPosts(formattedPosts);
          setDisplayPost(formattedPosts.slice(0, 4));
          // Sort posts by published date in descending order (newest first)
          const sortedPosts = formattedPosts.sort((a, b) => new Date(b.published) - new Date(a.published));
          // Get the top 3 newest posts
          const topPosts = sortedPosts.slice(0, 3);
          // Update the state with the sorted and sliced posts
          setFilterPosts(topPosts);
        } else {
          console.log('No posts found.');
        }
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));  // Set loading to false after data is fetched
  }, [setLoading]); // Empty dependency array ensures this runs only once after the component mounts

  function stripHTML(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  const changePost = (string) => {
    if (string === 'more') {
      setDisplayPost(posts)
    } else if (string === 'less') {
      setDisplayPost(posts.slice(0, 4))
    }
  }
  return (
    <>
      {loading ? (  // Show loading indicator while loading
        <div className="loading">
          <h2>Loading Please Wait..</h2>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Carousel isDarkMode={isDarkMode} filterposts={filterposts} loading={loading} />
          <div className='mx-2'>
            <h4 className='border border-bottom-0 border-start-0 border-end-0 mt-1'>
              <button type="button" className={`btn fs-5 text-start ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                All Blogs <span className="badge text-bg-dark">{posts.length}*</span>
              </button>
            </h4>
            <div>
              <div className='row'>
                {displayPost.map((item, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className={`card h-100 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
                      <div className={`card-body ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        <h5 className="card-title"><em>&quot;{item.title}&quot;</em> -- <div className='d-inline opacity-50'><i>{item.author}</i></div></h5>
                        <small className="card-text">{item.content.slice(0, 500)}..</small>
                        <div className='d-flex opacity-75 justify-content-end my-2'>
                          <i className="card-text">Published : {new Date(item.published).toLocaleDateString()}</i>
                        </div>
                        <div className='d-flex justify-content-end my-2'>
                          <a href={item.url} className="btn btn-primary">Read More...</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='mx-2 my-2 d-flex justify-content-end'>
                {
                  displayPost.length === posts.length ? (
                    <button
                      className='border-top-0 border-start-0 border-end-0 text-primary fs-5 fw-bold link'
                      onClick={() => changePost('less')}  // Pass a function reference
                    >
                      View Less
                    </button>
                  ) : (
                    <button
                      className='border-top-0 border-start-0 border-end-0 text-primary fs-5 fw-bold link'
                      onClick={() => changePost('more')}  // Pass a function reference
                    >
                      View More
                    </button>
                  )
                }
              </div>

            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
