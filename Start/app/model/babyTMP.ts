import { Avatar } from './avatar';

/**
 * Class :      BABY
 * Package :    MODEL
 * Desc :       Defines the Baby class and attributes
*              a Baby is a BabyloneNoBaby Special Character
*              (Youtube, Teacher, Artist, Scientist, ...)
 */
export class Baby {
    id: number;
    name: string;

    pseudo : string;

    instagram : string;
    facebook : string;
    twitter : string;
    youtube : string;
    snapchat : string;

    tipeee : string;

    subject : list<string>;

    avatar: Avatar;

}