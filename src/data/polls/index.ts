import polls_21 from './json/polls_21.json'
import polls_22 from './json/polls_22.json'
import polls_23 from './json/polls_23.json'
import polls_25 from './json/polls_25.json'

export type PollResult = {
    results: Record<string, number>;
    settlementName: string;
    settlementId: number;
    total: number;
    voters: number;
    invalid: number;
    valid: number;
};

const POLLS: Record<number, Record<string, PollResult>> = {
    21: polls_21,
    22: polls_22,
    23: polls_23,
    25: polls_25,
}

export default POLLS