export interface LocalizedText {
    en: string;
    es: string;
}

export interface Skill {
    name: string;
    image: string | null;
    featured: Number; 
}

export interface PortfolioItem {
    title: string;
    description: string | null;
    tags: string | null;
    image: string | null;
    link?: string | null; 
}

export interface Testimonial {
    name: string;
    image: string | null;
    cargo: string | null;
    email: string | null;
    testimonial: string;
}

export interface PageData {
    name?: LocalizedText,
    ['page-name']: String,
    profession?: LocalizedText,
    ['banner-description-line-1']?: LocalizedText,
    ['banner-description-line-2']?: LocalizedText,
    ['admin-skills']: Skill[];
    ['title-skills']?:LocalizedText,
    ['description-skills']?:LocalizedText,
    ['admin-porfolio']: PortfolioItem[],
    ['admin-testimonials']: Testimonial[],
}

export interface PageState {
    _loading: boolean;
    _error: Object | null;
    _pageData: PageData;
}