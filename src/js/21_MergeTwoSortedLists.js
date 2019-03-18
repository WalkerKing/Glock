/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
var mergeTwoLists = function (l1, l2) {
    let l3 = {
        val: null,
        next: null
    };
    let crt = l3;
 
    while(l1 && l2){
        if(l1.val > l2.val){
            l3.next = l2;
            l2 = l2.next;
        }else{
            l3.next = l1;
            l1 = l1.next;
        }
        l3 = l3.next;
    }
    l3.next = l1 || l2;
    return crt.next;
};

let l3 = mergeTwoLists(l1, l2)
while(l3){
    console.log(l3.val)
    l3 = l3.next;
}