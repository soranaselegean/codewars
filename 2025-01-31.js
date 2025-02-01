//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//E: a1 = ["arp", "live", "strong"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] >> ["arp", "live", "strong"]

function inArray(array1,array2){
    return array1.filter(e => array2.toString(' ').includes(e)).sort()
}