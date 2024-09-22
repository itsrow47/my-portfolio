import BlurFade from "../../components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { Briefcase, ArrowUpRight } from "lucide-react";
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
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4 mb-8">
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
                className="w-20 h-20 rounded-full mx-auto border dark:bg-white"
              ></Image>
              <h4 className="text-sm">Jul 2023 - Nov 2023</h4>
              <h2 className="">Cloud Engineer/Solutions Architect</h2>
              <p className="text-xs lg:text-sm">
                DataBytes, Deakin University, Australia
              </p>
              <p className="text-xs lg:text-sm">
                During the capstone year, I worked as a Cloud Engineer/Solutions
                Architect for{" "}
                <a href="/projects" className="text-blue-500 no-underline">
                  Project Echo
                </a>
                , a biodiversity conservation project that seeks to detect
                sounds of endangered species by converting audio to
                melspectograms and analysing them using Convolutional Neural
                Networks (CNNs) implemented using tensorflow. This project was
                aimed to support{" "}
                <a
                  href="https://ccma.vic.gov.au/projects/wild-otways/"
                  target="_blank"
                  className="text-blue-500 no-underline"
                >
                  the Australian Government's initiative
                </a>{" "}
                to protect endangered species located in the wild otways
                national park.
              </p>
              <p>
                My contributions include helping our team to make the best use
                of cloud, we operated mainly on AWS and GCP as a hybrid cloud
                architecture, and I was responsible for the deployment of the 5
                major components of the project, which are: Echo HMI (Human
                Machine Interface), Echo API, Echo Store (Database), Echo Engine
                (The Machine learning model server), and Echo MQTT (Message Que
                Service) on the cloud. For that i needed to test various cloud
                services from both the providers and choose the best one for our
                use case. We end up using GCP Kubernetes Engine to deploy our 5
                major components.
              </p>
              <p>
                Additionaly, i was responsible for providing access to the team
                to the cloud services and managing the cloud budget, including
                the cost estimation and monitoring of the cloud services.
              </p>
              <p>
                Our Project won the{" "}
                <strong>National and State iAwards 2023</strong>
                for the best Student and Education solution category.
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
                className="w-20 h-20 rounded-full mx-auto border dark:bg-white"
              ></Image>
              <h4 className="text-sm">Mar 2023 - Jun 2023</h4>
              <h2 className="">Junior Web Developer</h2>
              <p className="text-xs lg:text-sm">
                DataBytes, Deakin University, Australia
              </p>
              <p className="text-xs lg:text-sm">
                During the capstone year, I joined the DataBytes team as a
                Junior Web Developer, where I was responsible for developing the
                front end of{" "}
                <a href="/projects" className="text-blue-500 no-underline">
                  Project Echo
                </a>{" "}
                HMI (Human Machine Interface) using HTML, CSS, and JavaScript. I
                also worked on the back-end of the project using Node.js and
                Express.js to develop the API for the project.{" "}
              </p>

              <p>
                This was my first ever formal experience working in a team on a
                software development project, I learned how to operate in an
                agile setting and participate in ceremonies that include daily
                standups, weekly sync-up meetings and so on. We used team
                collaboration tools such as Trello for project management,
                GitHub for version control and collaborative development, Visual
                Studio Code for writing the code and so on.
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
                className="w-20 h-20 rounded-full mx-auto object-contain border dark:bg-white"
              ></Image>
              <h4 className="text-sm">Mar 2023 - Jun 2023</h4>
              <h2 className="">Field Support Technician</h2>
              <p className="text-xs lg:text-sm">
                Gtelecom, Fitzroy, VIC, Australia
              </p>
              <p className="text-xs lg:text-sm">
                Implemented the wifi-network from pits to the house ensuring
                seamless and reliable connectivity for customers. Provide
                on-site technical assistance and ensuring reliable network
                performance.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
