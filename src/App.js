import React from 'react';
import axios from"axios"; //import axios
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  //시간이 걸리는 것을 알려주기 위해 async await 사용
  getMovies = async() => {
    const {
      data: {
        data : {movies}}
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by_rating"); //?sort_by=rating
      this.setState({movies, isLoading: false})
  };
    
    componentDidMount(){
    this.getMovies();
}
  render() {
    const { isLoading,movies} = this.state;
    return (
    <section className = "container">
      {isLoading ? (
      <div className = "loader">
        <span className = "loader__text">Loading. . .</span>
      </div> 
    ) : ( 
      <div className = "movies">
       {movies.map(movie =>(
      <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          />
      ))}
        </div>
        )}
      </section>
    );
  }
}

export default App;