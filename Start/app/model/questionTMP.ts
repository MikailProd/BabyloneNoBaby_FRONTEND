/**
 * Class :      QUESTION
 * Package :    MODEL
 * Desc :       Defines the Question class and attributes
 *              a Question is a question linked to a given subject (from attribute)
 *              (Video, Article, Course, ...)
 */
export class Question {
    id: number;

    question: string;
    response : string;

    clues : list<string>;

    level : number;

    source_id : number;
    source_desc : string;
}