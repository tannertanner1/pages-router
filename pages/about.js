import Navbar from '../components/navbar.js';
import Anchor from '../components/anchor.js';

export default function About() {
  return (
    <div> 
      <Navbar />

        <Anchor href={`/about#teacher`} text="Teacher" />
        <Anchor href={`/about#lessons`} text="Lessons" />
        <Anchor href={`/about#availability`} text="Availability" />
        <Anchor href={`/about#calendar`} text="Calendar" />
        <Anchor href={`/about#policy`} text="Policy" />
        <Anchor href={`/about#reviews`} text="Reviews" />
        
    </div>
  );
}