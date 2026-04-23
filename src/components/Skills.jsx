import React from "react";
import {
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiAngular,
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiFigma,
  SiDocker,
  SiDotnet,
  SiTailwindcss,
  SiBootstrap,
  SiLinux,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Go", icon: <SiGo />, color: "#00ADD8" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
        { name: "SQLite", icon: <SiSqlite />, color: "#003B57" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      ],
    },
    {
      title: "Dev Tools",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-card"
                    style={{ "--skill-color": skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools/AI Section */}
        <div className="additional-skills">
          <h3>AI & Productivity Tools</h3>
          <div className="tools-list">
            <span className="tool-tag">ChatGPT</span>
            <span className="tool-tag">Claude AI</span>
            <span className="tool-tag">GitHub Copilot</span>
            <span className="tool-tag">Notion</span>
            <span className="tool-tag">Slack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
