export type Sport = {
    id: string;
    name: string;
    seasons?: Season[];
};

export type Season = {
    id: string;
    name: string;
};