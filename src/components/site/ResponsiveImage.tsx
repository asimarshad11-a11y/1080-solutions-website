import type { ImgHTMLAttributes } from "react";

// The two damaged landscape originals are retained in the repository for recovery,
// but are not published or processed until replacement photographs are supplied.
const originals = import.meta.glob<string>(
  ["/src/assets/*.{jpg,jpeg,png,webp}", "!/src/assets/landscape-lighting-*"],
  {
    eager: true,
    import: "default",
  },
);
const variants = import.meta.glob<string>(
  ["/src/assets/*.{jpg,jpeg,png,webp}", "!/src/assets/landscape-lighting-*"],
  {
    eager: true,
    import: "default",
    query: "?w=480;768;1280;1920&format=webp&quality=80&as=srcset",
  },
);
const sourceSets = new Map(Object.entries(originals).map(([path, url]) => [url, variants[path]]));

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

/** Build-time WebP variants preserve the original image as a fallback. */
export function ResponsiveImage({ src, sizes = "100vw", ...props }: Props) {
  const srcSet = sourceSets.get(src);
  return (
    <picture>
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <img decoding="async" {...props} src={src} sizes={sizes} />
    </picture>
  );
}
