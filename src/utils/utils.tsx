export const convertDate = (date: Date): string => {
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    return date.toLocaleDateString("en-US", options);
};

export const slugify = (str: string): string => {
    return str
        .replace(/^\s+|\s+$/g, "") // trim leading/trailing white space
        .toLowerCase() // convert string to lowercase
        .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace(/-+/g, "-"); // remove consecutive hyphens
};
