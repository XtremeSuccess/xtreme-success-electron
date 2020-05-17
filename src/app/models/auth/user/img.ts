export class ImageFormat {
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
}

export class Formats {
    thumbnail?: ImageFormat;
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
}

export class Img {
    id: number
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: any;
    created_at: string;
    updated_at: string;
}
