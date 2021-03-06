export interface Anime{
    attributes: Attributes;
    id: string;
}

export interface Attributes{
    cannonicalTitle: string;
    slug: string;
    synopsis: string;
    startDate: Date;
    endDate: Date;
    posterImage: PosterImage;
}

export interface PosterImage{
    tiny: string;
    small: string;
    medium: string;
    large:string;
    original: string;
}