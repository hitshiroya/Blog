import './sidebar.css'

export const Sidebar = () => {
  return <div className="sidebar" >
      <div className="sidebarItem">
          <span className="sdtitle">About ME</span>
          <img className='side_img' src="sdtitle.jpg" alt=" "/>
          <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eaque dolorem enim ipsam cumque numquam suscipit voluptates, iusto ipsum dicta, aliquid delectus sit vel vitae placeat porro laudantium cum rem.
          </p>
      </div>
      <div className="sidebarItem">
      <span className="sdtitle">CATEGORIES</span>
      <ul className="sidebarlist">
            <li className="sidelistitem">Life</li>
            <li className="sidelistitem">Music</li>
            <li className="sidelistitem">Style</li>
            <li className="sidelistitem">Sports</li>
            <li className="sidelistitem">Cinema</li>
            <li className="sidelistitem">Tech</li>

      </ul>

      <div className="sidebarItem">
          <span className="sdtitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className='scs' class="fab fa-twitter"></i>
          <i className='scs' class="fab fa-facebook"></i>
          <i className='scs' class="fab fa-instagram"></i>
          <i className='scs' class="fab fa-pinterest"></i>
          </div>
      </div>
          
      </div>
  </div>
};
