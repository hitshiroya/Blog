import './post.css'

export const Post = () => {
  return <div className='post'>
    <img className='postimg' src="sdtitle.jpg" alt="" />

    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
      </div>
      <span className="posttitle">Javascript with machine </span>
      <hr />
      <span className="postDate">1hour ago</span>

    </div>
    <p className='postDes'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita error nobis vero maiores delectus atque, temporibus nulla repellat ullam molestiae quia porro omnis mollitia ad architecto, aliquam voluptatem quod?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sint itaque, a laborum quis nisi, quo, harum numquam labore fugit beatae nesciunt nemo voluptatibus accusamus. Dignissimos ut dolore laudantium sed!      
    </p>
  </div>;
};
