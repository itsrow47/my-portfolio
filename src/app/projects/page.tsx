import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { CodeIcon, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      {" "}
      <section
        id="about"
        className="py-10 prose text-muted-foreground dark:prose-invert text-sm mx-auto"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid grid-cols-5">
            <div className="flex items-start justify-center">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
                <CodeIcon size={24}></CodeIcon>
              </div>
            </div>
            <div className="col-span-4 border-b flex items-start flex-col">
              <div className="flex gap-5">
                <div className="font-bold text-base">Project 1</div>
              </div>
              <p>
                Proident cupidatat eiusmod dolor cupidatat ad in magna labore
                occaecat ipsum ad sunt labore pariatur. Duis ipsum esse anim est
                commodo ad non dolore. Irure ea anim ex irure laborum velit
                occaecat elit. Sunt sit dolor irure excepteur occaecat. Commodo
                enim minim labore est minim nisi id ullamco. Non id ullamco enim
                culpa. Pariatur nisi deserunt ut cillum culpa sint qui dolor
                officia aute est.
              </p>
              <Link
                href="/"
                className="text-xs text-blue-500 group flex items-center gap-x-1 no-underline"
              >
                Read More
                <div className="group-hover:translate-x-1 transition duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <br></br>
            </div>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 10 * 0.05} className="">
          <div className="grid grid-cols-5">
            <div className="flex  items-start justify-center">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
                <Cloud size={24}></Cloud>
              </div>
            </div>
            <div className="col-span-4 border-b flex items-start flex-col">
              <div className="flex gap-5">
                <div className="font-bold text-base">Project 2</div>
              </div>
              <p>
                Proident cupidatat eiusmod dolor cupidatat ad in magna labore
                occaecat ipsum ad sunt labore pariatur. Duis ipsum esse anim est
                commodo ad non dolore. Irure ea anim ex irure laborum velit
                occaecat elit. Sunt sit dolor irure excepteur occaecat. Commodo
                enim minim labore est minim nisi id ullamco. Non id ullamco enim
                culpa. Pariatur nisi deserunt ut cillum culpa sint qui dolor
                officia aute est.
              </p>
              <Link
                href="/"
                className="text-xs text-blue-500 group flex items-center gap-x-1 no-underline"
              >
                Read More
                <div className="group-hover:translate-x-1 transition duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <br></br>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
