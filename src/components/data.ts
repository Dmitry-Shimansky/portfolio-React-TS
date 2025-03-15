import {Educations, Skill, WorkExperiences, Works} from "../modules/interfaces";

export const skillsArray: Array<Skill> = [
    {
        icon: 'html-skill',
        title: 'html',
        text: ''
    },
    {
        icon: 'css-skill',
        title: 'css',
        text: ''
    },
    {
        icon: 'js-skill',
        title: 'js',
        text: ''
    },
    {
        icon: 'react-skill',
        title: 'react',
        text: ''
    },
    {
        icon: 'vector-skill',
        title: 'vector',
        text: ''
    },
    {
        icon: 'bootstrap-skill',
        title: 'bootstrap',
        text: ''
    },
    {
        icon: 'tailwind-skill',
        title: 'tailwind',
        text: ''
    },
    {
        icon: 'sass-skill',
        title: 'sass',
        text: ''
    },
    {
        icon: 'git-skill',
        title: 'git',
        text: ''
    },
    {
        icon: 'cib-skill',
        title: 'cib',
        text: ''
    },
    {
        icon: 'vscode-skill',
        title: 'vscode',
        text: ''
    },
    {
        icon: 'github-skill',
        title: 'github',
        text: ''
    }
];

export const worksItems: Works[] = [
    {
        title: 'Project Tile goes here',
        src: '../../../assets/images/image-1.png',
        techstack: 'HTML , JavaScript, SASS, React',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        title: 'Project Tile goes here',
        src: '../../../assets/images/image-2.png',
        techstack: 'HTML , JavaScript, SASS, React',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        title: 'Project Tile goes here',
        src: '../../../assets/images/image-3.png',
        techstack: 'HTML , JavaScript, SASS, React',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        title: 'Project Tile goes here',
        src: '../../../assets/images/image-4.png',
        techstack: 'HTML , JavaScript, SASS, React',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        title: 'Project Tile goes here',
        src: '../../../assets/images/image-5.png',
        techstack: 'HTML , JavaScript, SASS, React',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    },
    {
        title: 'Project Tile goes here',
        src: '../../../assets/images/image-6.png',
        techstack: 'HTML , JavaScript, SASS, React',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
    }
];

export const headerMenuItems: Array<{title: string, href: string}> = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Tech Stack",
        href: "techstack"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contacts",
        href: "contacts"
    }];

export const workExperienceItems: WorkExperiences[] = [
    {
        jobTitle: "Junior Web Developer",
        company: "Accenture",
        location: "Lithuania",
        duration: "Sep 2021 - Dec 2025",
        stack: ["ReactJS", "Type Script", "Git", "Java Script"]
    },
    {
        jobTitle: "Junior Web Developer",
        company: "Accenture",
        location: "Lithuania",
        duration: "Sep 2021 - Dec 2025",
        stack: ["ReactJS", "Type Script", "Git", "Java Script"]
    },
    {
        jobTitle: "Junior Web Developer",
        company: "Accenture",
        location: "Lithuania",
        duration: "Sep 2021 - Dec 2025",
        stack: ["ReactJS", "Type Script", "Git", "Java Script"]
    }
];

export const educationItems: Educations[] = [
    {
        universityTitle: "Belarusian National Technical University",
        specialization: "Design Engineer",
        period: "2006 - 2011",
    },
    {
        universityTitle: "Belarusian National Technical University",
        specialization: "Design Engineer",
        period: "2006 - 2011",
    }
];

export const headerSocialIcons: string[] = ["github", "linkedIn", "instagram-icon"];

export const footerSocialIcons: string[] = ['facebook-dark', 'instagram-dark', 'twitter-dark', 'linkedin-dark'];