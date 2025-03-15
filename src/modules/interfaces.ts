export interface Skill {
    icon: string,
    title: string,
    text: string
}

export interface Works {
    title: string
    src: string
    techstack: string
    description: string
}

export type NameLogoType = {
    fontSize?: string
}

export interface WorkExperiences {
    jobTitle: string
    company: string
    location: string
    duration: string
    stack: string[]
}

export interface Educations {
    universityTitle: string
    specialization: string
    period: string
}