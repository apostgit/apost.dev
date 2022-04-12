import styles from '../../components/Post/Post.module.scss'
import { useState } from 'react'
import { supabase } from '../../utils/supabaseCreate'

const post = () => {
  const [name, setName] = useState()
  const [tag, setTag] = useState()
  const [content, setContent] = useState()

  const create_post = async() => {

    const { data, error } =  await supabase
      .from('posts')
      .insert([
        {name, tag, body: content}
      ])

    console.log(data, error)
  }

  return (
    <div className={styles.post}>

      <div className={styles.form}>
        <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
        <input type='text' placeholder='Tag' value={tag} onChange={e => setTag(e.target.value)} />

        <textarea type='text' placeholder='Content' value={content} onChange={e => setContent(e.target.value)} />

        <button onClick={() => create_post()}>
          <i className='fa-solid fa-plane-up'></i>
          Post
        </button>
      </div>
    </div>
  )
}

export default post