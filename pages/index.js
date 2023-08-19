import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center text-center justify-center">
        <div className="flex flex-col text-center justify-between mb-12">
          <h1 className="text-main text-5xl font-bold">Header</h1>
          <p className="text-main opacity-50 text-xl py-2 mt-8 mb-4">Text</p>
        </div>
      </div>
      <Footer />
    </>
  );
}