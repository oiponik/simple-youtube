class Youtube{
  constructor(key){
    this.key = key;

  }

  async mostPopular(){
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      headers: { }
    };
    return(
      axios(config)
    )
    
    .then(response =>
      response.data.items
    )
    .catch(error =>
      console.log(error)
    );
  }
  async search(query){
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&&type=video&key=${this.key}`,
      headers: { }
    };
    console.log(config.url)
    return(
      axios(config)
    )
    .then(function (response) {
      const copyVideo = [];
      response.data.items.map((item, index)=>{
        copyVideo.push({...item, id:item.id.videoId})
      })
      return (copyVideo);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}

export default Youtube;