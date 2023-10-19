export function TwitterCard({children, name, username, isFollowing, functionExterna, trozoCode}){
    const Image = `https://unavatar.io/${username}`;
    const addAlt = (username) => `@${username}`; 
    return( 
        <article className="card-twitter" style={{display:'flex', color:'#fff', alignItems:'center', fontSize: '.8 rem'}}>   
            <header> 
              <img src={Image}></img>
              <div>
                <strong>{name}</strong>
                <span>{addAlt(username)}</span>
              </div>
            </header>
            <aside>
                <button>Seguir {children}</button>
                {trozoCode}
            </aside>
        </article>
    )
}