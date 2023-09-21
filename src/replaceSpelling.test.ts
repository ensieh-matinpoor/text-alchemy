import {expect, test} from "vitest";
import {replaceSpelling} from "./replaceSpelling";

test('replaceSpelling should replace american spelling', () => {
    expect(replaceSpelling('color')).toBe('colour');
});

test('replaceSpelling should replace capitalised words', () => {
    expect(replaceSpelling('Color')).toBe('Colour');
});