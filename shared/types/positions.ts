export const SIDE_OPTIONS = ["top", "bottom", "left", "right"] as const;
export const ALIGN_OPTIONS = ["start", "center", "end"] as const;

export type Side = (typeof SIDE_OPTIONS)[number];
export type Align = (typeof ALIGN_OPTIONS)[number];
