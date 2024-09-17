import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { Briefcase, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ExperiencePage() {
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
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
            <Briefcase size={32}></Briefcase>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <Image
                src="/deakin.png"
                alt="deakin logo"
                width={1000}
                height={1000}
                className="w-20 h-20 rounded-full mx-auto"
              ></Image>
              <h4 className="text-sm">Present</h4>
              <h2 className="">Casual Academic (Programming)</h2>
              <p className="text-xs lg:text-sm">
                School of Information Technology, Deakin University, Australia
              </p>
              <p className="text-xs lg:text-sm">
                Provide feedback and mark assignments for students enrolled in
                SIT102 - Introduction to Programming. Conduct weekly help
                sessions to assist students with their programming assignments.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto mb-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <Image
                src="/deloitte.png"
                alt="deakin logo"
                width={1000}
                height={1000}
                className="w-20 h-20 rounded-full mx-auto"
              ></Image>
              <h4 className="text-sm">May 2024</h4>
              <h2 className="">Deloitte Technology Job Simulation</h2>
              <p className="text-xs lg:text-sm">Forage, Deloitte Australia</p>
              <p className="text-xs lg:text-sm">
                I recently completed Deloitte Australia's Technology simulation
                on Forage. As part of the experience, I conducted a data
                analysis simulation for Deloitte’s Technology team, where I
                created a data dashboard using Tableau. Additionally, I wrote a
                proposal for a client project, outlining the creation of a
                functional dashboard. I also used Excel to classify data, draw
                business conclusions, and support decision-making processes.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto mb-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <Image
                src="/databytes.png"
                alt="deakin logo"
                width={1000}
                height={1000}
                className="w-20 h-20 rounded-full mx-auto bg-white"
              ></Image>
              <h4 className="text-sm">Jul 2023 - Nov 2023</h4>
              <h2 className="">Junior Cloud Engineer/Solutions Architect</h2>
              <p className="text-xs lg:text-sm">
                DataBytes, Deakin University, Australia
              </p>
              <p className="text-xs lg:text-sm">
                I have designed and implemented cloud-based solutions using a
                variety of technologies to build well-architected
                infrastructures that ensure cost optimization, security, high
                performance, and scalability. I have also conducted tests on
                several AWS and GCP technologies, including IAM, EC2, S3, RDS,
                Route53, Document DB, Cloud Run, Firebase, Docker, and
                Kubernetes to assess and select the most suitable cloud services
                for business needs. Additionally, I worked closely with
                stakeholders such as executives, product owners, developers, and
                IT teams to understand their requirements and transform their
                vision into comprehensive cloud architectures.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto mb-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <Image
                src="/databytes.png"
                alt="deakin logo"
                width={1000}
                height={1000}
                className="w-20 h-20 rounded-full mx-auto bg-white"
              ></Image>
              <h4 className="text-sm">Mar 2023 - Jun 2023</h4>
              <h2 className="">Junior Web Developer</h2>
              <p className="text-xs lg:text-sm">
                DataBytes, Deakin University, Australia
              </p>
              <p className="text-xs lg:text-sm">
                Worked across the tech stack utilizing modern tools and
                technologies including HTML, CSS, JavaScript (Frontend), and a
                Node/Express (Server), Python (FastAPI), MongoDB, MQTT, and
                Python based IoT simulator to develop the software while
                adhering to agile best practices.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto mb-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <Image
                src="/Gtelecom.png"
                alt="deakin logo"
                width={1000}
                height={1000}
                className="w-20 h-20 rounded-full mx-auto object-contain bg-white"
              ></Image>
              <h4 className="text-sm">Mar 2023 - Jun 2023</h4>
              <h2 className="">Field Support Technician</h2>
              <p className="text-xs lg:text-sm">
                Gtelecom, Fitzroy, VIC, Australia
              </p>
              <p className="text-xs lg:text-sm">
                Implemented the wifi-network from pits to the house ensuring
                seamless and reliable connectivity for customers. Provide on-site
                technical assistance and ensuring reliable network performance.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
