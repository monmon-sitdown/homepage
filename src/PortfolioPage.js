import React from "react";

const projects = [
  {
    title: "Simple Storage",
    description:
      "This is the first step in my Solidity journey. The SimpleStorage Project implements a simple smart contract to store and retrieve numbers, and includes a React application to interact with the smart contract from the front end. Although it only implements an extremely simple function, it is a huge step forward for me.",
    emoji: "📚",
    difficulty: "easy",
    link: "https://simplestoragefrontend.netlify.app",
  },
  {
    title: "简单项目2",
    description: "另一个简单的项目",
    emoji: "💻",
    difficulty: "easy",
  },
  {
    title: "中等项目1",
    description: "这是一个中等难度的项目",
    emoji: "🗄️",
    difficulty: "medium",
  },
  {
    title: "中等项目2",
    description: "另一个中等难度的项目",
    emoji: "🖥️",
    difficulty: "medium",
  },
  {
    title: "中等项目3",
    description: "第三个中等难度的项目",
    emoji: "🌐",
    difficulty: "medium",
  },
  {
    title: "困难项目1",
    description: "这是一个困难的项目",
    emoji: "🤖",
    difficulty: "hard",
  },
  {
    title: "困难项目2",
    description: "另一个困难的项目",
    emoji: "👤",
    difficulty: "hard",
  },
];

const difficultyColor = {
  easy: "from-green-300 to-green-500",
  medium: "from-yellow-300 to-yellow-500",
  hard: "from-red-300 to-red-500",
};

const ProjectCard = ({ project, position, isLeft }) => (
  <div
    className={`absolute ${isLeft ? "right-[52%]" : "left-[52%]"}`}
    style={{ top: `${position}px` }}
  >
    <div
      className={`p-4 rounded-lg shadow-lg ${
        difficultyColor[project.difficulty]
      } bg-gradient-to-r`}
      style={{ width: "450px", height: "200px" }} // 设置卡片的宽度和高度
    >
      <div className="text-lg font-bold mb-1">
        {project.emoji}
        {project.title}
      </div>
      {project.link && (
        <a
          href={project.link}
          className="text-sm text-blue-500 underline mb-1 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.link}
        </a>
      )}
      <p className="text-sm">{project.description}</p>
    </div>
  </div>
);

const PortfolioPage = () => {
  const cardSpacing = 220; // 每个卡片之间的间距，路宽
  const totalHeight = projects.length * cardSpacing;

  // 生成垂直蜿蜒路径的点
  const pathPoints = [];
  for (let i = 0; i <= totalHeight; i += 10) {
    pathPoints.push(`${50 + Math.sin(i / 40) * 15},${(i / totalHeight) * 150}`);
  }
  const svgPath = `M${pathPoints.join(" ")}`;

  // 计算项目卡片的位置
  const cardPositions = projects.map((_, index) => index * cardSpacing);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 个人信息侧边栏 */}
      <div className="w-1/4 bg-white p-6 shadow-lg z-20 fixed h-full overflow-auto">
        <h1 className="text-2xl font-bold mb-4">我的名字</h1>
        <p className="mb-2">前端开发者</p>
        <p className="mb-2">邮箱：example@email.com</p>
        <p>Github: github.com/myusername</p>
      </div>

      {/* 项目展示区域 */}
      <div className="w-3/4 ml-[25%] p-6 relative">
        <h2 className="text-3xl font-bold mb-8 text-center sticky top-0 bg-gray-100 z-10">
          我的项目
        </h2>

        <div className="relative" style={{ height: `${totalHeight}px` }}>
          {/* 蜿蜒的路径 */}
          <svg
            className="absolute left-0 top-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox={`0 0 100 100`}
          >
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#95f777" />
                <stop offset="100%" stopColor="#fe584f" />
              </linearGradient>
            </defs>

            <path
              d={svgPath}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="5"
            />
          </svg>

          {/* 项目卡片 */}
          <div className="relative z-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                position={cardPositions[index]}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
