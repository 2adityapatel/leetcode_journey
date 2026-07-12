/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    if (!list1 && !list2) {
        return null;
    }

    let s1 = list1 || null;
    let s2 = list2 || null;

    let sorted = null;
    let sortedStart = null;

    if (s1 && s2) {
        if (s1.val < s2.val) {
            sorted = s1;
            sortedStart = s1;
            s1 = s1.next;
        } else {
            sorted = s2;
            sortedStart = s2;
            s2 = s2.next;
        }
    } else if (s1) {
        sorted = s1;
        sortedStart = s1;
        s1 = s1.next;
    } else {
        sorted = s2;
        sortedStart = s2;
        s2 = s2.next;
    }

    while (s1 || s2) {

        if (s1 && s2) {
            if (s1.val < s2.val) {
                sorted.next = s1;
                sorted = sorted.next;
                s1 = s1.next;
            } else {
                sorted.next = s2;
                sorted = sorted.next;
                s2 = s2.next;
            }

        } else if (s1) {
            sorted.next = s1;
            sorted = sorted.next;
            s1 = s1.next;
        } else {
            sorted.next = s2;
            sorted = sorted.next;
            s2 = s2.next;
        }
    }

    return sortedStart;

};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}