
import css from '../app/assets/svg/skills/css.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import nodeJS from '../app/assets/svg/skills/nodeJS.svg';
import express from '../app/assets/svg/skills/express.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
  
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'mongodb':
      return mongoDB;
    case 'tailwind':
      return tailwind;
    case 'python':
      return python;
    case 'git':
      return git;
      case 'express':
      return express;
      case 'nodejs':
      return nodeJS;
      case 'node js':
        return nodeJS;
        case 'node js':
          return nodeJS;
   
    default:
      break;
  }
}
