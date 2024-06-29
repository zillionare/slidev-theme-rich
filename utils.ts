export function mergeTransform(baseTransform, additionalTransform) {
    // If there's no base transform, just return the additional one.
    if (!baseTransform) return additionalTransform;

    // Split the base transform into an array, assuming each transformation is separated by a space.
    let transforms = baseTransform.split(' ');

    // Check if the additional transform is already present to avoid duplication.
    // This is a simplistic check and assumes the additional transform does not contain complex cases like chained transformations.
    if (!transforms.includes(additionalTransform)) {
    // If it's not present, append the new transformation ensuring there's a space before it for proper CSS formatting.
    transforms.push(additionalTransform);
    }

    // Join the array back into a single string and return.
    return transforms.join(' ');
}
