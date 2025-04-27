import type { NextPage } from 'next';
import SpotifyLogo from '@/components/SpotifyIcon';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <SpotifyLogo />
    </div>
  );
};
export default Home;
