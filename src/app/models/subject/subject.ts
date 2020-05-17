import { Chapter } from './../chapter/chapter';
import { Stream } from './../stream/stream';
export class Subject {
    id: number;
    name: string;
    streams: Stream;
    chapters: Chapter[];
    created_at: string;
    updated_at: string;
}
