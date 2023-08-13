import areas from './json/isreal-areas.json'

export type IsraelAreas = {
    type: string;
    name: string;
    crs: {
        type: string;
        properties: {
            name: string;
        },
    },
    features: Array<{
        type: string;
        properties: {
            fid: string;
            OBJECTID: string;
            SEMEL_YISHUV: number;
            SHEM_YISHUV: string;
            SHEM_YISHUV_ENGLISH?: string | null;
            STAT_2022: number | null;
            YISHUV_STAT_2022: number | null;
            ROVA: number | null;
            TAT_ROVA: number | null;
            COD_TIFKUD: number | null;
            Shape_Length: number;
            Shape_Area: number;
        },
        geometry: {
            type: string;
            coordinates: number[][][][]
        },
    }>
}

const areasTyped: IsraelAreas = areas;

export default areasTyped;

