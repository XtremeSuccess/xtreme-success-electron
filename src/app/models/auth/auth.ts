import { Img } from './user/img';
import { Class } from '../class/class';
import { Course } from '../course/course';
export class Role {
    description: string;
    id: number;
    name: string;
    type: string;
}

export class UserDetail {
    address: string;
    created_at: string;
    updated_at: string;
    firstname: string;
    lastname: string;
    img: Img;
    id: number;
    mobile_number: string;
    parent_mobile_number: string;
    parent_name: string;
    school_name: string;
    subscription: any;
}

export class User {
    blocked: boolean;
    confirmed: boolean;
    created_at: string;
    email: string;
    id: number;
    provider: string;
    role: Role;
    updated_at: string;
    username: string;
    user_detail: UserDetail;
}

export class Auth {
    jwt: string;
    user: User;
}
