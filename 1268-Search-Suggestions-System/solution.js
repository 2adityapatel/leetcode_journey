/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();

    class TrieNode {
        constructor() {
            this.children = new Map();
            this.isWord = false;
            this.word = null;
        }
    }

    const root = new TrieNode();

    // Build Trie
    for (const product of products) {
        let node = root;

        for (const ch of product) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }

            node = node.children.get(ch);
        }

        node.isWord = true;
        node.word = product;
    }

    const result = [];
    let node = root;

    for (const ch of searchWord) {
        if (!node.children.has(ch)) {
            // No more matches
            while (result.length < searchWord.length) {
                result.push([]);
            }
            break;
        }

        node = node.children.get(ch);

        // BFS
        const queue = [node];
        const candidates = [];
        let front = 0;

        while (front < queue.length) {
            const current = queue[front++];

            if (current.isWord) {
                candidates.push(current.word);
            }

            for (const child of current.children.values()) {
                queue.push(child);
            }
        }

        // BFS order != lexicographical order
        candidates.sort();

        // Take first 3 lexicographically smallest
        result.push(candidates.slice(0, 3));
    }

    return result;
};