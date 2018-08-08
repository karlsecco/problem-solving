// adapted from ClojureDocs 'get-in': https://clojuredocs.org/clojure.core/get-in

const m = {
  username: 'sally',
  profile: {
    name: 'Sally Clojurian',
    address: {
      city: 'Austin',
      state: 'TX'
    }
  }
};

const v = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const mv = {
  username: 'jimmy',
  pets: [
    {
      name: 'Rex',
      type: 'dog'
    },
    {
      name: 'Sniffles',
      type: 'hamster'
    }
  ]
};

/**
 * Searches for an element in a given collection.
 * If element found with given search order, returns element.
 * If element not found, returns optional message or null if no message provided.
 * @param {object or array} coll  Collection to be searched.
 * @param {array}           arr   List of elements designating search order.
 * @param {string}          msg   Optional message to return if element not found.
 */
function getIn(coll, arr, msg = '') {
  // validate arguments
  if (
    typeof coll !== 'object' ||
    coll === null ||
    !Array.isArray(arr) ||
    arr == null ||
    typeof msg !== 'string'
  ) {
    return `* Invalid Arguments *
    Accepted argument data types include, in order: 1) object or array, 2) array, 3) string (optional)`;
  }

  // handle empty coll or empty arr
  if ((Array.isArray(coll) && coll.length === 0) || Object.keys(coll).length === 0) {
    return `* Collection empty *
      Nothing to search`;
  } else if (arr.length === 0) {
    return `* Second argument (arr) empty *
    No elements provided for which to search`;
  }

  // element exists and search array is exhausted
  if (coll[arr[0]] !== undefined && arr.length === 1) {
    return coll[arr[0]];
    // recurse if element is an object and search array is not exhausted
  } else if (typeof coll[arr[0]] === 'object' && coll[arr[0]] !== null) {
    return getIn(coll[arr[0]], arr.slice(1), msg);
    // element does not exists
  } else {
    return msg || null;
  }
}

// collection is always an object
getIn(m, ['profile', 'name']); // 'Sally Clojurian'
getIn(m, ['profile', 'address', 'city']); // 'Austin'
getIn(m, ['profile', 'address', 'zip-code']); // null
getIn(m, ['profile', 'address', 'zip-code'], 'no zip code!'); // 'no zip code!'

// collection is always an array
getIn(v, [0, 2]); // 3
getIn(v, [2, 1]); // 8

// collection contains both objects and arrays
getIn(mv, ['pets', 1, 'type']); // 'hamster'

// collection handles empty arguments
getIn({}, []); // '* Collection empty *'
getIn([], []); // '* Collection empty *'
getIn({}, v); // '* Collection empty *'
getIn(m, []); // '* Second argument (arr) empty *'

// collection handles invalid argument types
getIn('', []); // '* Invalid Arguments *'
getIn({}, ''); // '* Invalid Arguments *'
getIn({}, [], []); // '* Invalid Arguments *'
