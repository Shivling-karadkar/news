import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {


    articles=[
    
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "US Supreme Court allows Trump to use Alien Enemies Act for deportations",
  "description": "A judge had blocked the Trump administration's use of the 1798 Alien Enemies Act to deport alleged Venezuelan gang members.",
  "url": "https://www.bbc.co.uk/news/articles/cp34ylep987o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5c70/live/520df730-140e-11f0-b234-07dc7691c360.jpg",
  "publishedAt": "2025-04-08T03:07:24.094563Z",
  "content": "\"The notice must be afforded within a reasonable time and in such a manner as will allow them to actually seek habeas relief in the proper venue before such removal occurs,\" the justices wrote in the… [+3234 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "The homebuyers who lost thousands when their off-plan dream turned sour",
  "description": "Enrico and Luciana Marini put money down on a flat in Leeds in 2021, only for it later to be devalued.",
  "url": "https://www.bbc.co.uk/news/articles/c0kgr0y6e10o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0dac/live/d65fb0e0-0339-11f0-9d83-c7f80f10afdc.jpg",
  "publishedAt": "2025-04-08T00:52:18.6595131Z",
  "content": "\"We had really good credit scores, we had enough income to cover the payments, so it was very surprising to us when the mortgage was denied,\" Mr Marini says.\r\n\"I can't express how sad, stressful, dem… [+1171 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "The neighbourhood that could hold the secret to fixing the NHS",
  "description": "With public satisfaction in the NHS just 21%, one area has a plan to shake up its services that could reduce GP waiting lists, as well as unblock hospital beds - but can it really work nationwide?",
  "url": "https://www.bbc.co.uk/news/articles/cn4w2p79v9eo",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ff01/live/2171b530-113e-11f0-ba12-8d27eb561761.jpg",
  "publishedAt": "2025-04-07T23:52:15.9097797Z",
  "content": "There are deeper rooted political pressures too that make a nationwide rollout of centres like those in Birmingham a challenge.\r\nEven though the work in east Birmingham ticks a lot of the boxes set o… [+1198 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "What can Keir Starmer do in a world buffeted by Donald Trump?",
  "description": "The government is leaning into this moment of turbulence but can it make a difference.",
  "url": "https://www.bbc.co.uk/news/articles/c75d73z3rkqo",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/72bf/live/eec322d0-13f0-11f0-9cef-dd28d409e180.png",
  "publishedAt": "2025-04-07T23:37:27.7521927Z",
  "content": "The prime minister has said that the world has \"fundamentally changed,\" which poses the question whether he and his government is willing to fundamentally change its outlook and policies?\r\nFirstly, t… [+949 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Newspaper headlines: 'New China tariff threat' and 'gift of life'",
  "description": "Most of Tuesday's front pages lead with the latest turmoil on the world's markets.",
  "url": "https://www.bbc.co.uk/news/articles/cgrg250llvpo",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7370/live/03e0d270-13fb-11f0-b234-07dc7691c360.png",
  "publishedAt": "2025-04-07T23:37:21.6755798Z",
  "content": "Image caption, Most of Tuesday's front pages lead with markets around the world which continued to slide as US President Donald Trump vowed to stay the course. In its headline the i Paper says \"billi… [+182 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Madonna and Elton John bury hatchet after lip-sync feud",
  "description": "Madonna said the pair had reconciled after she went to \"confront\" Sir Elton following a performance of his new songs on Saturday Night Live.",
  "url": "https://www.bbc.co.uk/news/articles/cwynd3l5vz3o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6e5c/live/00e14380-13fa-11f0-b234-07dc7691c360.jpg",
  "publishedAt": "2025-04-07T22:37:20.1114927Z",
  "content": "The Vogue singer, 66, said she had been a fan of Sir Elton since she was a teenager.\r\n\"Seeing him perform when I was in high school changed the course of my life,\" the post read.\r\n\"Over the decades i… [+1051 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Trump says US in direct nuclear talks with Iran",
  "description": "The US president says negotiations have taken place at a \"very high level\" between the two countries.",
  "url": "https://www.bbc.co.uk/news/articles/cx25e5rd2v9o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2e4a/live/e0252730-13f2-11f0-9654-bb8b96182dd5.jpg",
  "publishedAt": "2025-04-07T21:52:20.1760303Z",
  "content": "In March, Trump sent a letter to Iran's leader via an intermediary from the United Arab Emirates setting out his willingness to negotiate. \r\nThat offer was rejected by Iran, though its leadership sig… [+1742 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Celebrity Big Brother: Michael Fabricant, Chris Hughes, Mickey Rourke and Patsy Palmer in house",
  "description": "The latest Celebrity Big Brother begins on ITV - with ex-MP Michael Fabricant and EastEnder Patsy Palmer among the contestants.",
  "url": "https://www.bbc.co.uk/news/articles/c4g2ejjr0n7o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/496f/live/f2e5c740-13ec-11f0-ac9f-c37d6fd89579.jpg",
  "publishedAt": "2025-04-07T21:52:17.0649892Z",
  "content": "Image caption, JoJo Siwa has been a dancer, pop star, actress and hair bow trendsetter\r\nOscar-nominated actor Mickey Rourke, US media personality JoJo Siwa, EastEnders star Patsy Palmer, Love Island'… [+4498 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "First baby born in UK to woman with transplanted womb",
  "description": "Grace Davidson gave birth to a baby girl two years after her sister's womb was transplanted into her body.",
  "url": "https://www.bbc.co.uk/news/articles/c78jd517z87o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9733/live/8a3d01a0-130a-11f0-ba12-8d27eb561761.jpg",
  "publishedAt": "2025-04-07T21:07:24.2212208Z",
  "content": "Prof Richard Smith, a gynaecological surgeon at Imperial College London, who led the organ retrieval team, has been researching womb transplantation for more than two decades.\r\nHe says his team is th… [+1483 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "King Charles and Queen Camilla arrive in Italy for state visit",
  "description": "The UK's ambassador to Italy, Lord Llewellyn, said the trip \"comes at a key moment\" as the British government tries to reset relations with the EU after Brexit.",
  "url": "https://www.bbc.co.uk/news/articles/c70ze48nel8o",
  "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/cc23/live/f42cca30-13c0-11f0-b1c4-498f305c3d3a.jpg",
  "publishedAt": "2025-04-07T16:22:19.8779324Z",
  "content": "State visits, carried out on behalf of the UK government, are an eclectic mix of elaborate ceremony, charming the crowds, flying the flag for business, trying local food and addressing serious intern… [+1204 chars]"
  
  }
    ]
  
  constructor()
  {
    super();
    
    this.state={
      // articles : this.articles
      articles : [],
      loading : false,
      page :1
  
    }
  }
  
 
 async componentDidMount(){
  // let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=44d50cdcc3fc4c0487845a9378ce395d";
  let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d557fa373c64775a4b1c76d73a693f3";
  let data =await fetch(url);
  let parsedData =await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles})
 }
  render() {

   return (
      <div className='container my-4 '>
        <h2>NewsMonkey   - Top Headlines</h2>
        
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          return (
            <div className="col-md-3" key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}
        />
        </div>
       
          );
  })}
          
        
      </div>

      </div>
    )
  }
}

export default News
