import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 100, category: "frontend" },
    { name: "Bootstrap", level: 100, category: "frontend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "React", level: 100, category: "frontend" },
  { name: "Redux", level: 100, category: "frontend" },
  { name: "Vue", level: 100, category: "frontend" },
  { name:"Angular", level: 100, category: "frontend" },
  { name: "TypeScript", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "Next.js", level: 100, category: "frontend" },

  // Backend
  { name: "Php", level: 100, category: "backend" },
  { name:"Laravel", level: 100, category: "backend" },
  { name:"PhpUnit", level: 100, category: "backend" },
  { name: "Python", level: 90, category: "backend" },
  { name:"Flask", level: 80, category: "backend" },
  { name:"Django", level: 80, category: "backend" },
  { name: "Node.js", level: 100, category: "backend" },
  { name: "Express", level: 100, category: "backend" },
  { name: "Nest.js", level: 100, category: "backend" },
  { name: "Golang", level:  80, category: "backend" },
  { name: "Solidity", level: 85, category: "backend" },
  { name: "Web3", level: 90, category: "backend" },
  { name: "MySQL", level: 100, category: "backend" },
  { name: "SQLite", level: 90, category: "backend" },
  { name: "MongoDB", level: 100, category: "backend" },
  { name: "PostgreSQL", level: 100, category: "backend" },
  { name: "GraphQL", level: 90, category: "backend" },
  { name: "Socket.io", level: 90, category: "backend" },
  { name: "Redis", level: 90, category: "backend" },
  { name: "Memcached", level: 90, category: "backend" },
  { name: "Rabbitmq", level: 90, category: "backend" },
  { name: "Stripe", level: 85, category: "backend" },
  { name: "Paypal", level: 90, category: "backend" },
  { name: "Flutterwave", level: 90, category: "backend" },
  { name: "Firebase", level: 100, category: "backend" },
  // Devsps Tools
  { name: "Git/GitHub/Gitlab/Bitbucket", level: 90, category: "tools" },
  { name: "Docker", level: 90, category: "tools" },
  { name: "AWS", level: 100, category: "tools" },
  { name: "Linus", level: 90, category: "tools" },
  { name: "Maven", level: 90, category: "tools" },
  { name: "Ansible", level: 90, category: "tools" },
  { name: "Kubernetes", level: 90, category: "tools" },
  { name: "Terraform", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
 
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
