import {useState, useEffect} from 'react';
import './App.css';
import Player from './components/Player';

function App() {
   const [songs] = useState([
      {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "https://images.genius.com/78a548b487527dbed33d23fbb9b1592a.1000x1000x1.jpg",
      src: "./music/Forget.mp3"
    },
    {
      title: "Bloody Valentine",
      artist: "Machine Gun Kelly",
      img_src: "https://m.media-amazon.com/images/M/MV5BNmQ3ZWVmZDUtMjZhYy00ODYwLTg1NTEtMWVhNjZjMTc1ZWMxXkEyXkFqcGdeQXVyMTExNzIzNjg4._V1_.jpg",
      src: "./music/Valentine.mp3"
    },
    {
      title: "My Ex's Best Friend",
      artist: "Machine Gun Kelly",
      img_src: "https://www.the360mag.com/wp-content/uploads/2020/10/Machine-Gun-Kelly-Press-Photo-scaled-e1601935300743.jpg",
      src: "./music/Ex.mp3"
    },
    {
      title: "I Think I'm OKAY",
      artist: "Machine Gun Kelly",
      img_src: "https://m.media-amazon.com/images/I/71ddB5lxjSL._SS500_.jpg",
      src: "./music/Okay.mp3"
    }]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}
export default App;