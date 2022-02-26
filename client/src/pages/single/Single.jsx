import { Post } from '../../components/post/Post'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { SinglePost } from '../../components/singlePost/SinglePost'
import './Single.css'


export const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
