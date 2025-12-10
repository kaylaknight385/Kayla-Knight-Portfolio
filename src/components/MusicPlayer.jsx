import { useEffect } from 'react';
import girlsGoneWild from '../music/JT-Girls-Gone-Wild-(SixLoaded.com).mp3';

function MusicPlayer() {
  useEffect(() => {
    const track_list = [
      {
        name: "Girls Gone Wild - JT",
        path: girlsGoneWild
      },
       {
        name: "Girls Gone Wild - JT",
        path: girlsGoneWild
      },
       {
        name: "Girls Gone Wild - JT",
        path: girlsGoneWild
      },
       {
        name: "Girls Gone Wild - JT",
        path: girlsGoneWild
      }
    ];

    let track_index = 0;
    let isPlaying = false;
    let updateTimer;
    const curr_track = document.getElementById("music");
    const track_name = document.querySelector(".songtitle");
    const playpause_btn = document.querySelector(".playpause-track");
    const seek_slider = document.querySelector(".seek_slider");
    const curr_time = document.querySelector(".current-time");
    const total_duration = document.querySelector(".total-duration");

    function loadTrack(index) {
      clearInterval(updateTimer);
      resetValues();
      curr_track.src = track_list[index].path;
      curr_track.load();
      track_name.textContent = track_list[index].name;
      updateTimer = setInterval(seekUpdate, 1000);
      curr_track.addEventListener("ended", nextTrack);
    }

    function resetValues() {
      curr_time.textContent = "0:00";
      total_duration.textContent = "0:00";
      seek_slider.value = 0;
    }

    window.playpauseTrack = function() {
      if (!isPlaying) playTrack();
      else pauseTrack();
    };

    function playTrack() {
      curr_track.play();
      isPlaying = true;
      playpause_btn.className = "playpause-track fas fa-pause";
    }

    function pauseTrack() {
      curr_track.pause();
      isPlaying = false;
      playpause_btn.className = "playpause-track fas fa-play";
    }

    window.nextTrack = function() {
      if (track_index < track_list.length - 1) track_index += 1;
      else track_index = 0;
      loadTrack(track_index);
      if (isPlaying) playTrack();
    };

    window.prevTrack = function() {
      if (track_index > 0) track_index -= 1;
      else track_index = track_list.length - 1;
      loadTrack(track_index);
      if (isPlaying) playTrack();
    };

    window.volumeUp = function() {
      if (curr_track.volume < 1.0) {
        curr_track.volume = Math.min(1.0, curr_track.volume + 0.2);
      }
    };

    window.volumeDown = function() {
      if (curr_track.volume > 0.0) {
        curr_track.volume = Math.max(0.0, curr_track.volume - 0.2);
      }
    };

    window.seekTo = function() {
      const seekto = curr_track.duration * (seek_slider.value / 100);
      curr_track.currentTime = seekto;
    };

    function seekUpdate() {
      let seekPosition = 0;
      if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
        if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
      }
    }

    loadTrack(track_index);

    return () => {
      clearInterval(updateTimer);
    };
  }, []);

  return (
    <div className="player">
      <div className="window">
        <div className="window-body">
          <div className="flex">
            <div className="wheel" style={{height: '100px', width: '100px'}}>
              <div className="wheelcontrols">
                <button className="fas fa-plus" onClick={() => window.volumeUp()} style={{paddingTop: '4px', paddingBottom: '0'}}></button>
              </div>
              <table className="wheelcontrols">
                <tbody>
                  <tr>
                    <th><button className="fas fa-backward" onClick={() => window.prevTrack()}></button></th>
                    <th className="innerwheel"><button className="playpause-track fas fa-play" onClick={() => window.playpauseTrack()}></button></th>
                    <th><button className="fas fa-forward" onClick={() => window.nextTrack()}></button></th>
                  </tr>
                </tbody>
              </table>
              <div className="wheelcontrols" style={{padding: '0'}}>
                <button className="fas fa-minus" onClick={() => window.volumeDown()}></button>
              </div>
            </div>
            <div id="musicplayer">
              <div className="flex">
                <marquee scrollAmount="4" className="songtitle"></marquee>
              </div>
              <div className="seeking">
                <div className="current-time">00:00</div>
                <input type="range" min="1" max="100" defaultValue="0" className="seek_slider" onChange={() => window.seekTo()} />
                <div className="total-duration">0:00</div>
              </div>
              <table className="controls">
                <tbody>
                  <tr>
                    <td><button><div className="fas fa-sync"></div></button></td>
                    <td><button><div className="fas fa-music"></div></button></td>
                    <td><button><div className="fas fa-random"></div></button></td>
                  </tr>
                </tbody>
              </table>
              <audio id="music" src=""></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
