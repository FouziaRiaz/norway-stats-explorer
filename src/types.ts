export type TableSearchResult = { id?: string; label?: string; description?: string; updated?: string; firstPeriod?: string; lastPeriod?: string; variableNames?: string[]; [key: string]: unknown; };
export type Variable = { code: string; text: string; values: string[]; valueTexts: string[]; };
export type Metadata = { title: string; variables: Variable[]; };
export type DisplayRow = Record<string, string>;
export type JsonStatCategory = { index?: Record<string, number> | string[]; label?: Record<string, string>; };
export type JsonStatDimension = { label?: string; category?: JsonStatCategory; };
export type JsonStatDataset = { version?: string; class?: string; label?: string; id?: string[]; size?: number[]; dimension?: Record<string, JsonStatDimension>; value?: Array<number | string | null>; };
