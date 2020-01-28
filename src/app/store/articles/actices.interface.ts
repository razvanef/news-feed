export interface Article {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
}

export interface ArticleContent {
    content: Article;
}

export interface NewsFeedResults {
    results: Article[];
}

export interface NewsFeedResponse {
    response: NewsFeedResults;
}

export interface ArticleResponse {
    response: ArticleContent;
}

export interface ArticlesState {
    newsFeed: Article[];
    favorites: string[];
    currentArticle: Article;
    currentPage: number;
}

export const ArticlesFeatureKey = 'newsFeed';
export const EmptyArticle = {
    id: '',
    type: '',
    sectionId: '',
    sectionName: '',
    webPublicationDate: '',
    webTitle: '',
    webUrl: '',
    apiUrl: '',
    isHosted: false,
    pillarId: '',
    pillarName: '',
};
