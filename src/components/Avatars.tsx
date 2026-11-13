import Image from "next/image";

const sources = [1, 2, 3, 4].map((n) => `/avatar/avatar-${n}.jpg`);

type AvatarsProps = {
  size?: number;
  count?: 1 | 2 | 3 | 4;
  overlap?: number;
  ringClassName?: string;
};

export function Avatars({ size = 30, count = 3, overlap = 6, ringClassName = "border-white" }: AvatarsProps) {
  return (
    <span className="flex items-center" aria-hidden="true">
      {sources.slice(0, count).map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className={`box-border rounded-full border-2 object-cover ${ringClassName}`}
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -overlap }}
        />
      ))}
    </span>
  );
}