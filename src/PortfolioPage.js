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
    title: "Simple Voting",
    description:
      "Next I created a Simple Voting DApp with more interactions, designed to facilitate a voting process on the blockchain. Built on the Ganache network, this DApp allows users to cast votes for their preferred candidates in an efficient manner. Users can easily connect their MetaMask wallets to participate in the voting process.",
    emoji: "💻",
    difficulty: "easy",
    link: "https://simple-voting.netlify.app/",
  },
  {
    title: "NFT(Basic & Dynamic)",
    description:
      "My Solidity journey has reached the ERC721 stage. Through my studies, I uploaded a simple image and turned it into a basic NFT. Afterwards, I did some research on SVG and created a simple dynamic NFT. The code of the dynamic one can be found in the link above. You can follow the steps in README to get the NFT on testnet.",
    emoji: "🗄️",
    difficulty: "easy",
    link: "https://github.com/monmon-sitdown/NFTClock",
  },
  {
    title: "Simple Lending System",
    description:
      "After completing the above learning, to further understand what ERC20 is, I attempted to develop a simple lending system. It implements the functionality for depositing and withdrawing funds to/from the contract, as well as borrowing and repaying loans. The code can be found at the above link. For the demo video, please click: link.",
    emoji: "🖥️",
    difficulty: "medium",
    link: "https://github.com/monmon-sitdown/defilend-frontend",
  },
  {
    title: "Simple Dex Platform",
    description:
      "After those studies and practices, I decided to start challenging myself with more complex projects. The decentralized exchange (DEX) projects includes the functions that can create liquidity pools, swap tokens, and manage user positions. In addition, I also learned some techs to make the website more visually appealing. The development process was a great challenge and quite painful, but despite its simplicity, I gained a lot from it.",
    emoji: "🌐",
    difficulty: "medium",
    link: "https://github.com/monmon-sitdown/dex-frontend",
  },
  {
    title: "Stable Coin",
    description: "这是一个困难的项目",
    emoji: "🤖",
    difficulty: "hard",
  },
  {
    title: "AI NFT Minting",
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
      style={{ width: "450px", height: "230px", textAlign: "justify" }} // 设置卡片的宽度和高度
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
  const cardSpacing = 230; // 每个卡片之间的间距，路宽
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
        <h2 className="text-3xl font-bold mb-8 text-center sticky top-0 bg-gray-100 z-20">
          My Solidity Journey
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
