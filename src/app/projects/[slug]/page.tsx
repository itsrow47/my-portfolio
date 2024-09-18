import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { CodeIcon, AlertCircleIcon, ArrowLeftIcon } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = Object.values(PROJECTS).find((project) => {
    return project.href === params.slug;
  });
  if (!project) {
    return (
      <div className="prose text-muted-foreground dark:prose-invert text-sm mx-auto mt-96 text-center flex items-center justify-center gap-1 text-red-500">
        <AlertCircleIcon size={20}></AlertCircleIcon> Project Not Found
      </div>
    );
  }

  return (
    <section
      id="about"
      className="prose text-muted-foreground dark:prose-invert text-sm mx-auto text-center"
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
      <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05}>
        <Link
          href="/projects"
          className="text-xs text-blue-500 group flex items-center justify-center gap-x-1 no-underline"
        >
          <div className="group-hover:-translate-x-1 transition duration-300">
            <ArrowLeftIcon size={16} />
          </div>
          All projects
        </Link>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="mt-3">
        <h1> {project.title}</h1>
        <p>{project.description}</p>
        <div className="flex gap-2 items-center justify-center">
          {project.tags.map((tag) => (
            <Badge key={tag} className="">
              {tag}
            </Badge>
          ))}
        </div>
        <div></div>
      </BlurFade>
    </section>
  );
}
