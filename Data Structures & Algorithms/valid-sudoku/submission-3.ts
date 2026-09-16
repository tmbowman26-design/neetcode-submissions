class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set<string>();
        for (let row = 0; row < 9; row++) {
            for (let column = 0; column < 9; column++) {
                const value = board[row][column];
                if (value === '.') continue;
                const boardIdx = (Math.floor(row / 3) * 3) + Math.floor(column / 3);
                const rowKey = `row_${row}_${value}`;
                const colKey = `col_${column}_${value}`;
                const boxKey = `box_${boardIdx}_${value}`

                if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)) {
                    return false;
                }
                set.add(rowKey);
                set.add(colKey);
                set.add(boxKey);
            }
        }
        return true;
    }
}
