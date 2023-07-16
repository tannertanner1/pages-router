import Navbar from "../components/navbar.js";
import Section from "../components/section.js";
import Anchor from "../components/anchor.js";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-8">
        <Anchor href="teacher" text="Teacher" />
          <Section id="teacher">
            <p></p>
          </Section>

        <Anchor href="lessons" text="Lessons" />
          <Section id="lessons">
            <p>. . .</p>
          </Section>
          
        <Anchor href="availability" text="Availability" />
          <Section id="availability">
            <p></p>
          </Section>

        <Anchor href="calendar" text="Calendar" />
          <Section id="calendar">
            <p>. . .</p>
          </Section>

        <Anchor href="policy" text="Policy" />
          <Section id="policy">
            <p></p>
          </Section>

        <Anchor href="reviews" text="Reviews" />
          <Section id="reviews">
            <p>. . .</p>
          </Section>
      </div>
    </div>
  );
}