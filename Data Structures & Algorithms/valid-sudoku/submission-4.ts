class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set<string>();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === '.') continue;
                const digit = board[i][j];
                const row = `row ${i}: ${digit}`;
                const col = `col ${j}: ${digit}`;
                const box = `box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}: ${digit}`;

                if (set.has(row) || set.has(col) || set.has(box)) {
                    return false;
                }
                set.add(row);
                set.add(col);
                set.add(box);
            }
            
        }
        return true;
    }
}
