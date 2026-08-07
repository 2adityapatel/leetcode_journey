// Trie Node
function TrieNode() {
    this.children = {};
    this.isEnd = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

    for (let ch of word) {
        if (!node.children[ch]) {
            node.children[ch] = new TrieNode();
        }
        node = node.children[ch];
    }

    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;

    for (let ch of word) {
        if (!node.children[ch]) return false;
        node = node.children[ch];
    }

    return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;

    for (let ch of prefix) {
        if (!node.children[ch]) return false;
        node = node.children[ch];
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie();
 * obj.insert(word);
 * var param_2 = obj.search(word);
 * var param_3 = obj.startsWith(prefix);
 */