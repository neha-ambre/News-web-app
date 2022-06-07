import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    articles= [
        {
            "source": {
            "id": null,
            "name": "Independent.ie"
            },
            "author": "Steve Dempsey",
            "title": "Why the great post-pandemic unsubscription is under way",
            "description": "There&rsquo;s a song on the new Arcade Fire album that references subscription fatigue. Here are the opening lines: &ldquo;I unsubscribe, I unsubscribe, This ain&rsquo;t no way of life, I don&rsquo;t believe the hype.&rdquo; Subscription services grew like wi…",
            "url": "https://www.independent.ie/business/technology/why-the-great-post-pandemic-unsubscription-is-under-way-41721700.html",
            "urlToImage": "https://www.independent.ie/business/technology/9879a/41721699.ece/AUTOCROP/w1240h700/DY-PROBLEM%202.jpg",
            "publishedAt": "2022-06-05T01:30:00Z",
            "content": "Theres a song on the new Arcade Fire album that references subscription fatigue. Here are the opening lines: I unsubscribe, I unsubscribe, This aint no way of life, I dont believe the hype. Subscript… [+5043 chars]"
            },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Manraj Grewal Sharma",
        "title": "What makes Brampton the grooming ground for Punjabi rap-pop stars like Sidhu Moosewala and Deep Jandu",
        "description": "Newcomers with the music bug get support in every way from lyrics, music direction and videography to marketing and performance gigs",
        "url": "https://indianexpress.com/article/express-sunday-eye/brampton-grooming-ground-punjabi-rap-pop-stars-sidhu-moosewala-deep-jandu-7952309/",
        "urlToImage": "https://images.indianexpress.com/2022/06/Eye-Moosewala-1200.jpg",
        "publishedAt": "2022-06-05T00:45:12Z",
        "content": "This is Brampton, where anything and everything can happen, crooned Sidhu Moosewala in B-Town (2019) as a tribute to the city that built him. It was here in 2017 that the 23-year-old student from Man… [+10542 chars]"
        },
        {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "Jaguars Wire",
            "title": "Myles Jack discusses difference in culture between Steelers and Jags",
            "description": "Myles Jack talked about the difference in culture between the Steelers and Jags recently after being in Pittsburgh for just over two months.",
            "url": "https://jaguarswire.usatoday.com/2022/06/04/myles-jack-discusses-difference-in-culture-between-steelers-and-jags/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/D0v.TXVm9nnIsJmTpYwPhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04ODM-/https://s.yimg.com/uu/api/res/1.2/D3WgoiD8QtcT0K_xRTUbmw--~B/aD0xODg0O3c9MjU2MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/jacksonville_jaguars_wire_usa_today_sports_articles_630/3aa55ff6e308890c7caf41ed2e5a625a",
            "publishedAt": "2022-06-05T00:25:35Z",
            "content": "When the Jacksonville Jaguars take the field this regular season, the team is going to look significantly different than it did in 2021 and the years before. One of the biggest differences on the def… [+3693 chars]"
            },
            {
                "source": {
                "id": null,
                "name": "Electrek"
                },
                "author": "Mikey G",
                "title": "Quick Charge Podcast: June 4, 2022",
                "description": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is available now on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players. New episodes of Quick Charge are recorded Monday through Thursday and agai…",
                "url": "https://electrek.co/2022/06/04/quick-charge-podcast-june-4-2022/",
                "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/01/quick-charge-placeholder-lead-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2022-06-05T02:07:47Z",
                "content": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is available now on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players.\r\nNew episodes … [+721 chars]"
                }
        ]

    static defaultProps={
        country:'in',
        pageSize:5,
        category:'general',
        searchTerm:''
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        searchTerm: PropTypes.string
    }


    constructor(props){
        super(props);
        // console.log('hello')
        document.title=`${this.props.category}- Here'sUrNews`
        this.state ={
            articles:this.articles,
            loading :false,
            page:1
        }
    }

    //componentDidMount -
    // async - async it
    // await - wait for promise
    // fetch- fetches a url and returns a url

    updateNews=async()=>{
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ed54f9e8d494eb5ac230908395ad0d3&${this.props.page}=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

   async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ed54f9e8d494eb5ac230908395ad0d3&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData= await data.json();
        // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
        this.updateNews();
    }

    handlePreviousClick = async() =>{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=4ed54f9e8d494eb5ac230908395ad0d3&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData= await data.json();
        
        // this.setState({
        //     page : this.state.page-1,
        //     articles:parsedData.articles
        // })

        this.setState({page:this.state.page-1});
        this.updateNews();

    }

    handleNextClick = async() =>{
        // if(this.state.page+1<=Math.ceil(this.state.totalResults/this.props.pageSize))
        // {
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=4ed54f9e8d494eb5ac230908395ad0d3&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData= await data.json();

        // this.setState({
        //     page : this.state.page+1,
        //     articles:parsedData.articles
        // })}
        this.setState({page:this.state.page+1});
        this.updateNews();
    }


  render() {
    return (
      <div>
          <div className="container my-3">
              <h2 className="text-center">Top {this.props.category} Headllines</h2>

              {this.state.articles.map((element) => {console.log(element)})}
              <div className="row my-2 mx-2">
              {this.state.articles.map((element) => {
                 return (
                           <div className="col-md-4 my-3"  key={element.url}>
                           <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                           </div>
                 )
                  })}
              </div>
          
          </div>

          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.handlePreviousClick} type="button" className="btn btn-dark"> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
          </div>
      </div>

    )
  }
}

export default News