const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const fullContent= document.querySelector(".full-content")

function renderContent(){
    for(let i=0; i< posts.length; i++){
                
        fullContent.innerHTML +=`
                 <section>
                    <div class="container">
                        <div class="user-info">
                                <img class='avatar' src=${posts[i].avatar}>
                                <div>
                                    <div><span class="user-name bold">${posts[i].name}</span></div>
                                    <span class="location-text">${posts[i].location}</span>
                                </div>
                        </div>
                        
                        <img class="post-image" src=${posts[i].post}>
                            
                        <div class="content">
                            <div class="icons">
                                <img id="like"    class="icon" src="images/icon-heart.png">
                                <img id="comment" class="icon" src="images/icon-comment.png">
                                <img id="share"   class="icon" src="images/icon-dm.png">
                            </div>
                            <div class="like-count bold">${posts[i].likes} likes</div>
                            <div class="caption"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</div>
                        </div>
                     </div>
                 </section>`
    }
}

renderContent()
