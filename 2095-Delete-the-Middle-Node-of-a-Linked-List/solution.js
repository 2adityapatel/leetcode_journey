/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {

    let slow=head
    let fast=head.next

    if(fast == null){
        head=null;
        return head;
    }

    while(fast.next != null){
        if(fast.next.next == null){
            fast=fast.next;
            break;
        }else{
            fast=fast.next.next;
        }
        slow=slow.next;
    }

    slow.next = slow.next.next;

    return head
    
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}