export type Project = {
    id: number,
    type: string,
    status: number,
    requiredMoney: number,
    collectedMoney: number,
    title: string,
    article: string,
    preview: string,
    tagList: number[],
    contributionList: number[],
    createdAt: Date,
    updatedAt: Date
}

export type TagType = {
    id: number,
    label: string,
    type: string,
    createdAt: Date,
    updatedAt: Date
}

export type Contribution = {
    account: string;
    amount: number;
    approved: boolean;
    createdAt: Date;
    id: number;
    projectId: number;
    updatedAt: Date;
}