export type ICar = {
    id: number;
    name: string;

    price: number;
    color: string;
    engineType: string;
    displacement: number;
    horsePower: number;
    torque: number;
    redline: number;
    images: { src: string; btnSrc: string }[];
}
