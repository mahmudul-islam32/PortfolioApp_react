import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
   if(this.props.data){
      var projects = this.props.data.projects.map((projects) => {
         var url ='images/portfolio/'+projects.image;

         return <div className="columns portfolio-item">
         <div className="item-wrap">

            <a href={projects.modal} title="">
               <img alt="" src={url} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                      <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                   </div>
               </div>
               <div className="link-icon"><i className="icon-plus"></i></div>
            </a>

         </div>
       </div>
      })
   }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	  
             {projects}

            </div>

         </div>

      </div>

   </section>
    );
  }
}

export default Portfolio;
