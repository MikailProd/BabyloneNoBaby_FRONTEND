import { Avatar } from './avatar';

/**
 * Class :      BABYUSER
 * Package :    MODEL
 * Desc :       Defines the  class and attributes
 *              a  is a
 *              ()
 */
export class BabyUser {
    id: number;
    firstname : string;
    lastname : string;
    pseudo : string;

    description: string;
    birthdate : date;

    instagram : string;
    facebook : string;
    twitter : string;
    youtube : string;
    snapchat : string;

    tipeee : string;

    preferences : list<string>;

    avatar: Avatar;


}