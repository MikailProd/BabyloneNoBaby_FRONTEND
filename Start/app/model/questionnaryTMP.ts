import { Question } from './question';

/**
 * Class :      QUESTIONNARY
 * Package :    MODEL
 * Desc :       Defines the Questions class and attributes
 *              a Questions is a list of questions linked to a given subject
 *              (Video, Article, Course, ...)
 */
export class Questionnary {
    id: number;
    title: string;

    level : number;

    questions : list<Question>;
}