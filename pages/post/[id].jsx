import styles from '../../components/Post/Id/Id.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supabaseCreate'

const id = () => {
  const router = useRouter()
  const { query } = router

  const [post, setPost] = useState()

  const get_post = async() => {
    const { data } = await supabase
      .from('posts')
      .select()
      .match({id: query.id})

    data && setPost(data[0])
  }

  useEffect(async() => {
    await get_post()
  }, [query.id])
  

  return (
    <div className={styles.post}>
      {post?.name}
      {post?.tag}
      {post?.body}
    </div>
  )
}

export default id