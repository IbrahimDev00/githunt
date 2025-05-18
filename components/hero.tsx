import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function Header() {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]" style={{ height: 200 }}>
      <FlickeringGrid
        squareSize={3}
        gridGap={5}
        flickerChance={0.45}
        color="rgb(46, 160, 67)"
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-[#FAE9D5] text-4xl font-semibold">GitHunt</h1>
        <h2 className="text-white text-3xl">Your hunt for open-source end`s here</h2>
      </div>
    </div>
  );
}