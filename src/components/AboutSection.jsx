import { Briefcase, Code, User } from "lucide-react";



export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 12+ years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies and hands-on experience building real-world software solutions
            </p>
                  <p className="text-muted-foreground">
                    I started as a self-taught coder, just messing around with code until I figured things out. Since then, 
                    I have worked across a wide range of tech stacks, industries, and projects, picking up a lot along the way. 
                    </p>

                    <p className="text-muted-foreground">
                      My main focus is backend development. I work a lot with PHP, Node.js, and Python, and I’m comfortable designing systems that need to scale and stay reliable. I have built RESTful APIs, set up databases (MySQL, MongoDB), and handled all the stuff that keeps an app running behind the scenes.
                    </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
             <p className="text-muted-foreground">
              That said, I don’t just live on the backend. I also work on the frontend — building clean, fast, and interactive interfaces with JavaScript and frameworks like React, Vue, Angular, Next.js, NestJS, TypeScript, and even IONIC for mobile. I like making things work and look good too.

             </p>
             <p className="text-muted-foreground">
              Outside of development, I have picked up a solid amount of DevOps experience. I’ve set up cloud infrastructure on AWS, Google Cloud, and Azure. I’ve handled CI/CD pipelines, automated releases, and managed deployments to keep projects moving without friction. Whether it’s setting up Docker containers, writing bash scripts, or monitoring uptime — I’ve probably done it.
             </p>

             <p className="text-muted-foreground">
              I’m always learning and staying current with tools, trends, and techniques — not just for the sake of it, but because it helps me build better, cleaner,and I don't mind in relearning and sharping my tools more future-proof products.

</p>
             
             <p className="text-muted-foreground">
              In short, I build stuff. Whether it’s a full custom platform, a quick fix for a broken system, or a new feature that connects to five different APIs — I’m all about making ideas actually work in the real world. I’ve done this long enough to know what breaks, what scales, and what actually helps people.
              
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
