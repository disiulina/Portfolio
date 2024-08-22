import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "python",
  "github",
  "visualstudiocode",
  "figma",
  "mariadb",
  "microsoft",
  "canva",
  "go",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg ">
      <div className="absolute text-white text-4xl font-bold">Skills</div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
