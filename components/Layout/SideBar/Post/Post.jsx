import styles from './Post.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Post = ({name, date_posted, tag, index}) => {
  const router = useRouter()
  const { pathname } = router

  const [containers, setContainers] = useState(false)

  const load_url = (id) => window.open(`/post/${id}`, '_self')

  useEffect(() => {
    setTimeout(() => {
      setContainers(true)
    }, pathname == '/post/[id]' ? 0 : index * 500);
  }, [])

  return (
    <button className={styles.post_button} onClick={() => load_url(index + 1)}>
      {containers && <span className={styles.name} style={pathname == '/post/[id]' ? {animation: '0'} : null}>{name}</span>}
      {containers && <span className={styles.tag} style={pathname == '/post/[id]' ? {animation: '0'} : null}>#{tag}</span>}
      {containers && <span className={styles.date_posted} style={pathname == '/post/[id]' ? {animation: '0'} : null}>{new Date(date_posted).toLocaleString()}</span>}
    </button>
  )
}

export default Post