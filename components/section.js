export default function Section({ id, children }) {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center">
      {children}
    </section>
  );
};