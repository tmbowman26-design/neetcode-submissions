class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        const existingDigits = new Set<string>();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                const value = board[r][c];

                if (value === '.') continue;

                const rowKey = `row-${r}-${value}`;
                const colKey = `col-${c}-${value}`;
                const boxKey = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${value}`;

                if (existingDigits.has(rowKey) || existingDigits.has(colKey) || existingDigits.has(boxKey)) {
                    return false;
                }

                existingDigits.add(rowKey);
                existingDigits.add(colKey);
                existingDigits.add(boxKey);
            }
        }
         
        return true;
    }
}
