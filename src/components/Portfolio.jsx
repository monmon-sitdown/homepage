import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen, 
  Vote, 
  Image, 
  Wallet, 
  ArrowLeftRight,
  Coins,
  Bot
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Simple Storage",
    description: "This is the first step in my Solidity journey. The SimpleStorage Project implements a simple smart contract to store and retrieve numbers, and includes a React application to interact with the smart contract from the front end. Although it only implements an extremely simple function, it is a huge step forward for me.",
    link: "https://simplestoragefrontend.netlify.app",
    icon: BookOpen,
    difficulty: 1
  },
  {
    id: 2,
    title: "Simple Voting",
    description: (
      <>
        Next I created a Simple Voting DApp with more interactions, designed to facilitate a voting process on the blockchain. Built on the Ganache network, this DApp allows users to cast votes for their preferred candidates in an efficient manner. Users can easily connect their MetaMask wallets to participate in the voting process. Check the Demo Video {" "}
        <a 
        href="https://youtu.be/ZDsixEww27E" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
        Check the Solidity code {" "}
        <a 
        href="https://github.com/monmon-sitdown/SimpleVoting/tree/master/foundry-voting" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
      </>
    ),
    link: "https://simple-voting.netlify.app/",
    icon: Vote,
    difficulty: 2
  },
  {
    id: 3,
    title: "NFT(Basic & Dynamic)",
    description: (
      <>
      My Solidity journey has reached the ERC721 stage. Through my studies, I uploaded a simple image and turned it into a basic NFT. Afterwards, I did some research on SVG and created a simple dynamic NFT. You can click the icon to find the solidity code of the dynamic one. You can follow the steps in README to get the NFT on testnet. Solidity Code {" "}
      <a 
        href="https://github.com/monmon-sitdown/NFTClock" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
      </>
    ),
    link: "https://github.com/monmon-sitdown/NFTClock",
    icon: Image,
    difficulty: 3
  },
  {
    id: 4,
    title: "Simple Lending System",
    description: (
      <>
      You can find the Demo Video {"" }
      <a 
        href="https://youtu.be/Y4DoZFUesnA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
      After completing the above learning, to further understand what ERC20 is, I attempted to develop a simple lending system. It implements the functionality for depositing and withdrawing funds to/from the contract, as well as borrowing and repaying loans. You can click the icon to find the Solidity Code.
      </>
    ),
    link: "https://github.com/monmon-sitdown/foundry-defilendingplatform",
    icon: Wallet,
    difficulty: 4
  },
  {
    id: 5,
    title: "Simple Dex Platform",
    description:(
      <>
      After those studies and practices, I decided to start challenging myself with more complex projects. The decentralized exchange (DEX) projects includes the functions that can create liquidity pools, swap tokens, and manage user positions. In addition, I also learned some techs to make the website more visually appealing. The development process was a great challenge and quite painful, but despite its simplicity, I gained a lot from it. Demo Video {" "}
      <a 
        href="https://youtu.be/VgzioPEOT_s" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
      </>
    ),
    link: "https://github.com/monmon-sitdown/foundry-dex",
    icon: ArrowLeftRight,
    difficulty: 5
  },
  {
    id: 6,
    title: "Simple Stable Coin",
    description: (
      <>
      The CollateralManager enables users to deposit wETH as collateral, calculate its value via Chainlink price feeds, and mint SimpleStableCoins (SSC) based on strict collateralization ratios. Users can withdraw or redeem collateral if their health factor is sufficient. In cases where collateral falls below the required threshold, liquidation protects the system. These features ensure secure and efficient collateral management for stablecoin minting. Demo Video {" "}
      <a 
        href="https://youtu.be/OlcqjPedY1w" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
      </>
    ),
    link: "https://github.com/monmon-sitdown/foundry-stablecoin",
    icon: Coins,
    difficulty: 6
  },
  {
    id: 7,
    title: "AI NFT Minting",
    description: (
      <>
      I made some practice by coding for typical Web3 project. However, this program was considered by myself, which is plan to combine AI and NFT. Using AI to generate NFT, and mint it or uploaded to NFT market. Without any references, it was quite a challenge for me. Please check the demo {" "}
      <a 
        href="https://youtu.be/Obr_XNQkYHs" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        here
      </a>.
      </>
    ),
    link: "https://github.com/monmon-sitdown/ainft",
    icon: Bot,
    difficulty: 7
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //const totalProjects = projects.length;
  const spacing = 150; // 调整站点之间的间距

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white grid grid-cols-1 md:grid-cols-4">
      
      
      {/* Left sidebar */}
<div className="md:col-span-1 bg-gray-900 p-8 border-r border-gray-700 space-y-8">
  {/* 标题 */}
  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    My Solidity Journey
  </h1>

  {/* About Me */}
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">About Me</h2>
    <p className="text-gray-400 text-justify" >
      A passionate blockchain developer transitioning from biomedical research to Web3. 
      I have completed multiple simple Solidity Demos, including DApps, NFTs, and DeFi platforms.
    </p>
  </div>

  {/* Resume Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Resume</h2>
    <p className="text-gray-400 text-justify">
      With over 7 years of academic research experience and a recent deep dive into blockchain technologies, 
      I aim to contribute to the Web3 ecosystem through innovative and secure smart contract development.
    </p>
    <a 
      href="/path-to-your-resume.pdf" 
      target="_blank" 
      className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded hover:shadow-lg transition">
      Resume
    </a>
  </div>

  {/* Skills Section */}
<div className="space-y-4 text-center">
<h3 className="text-2xl font-semibold text-transparent text-gray-100">
  Skills
</h3>
  <div className="flex flex-wrap justify-center gap-4">
    <Badge
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg rounded-md px-4 py-2 transform transition duration-300 hover:scale-110 hover:shadow-xl"
      variant="secondary"
    >
      Solidity
    </Badge>
    <Badge
      className="bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg rounded-md px-4 py-2 transform transition duration-300 hover:scale-110 hover:shadow-xl"
      variant="secondary"
    >
      React
    </Badge>
    <Badge
      className="bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-lg rounded-md px-4 py-2 transform transition duration-300 hover:scale-110 hover:shadow-xl"
      variant="secondary"
    >
      Foundry
    </Badge>
    <Badge
      className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white shadow-lg rounded-md px-4 py-2 transform transition duration-300 hover:scale-110 hover:shadow-xl"
      variant="secondary"
    >
      Smart Contracts
    </Badge>
    <Badge
      className="bg-gradient-to-r from-cyan-400 to-lime-500 text-white shadow-lg rounded-md px-4 py-2 transform transition duration-300 hover:scale-110 hover:shadow-xl"
      variant="secondary"
    >
      ethers.js
    </Badge>
  </div>
</div>

{/* Portfolio Section */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold">Portfolio</h3>
  <ul className="space-y-3">
    <li className="text-gray-400">
      <strong>Simple Voting</strong>:{" "}
      <a 
        href="https://github.com/monmon-sitdown/SimpleVoting/tree/master/foundry-voting" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a 
        href="https://youtu.be/ZDsixEww27E" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Demo Video
      </a>
    </li>
    <li className="text-gray-400">
      <strong>AI NFT Minting</strong>:{" "}
      <a 
        href="https://github.com/monmon-sitdown/ainft" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a 
        href="https://youtu.be/Obr_XNQkYHs" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Demo Video
      </a>
    </li>
    <li className="text-gray-400">
      <strong>Simple Lending</strong>:{" "}
      <a 
        href="https://github.com/monmon-sitdown/foundry-defilendingplatform" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a 
        href="https://youtu.be/Y4DoZFUesnA" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Demo Video
      </a>
    </li>
    <li className="text-gray-400">
      <strong>Stable Coin</strong>:{" "}
      <a 
        href="https://github.com/monmon-sitdown/foundry-stablecoin" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a 
        href="https://youtu.be/OlcqjPedY1w" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Demo Video
      </a>
    </li>
    <li className="text-gray-400">
      <strong>Dex Platform</strong>:{" "}
      <a 
        href="https://github.com/monmon-sitdown/foundry-dex" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a 
        href="https://youtu.be/VgzioPEOT_s" 
        className="text-blue-400 hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Demo Video
      </a>
      <p className="text-gray-400 text-justify" >
      <br />
      You can also click the icons on right side to check their code.
    </p>
    </li>
  </ul>
</div>


  {/* Contact Section */}
  <div className="space-y-4">
    <h3 className="text-lg font-medium">Contact</h3>
    <p className="text-gray-400">Feel free to reach out for collaboration or inquiries:</p>
    <p className="text-gray-400">📧 <a href="mailto:xiuyuanqin@gmail.com" className="text-blue-400 hover:underline">xiuyuanqin@gmail.com</a></p>
    <p className="text-gray-400">🌐 <a href="https://github.com/monmon-sitdown" className="text-blue-400 hover:underline">Github</a></p>
  </div>
</div>


      {/* Main content with journey road */}
      <div className="md:col-span-3 p-8 grid grid-cols-1 gap-8">
        {/* Journey road */}
        <div className="relative">
          <svg 
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
              style={{ 
                minHeight: `${projects.length * 350}px`,
                maxWidth: '100px',
                overflow: 'visible'
              }}
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
                <stop offset="50%" style={{ stopColor: '#8B5CF6' }} />
                <stop offset="100%" style={{ stopColor: '#EC4899' }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path
              d={generateWindingPath()}
              stroke="url(#roadGradient)"
              strokeWidth="45"
              fill="none"
            className="glowing-road" // 添加类以控制闪烁效果
              style={{ 
                filter: 'url(#glow)',
                opacity: 0.5 // 更透明，让它成为背景
              }}
            />
          </svg>

          {/* Project nodes */}
          {projects.map((project, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className={`absolute flex items-start group`}
                style={{
                  marginTop:  '200px ',
                  left: side === 'left' ? `calc(23% - ${spacing / 2}px)` : `calc(53% + ${spacing / 2}px)`, // 根据方向计算横向位置
                  top: `${index * 300}px`, // 每个节点在垂直方向上的位置
                  opacity: Math.max(0, 1 - Math.abs(scrollPosition - index * 300) / 500),
                  transform: `translateY(${Math.min(0, (scrollPosition - index) / 5)}px)`,
                  marginBottom:  '200px ',
                }}
                // 统一监听鼠标进入和离开整个区域
      onMouseEnter={() => setSelectedProject(project)}
      onMouseLeave={() => setSelectedProject(null)}
              >
                <div
                  className={`flex-shrink-0 cursor-pointer mr-8 ${side === 'right' ? 'ml-8' : ''} icon-hover`}

                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${getDifficultyColor(project.difficulty)}`}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-8 h-8 text-white" />
                    </a>
                  </div>
                  <h3 className="mt-2 text-lg font-medium">{project.title}</h3>
                </div>

                {/* Hover card */}
                {selectedProject?.id === project.id && (
                  <Card className={`absolute z-10 w-96 bg-gray-800 border-gray-700 text-white transition-all duration-200 transform scale-100 opacity-100 ${side === 'left' ? 'right-full mr-1' : 'left-full ml-1'}`}
                  style={{
                    top: '100px', // 设置为图标高度加上间距，确保描述框在图标下方
                    left: side === 'left' ? 'calc(100% - 10)' : 'initial',
                    right: side === 'right' ? 'calc(100%)' : 'initial',
                  }}>
                    <CardContent className="p-4">
                      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Generate a winding path for the road
const generateWindingPath = () => {
  const height = projects.length * 400; // 总高度
  const amplitude = 100; // 弯曲的幅度
  const frequency = 0.014; // 弯曲的频率
  
  let path = `M 0 0`; // 起始点
  
  // 使用正弦函数创建蜿蜒效果
  for (let y = 0; y <= height; y += 10) {
    const x = 0 + Math.sin(y * frequency) * amplitude;
    path += ` L ${x} ${y}`;
  }

  //console.log(`Generated Path: ${path}`);
  
  return path;
};

// 根据难度获取颜色
const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 1: return 'bg-green-500';
    case 2: return 'bg-blue-500';
    case 3: return 'bg-indigo-500';
    case 4: return 'bg-purple-500';
    case 5: return 'bg-pink-500';
    case 6: return 'bg-red-500';
    case 7: return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

export default Portfolio;
