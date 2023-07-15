import Screen from "./screen.js";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100 flex items-center justify-center p-26">
        <div className="hero-content flex-col lg:flex-row-reverse lg:item-start space-y-8 items-center lg:items-start lg:justify-between">
          <div style={{ backgroundColor: "darkgray", height: "25rem", width: "20rem" }} className="max-w-sm rounded-lg shadow-2xl" />

          <Screen classNames={["mr-24", ""]}>
            <Screen classNames={["mt-12", ""]}>
              <h1 className="text-5xl text-center font-bold mb-8">Header</h1>
            </Screen>
            <p className="py-2 text-center mb-8">Text</p>

            <div className="flex justify-center lg:justify-start space-x-10">
              <Link href="/about">
                <button className="btn btn-neutral">Learn more</button>
              </Link>
              
              <Link href="/book">
                <button className="btn btn-neutral mb-14">Book now</button>
              </Link>
            </div>

          </Screen>
        </div>
      </div>
    </div>
  );
}