const posts=[

    {title:'post 1',body:'this is post one'},
  
    {title:'post 2',body:'this is post two'}
  
  ]
  
  
  
  const createPost= function(post){
  
    new Promise((resolve,reject)=>{
  
      setTimeout(()=>{
  
        posts.push(post)
  
        console.log(post)
  
        const correct=true;
  
        if(correct){
  
          resolve()
  
        }else{
  
          reject('error something wrong in promise1')
  
        }
  
      },1000)
  
    })
  
  }
  
  
  
  const updateLastUserActivityTime=function(){
  
    new Promise((resolve,reject)=>{
  
      setTimeout(()=>{
  
        const time=new Date();
  
        let utcOffset=time.getTimezoneOffset();
  
        time.setMinutes(time.getMinutes()-utcOffset)
  
        console.log(time)
  
        resolve(time);
  
        reject("Error in data")
  
      },1000)
  
    })
  
  }
  
  function deletePost(){
  
      return new Promise((resolve, reject) => {
  
        setTimeout( () => {
  
          if(posts.length > 0){
  
            const poppedElement = posts.pop();
  
            // console.log(poppedElement.title)
  
            resolve(poppedElement);
  
          } else{
  
            reject('error')
  
          }
  
        }, 1000)
  
      })
  
    }
  
  Promise.all([createPost({title: 'Post three', body: 'This is Post three'}), updateLastUserActivityTime(),createPost({title: 'Post four', body: 'This is Post four'}), updateLastUserActivityTime(),deletePost()]).then(()=>{
  
    console.log("posts:")
  
    console.log(posts)
  
  })