"use client";
import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { CodeIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { useState } from "react";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = DATA.projects;

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
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start gap-3 justify-center flex-wrap"
        >
          {DATA.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={clsx(
                " prose dark:prose-invert text-xs text-muted-foreground dark:text-muted-invert border px-3 py-2 rounded-full cursor-pointer no-underline",
                {
                  "bg-zinc-100 dark:bg-zinc-900": selectedCategory === category,
                }
              )}
            >
              {category}
            </button>
          ))}
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          {projects.map((project, id) => {
            if (
              selectedCategory === "All" ||
              //@ts-ignore
              project.category.includes(selectedCategory)
            ) {
              return (
                <div
                  key={id}
                  className="grid items-center  text-center prose text-muted-foreground dark:prose-invert"
                >
                  <div className="text-sm w-full col-span-2">
                    <h2 className="">{project.name}</h2>
                    <p className="text-xs lg:text-sm">{project.description}</p>
                    <div className="flex gap-2 items-center justify-center">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <br></br>
                    <Link
                      href={project.url}
                      className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
                    >
                      View Project
                      <div className="group-hover:translate-x-1 transition duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </Link>
                    <br></br>
                    <div className="w-52 border-b mx-auto"></div>
                  </div>
                </div>
              );
            }
          })}
        </BlurFade>
      </section>
    </div>
  );
}
