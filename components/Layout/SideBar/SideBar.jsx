import styles from './SideBar.module.scss'
import { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabaseCreate'
import Post from './Post/Post'

const SideBar = () => {
  const [posts, setPosts] = useState([])
  const [hidePosts, setHidePosts] = useState(true)

  const open_url = (url) => window.open(url, '_self')

  const get_posts = async() => {
    const { data } = await supabase
      .from('posts')
      .select()

    setPosts(data)
  }

  useEffect(async() => {
    await get_posts()
  }, [])

  return (
    <div className={styles.side_bar}>

      <div className={styles.navigation}>
        <p className={styles.header}><i className='fa-regular fa-bars'></i> Navigation</p>

        <ul>
          <li onClick={() => open_url('/')}><i className='fa-regular fa-house-chimney-blank'></i> Home</li>
          <li><i className='fa-regular fa-memo-pad'></i> About</li>
        </ul>
      </div>

      <div className={styles.blog}>
        <p className={styles.header} onClick={() => setHidePosts(!hidePosts)}><i className={hidePosts ? 'fa-regular fa-bars-staggered' : 'fa-regular fa-bars'}></i> Blog</p>

        {hidePosts && 
          posts?.map((post, index) => (
            <Post 
              name={post.name}
              tag={post.tag}
              date_posted={post.date_posted}
              index={index}
              key={index} />
        ))}
      </div>
    </div>
  )
}

export default SideBar