import Headphones from '@/../public/assets/icons/Headphones Icon.svg';

import { useEffect, useState } from 'react';
type SpotifyTrack = {
  title: string;
  artist: string;
  album: string;
  image: string;
  albumArt: string;
  link: string;
  isPlaying: boolean;
};
export const SpotifyEmbed = () => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCurrentTrack = async () => {
      console.log('refetch');
      try {
        const res = await fetch(
          'https://ezekiels-portfolio-backend.onrender.com/currently-playing',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setTrack(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching current track:', error);
        setLoading(false);
      }
    };
    fetchCurrentTrack();
    window.addEventListener('focus', fetchCurrentTrack);
    window.addEventListener('visibilitychange', fetchCurrentTrack);

    return () => {
      window.removeEventListener('focus', fetchCurrentTrack);
      window.removeEventListener('visibilitychange', fetchCurrentTrack);
    };
  }, []);

  const trackDisplay = track?.isPlaying
    ? track.title + ' - ' + track.artist
    : 'No track playing';

  return (
    <div className="flex flex-col md:flex-row md:items-center text-grey-opaque gap-2">
      <div className="flex items-center gap-4">
        <img src={Headphones} />
        <p className="text-sm font-normal flex flex-col lg:flex-row lg:items-center lg:gap-2 -tracking-smallest">
          Shipping while enjoying some tunes
          <br className="lg:hidden"></br>
          <span className="spotify-text text-sm truncate overflow-ellipsis w-[150px] md:w-auto font-inter-tight italic">
            {loading && 'Getting track...'} {track && trackDisplay}
          </span>
        </p>
      </div>
    </div>
  );
};
