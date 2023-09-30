import Image from "next/image";

export default function Img({ src, alt, children }) {
  return (
    <div className={`relative ${children}`} style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        // importing an image automatically sets width and height
        src={src}
        alt={alt}
        // makes image display full width
        style={{ width: '100%', height: 'auto' }}
        sizes="100vw"
      />
    </div>
  );
}