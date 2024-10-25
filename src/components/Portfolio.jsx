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
    description: "Next I created a Simple Voting DApp with more interactions, designed to facilitate a voting process on the blockchain. Built on the Ganache network, this DApp allows users to cast votes for their preferred candidates in an efficient manner. Users can easily connect their MetaMask wallets to participate in the voting process.",
    link: "https://simple-voting.netlify.app/",
    icon: Vote,
    difficulty: 2
  },
  {
    id: 3,
    title: "NFT(Basic & Dynamic)",
    description: "My Solidity journey has reached the ERC721 stage. Through my studies, I uploaded a simple image and turned it into a basic NFT. Afterwards, I did some research on SVG and created a simple dynamic NFT. The code of the dynamic one can be found in the link above. You can follow the steps in README to get the NFT on testnet.",
    link: "https://github.com/monmon-sitdown/NFTClock",
    icon: Image,
    difficulty: 3
  },
  {
    id: 4,
    title: "Simple Lending System",
    description: "After completing the above learning, to further understand what ERC20 is, I attempted to develop a simple lending system. It implements the functionality for depositing and withdrawing funds to/from the contract, as well as borrowing and repaying loans. The code can be found at the above link.",
    link: "https://github.com/monmon-sitdown/defilend-frontend",
    icon: Wallet,
    difficulty: 4
  },
  {
    id: 5,
    title: "Simple Dex Platform",
    description: "After those studies and practices, I decided to start challenging myself with more complex projects. The decentralized exchange (DEX) projects includes the functions that can create liquidity pools, swap tokens, and manage user positions. In addition, I also learned some techs to make the website more visually appealing. The development process was a great challenge and quite painful, but despite its simplicity, I gained a lot from it.",
    link: "https://github.com/monmon-sitdown/dex-frontend",
    icon: ArrowLeftRight,
    difficulty: 5
  },
  {
    id: 6,
    title: "Stable Coin",
    description: "这是一个困难的项目",
    icon: Coins,
    difficulty: 6
  },
  {
    id: 7,
    title: "AI NFT Minting",
    description: "I made some practice by coding for typical Web3 project. However, this program was considered by myself, which is plan to combine AI and NFT. Using AI to generate NFT, and mint it or uploaded to NFT market. Without any references, it was quite a challenge for me. Please check the demo.",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Left sidebar */}
      <div className="fixed left-0 top-0 w-1/4 h-screen bg-gray-900 p-8 border-r border-gray-700">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Solidity Journey
          </h1>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="text-gray-400">
              A passionate blockchain developer exploring the world of Web3 and smart contracts.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Solidity</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Web3.js</Badge>
              <Badge variant="secondary">Smart Contracts</Badge>
              <Badge variant="secondary">DeFi</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with journey road */}
      <div className="ml-1/4 w-3/4 min-h-screen p-8">
        <div className="relative">
          {/* Journey road */}
           {/* Winding road using SVG */}
           <svg 
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
              style={{ 
                minHeight: `${projects.length * 300}px`,
                maxWidth: '100px',
                overflow: 'visible'
              }}
            >
          {/* 发光效果 */}
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
            strokeWidth="40"
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
                className={`relative ${
                  side === 'left' ? 'pr-1/2 text-right' : 'pl-1/2'
                } mb-48`}
                style={{
                  marginTop: '-10px',
                  opacity: Math.max(0, 1 - Math.abs(scrollPosition - index * 300) / 500),
                  transform: `translateY(${Math.min(0, (scrollPosition - index) / 5)}px)`
                }}
              >
                
                <div
                  className={`inline-block group cursor-pointer ${
                    side === 'left' ? 'mr-8' : 'ml-8'
                  }`}style={{
                    marginTop: '80px',
                  }}
                  onMouseEnter={() => setSelectedProject(project)}
                  onMouseLeave={() => setSelectedProject(null)}
                >
                  <div className="relative">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center
                        transition-all duration-300 transform group-hover:scale-110
                        ${getDifficultyColor(project.difficulty)}
                      `}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </a>
                    <h3 className="mt-2 text-lg font-medium items-center ">{project.title}</h3>
                  </div>

                  {/* Hover card */}
                  {selectedProject?.id === project.id && (
                    <Card className={`absolute z-10 w-96 bg-gray-800 border-gray-700 text-white
                    transition-all duration-300 transform scale-100 opacity-100
                    hover:scale-105
                    ${side === 'left' ? '{right-full mr-4}' : '{left-full ml-4'}
                    top-0`}
                     style={{
                      marginTop: '200px',}}
                    >
                      <CardContent className="p-4">
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Project →
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </div>
  );
};

// Helper function to get difficulty-based colors
const getDifficultyColor = (difficulty) => {
  const colors = {
    1: 'bg-blue-500 group-hover:bg-blue-400',
    2: 'bg-blue-600 group-hover:bg-blue-500',
    3: 'bg-purple-500 group-hover:bg-purple-400',
    4: 'bg-purple-600 group-hover:bg-purple-500',
    5: 'bg-pink-500 group-hover:bg-pink-400',
    6: 'bg-pink-600 group-hover:bg-pink-500',
    7: 'bg-red-500 group-hover:bg-red-400',
  };
  return colors[difficulty] || 'bg-gray-500';
};

// 生成蜿蜒路径的SVG路径
const generateWindingPath = () => {
  const height = projects.length * 400; // 总高度
  const amplitude = 100; // 弯曲的幅度
  const frequency = 0.013; // 弯曲的频率
  
  let path = `M 220 0`; // 起始点
  
  // 使用正弦函数创建蜿蜒效果
  for (let y = 0; y <= height; y += 10) {
    const x = 220 + Math.sin(y * frequency) * amplitude;
    path += ` L ${x} ${y}`;
  }

  //console.log(`Generated Path: ${path}`);
  
  return path;
};



export default Portfolio;