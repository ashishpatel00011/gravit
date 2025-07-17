export interface ImagePair {
    beforeImg: string;
    afterImg: string;
}

export interface Doctor {
    name: string;
    title: string;               // 👈 add this
    Specialization: string;
    classification: string;
    education: string;
    image: string;

    beforeAfterImages: ImagePair[];
}
