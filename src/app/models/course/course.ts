import { Subject } from './../subject/subject';
import { Stream } from './../stream/stream';
import { Class } from './../class/class';
export class Course {
    name: string;
    class: Class;
    created_at: string;
    description: string;
    duration: number;
    id: number;
    price: number;
    stream: Stream;
    subjects: Subject[];
    updated_at: string;
}
