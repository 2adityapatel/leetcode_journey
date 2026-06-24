/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    let slow=head;
    let fast=head;

    while(fast && fast.next){   
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;

    while(slow){
        next = slow.next;
        slow.next = prev;

        prev=slow;
        slow=next;
    }

    let secondHalfNode = prev;
    let max=0
    let temp=head;

    while(secondHalfNode){

        let sum = temp.val + secondHalfNode.val

        if(sum > max){
            max=sum
        }

        secondHalfNode = secondHalfNode.next;
        temp = temp.next;
    }

    return max;

};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}