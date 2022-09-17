/**
 * updates or adds the given item in the array. Uses an identifier function to compare if two items are equal
 *
 * @param array the array we add to/replace items in
 * @param item the item we want to add/update
 * @param identifier function which returns a unique identifier given an item so items can be compared (per default compares id fields)
 * @returns an array with the item added or updated
 */
export const arrayUpsert = <T>(
  array: T[] | null | undefined,
  item: T,
  identifier: (x: T) => any = (x: T) => (x as any)?.id,
) => {
  if (!array) return undefined;

  const idx = array.findIndex((x) => identifier(x) === identifier(item));

  if (idx >= 0) {
    const copy = [...array];

    copy[idx] = item;

    return copy;
  }

  return [...array, item];
};

/**
 * removes the given item from the array. Uses an identifier function to compare if two items are equal
 *
 * @param array the array we want to remove the item from
 * @param item the item we want to remove
 * @param identifier function which returns a unique identifier given an item so items can be compared (per default compares id fields)
 * @returns an array with the item removed
 */
export const arrayRemove = <T>(
  array: T[] | undefined | null,
  item: T,
  identifier: (x: T) => any = (x: T) => (x as any)?.id,
) => {
  if (!array) return undefined;

  return array.filter((x) => identifier(x) !== identifier(item));
};
