import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { CodeIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="mt-5">
      {" "}
      <section
        id="about"
        className="prose text-muted-foreground dark:prose-invert text-sm mx-auto"
      >
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4 mb-8">
            <CodeIcon size={32}></CodeIcon>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="flex flex-col gap-y-3 items-center text-center justify-normal">
            <h4 className="font-bold text-base">My website on AWS</h4>
            <p>
              I migrated my website from vercel to AWS on an EC2 instance, this
              involved setting up the instance, installing the necessary
              software, configuring the server and deploying the website.
            </p>
            <Link
              href="/projects/website-on-aws"
              className="text-xs text-blue-500 group flex items-center gap-x-1 no-underline"
            >
              Read More
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
            <br></br>
            <div className="border-b w-52"></div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
