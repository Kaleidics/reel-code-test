//This is the sorting function for the FilterButton component
//I wrote it this way instead of creating 4 different sorting functions for each object property
//This way it is reuseable for each of the different the FilterButton components
//And if you change the incoming seed data, to have another field, you can just pass that new field as props to the FilterButton instead
//of writing a new sorting function
//It takes two arguments an array and a field of the object to sort by
//this assumes the array, is an array of objects

export const sortData = (array, field) => {

    //Since the default sort order in JavaScript is alphabetical, we will not be able to sort by number value correctly
    //If the field string can be converted to a number, we assume we want to sort this field numerically
    //Therefore we return false if it can be a number
    if (isNaN(array[0][field])) {
        console.log('true')
        return array.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    }

    //sort numerically if it's a number
    return array.sort((a, b) => (a[field] - b[field]));
}