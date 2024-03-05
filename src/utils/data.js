// Import all the past projects that I want to display
import employeeTracker from '../assets/Projects/Chaotic-Employee-Tracked-Down.png'
import weatherApp from '../assets/Projects/Climate-Quest-Navigator.png'
import dndStats from '../assets/Projects/DnD-Stat-Compiler.png'
import friendZone from '../assets/Projects/Friendzone-API.png'
import project2 from '../assets/Projects/Off-The-Beaten-Path.png'
import techBlog from '../assets/Projects/Tech-blog.png'

export const projects = [
    {
        id: 1,
        title: 'Chaotic-Employee-Tracked-Down',
        description: 'A database that helps you locate an employee by their name!',
        image: employeeTracker,
        technologies: ['Node.js', 'MySQL'],
        href: 'https://github.com/PotionSela/Chaotic-Employee-Tracked-Down'
    },
    {
        id: 2,
        title: 'Climate-Quest-Navigator',
        description: 'An easy to use and stylish app that helps you find the weather in any city you want to input.',
        image: weatherApp,
        technologies: ['JavaScript', 'HTML', 'CSS'],
        href: 'https://github.com/PotionSela/Climate-Quest-Navigator'
    },
    {
        id: 3,
        title: 'DnD-Stat-Compiler',
        description: 'An app that helps users to get their stats for their DnD character, complete with their race and class!',
        image: dndStats,
        technologies: ['JavaScript', 'HTML', 'CSS'],
        href: 'https://github.com/CRNaro/dnd-stat-compiler'
    },
    {
        id: 4,
        title: 'Friendzone-API',
        description: 'A robust social network API that allows users to share thoughts, and interact with friends thoughts',
        image: friendZone,
        technologies: ['Express.js', 'MongoDB', 'Mongoose ODM'],
        href: 'https://github.com/PotionSela/FriendzoneAPI'
    },
    {
        id: 5,
        title: 'Off-The-Beaten-Path',
        description: 'An application that if you find yourself in a predicament where youre stuck while off roading, you can use this app to help you find someone to get you unstuck!',
        image: project2,
        technologies: ['Node.js', 'Express.js', 'MySQL'],
        href: 'https://github.com/Conartisttt/Off-Road-Unstucker'
    },
    {
        id: 6,
        title: 'Tech-blog',
        description: 'A platform for developers to publish their insights, thoughts, and opinions on the latest technologies while creating a community!',
        image: techBlog,
        technologies: ['Node.js', 'Express.js', 'JavaScript'],
        href: 'https://github.com/PotionSela/Dev-thoughts-blog'
    },
]