import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Header() {
  return (
    <FlickeringGrid squareSize={3} gridGap={5} flickerChance={0.45} color="rgb(46, 160, 67)" className="w-full h-1/2"/>
  );
}
