import Row from './Components/Row';
import './App.css';
import requests from './request';
import Banner from './Components/Banner';
import Nav from './Components/Nav'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row 
      isLargeRow={true}
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests. fetchActionMovies}/>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
