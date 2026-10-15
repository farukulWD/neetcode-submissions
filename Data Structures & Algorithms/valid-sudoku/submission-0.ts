class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
 
        const rows:Set<string>[]= Array.from({length:9},()=>new Set());
        const cols:Set<string>[]= Array.from({length:9},()=>new Set());
        const boxes:Set<string>[]= Array.from({length:9},()=>new Set());

        for(let r = 0; r < board.length; r++){
            for(let c = 0;c<board.length;c++){
                const value = board[r][c];
                if(value ===".") continue;
                
                const b = Math.floor(r/3) * 3 + Math.floor(c/3);

                if(rows[r].has(value)|| cols[c].has(value)||boxes[b].has(value)) return false;
                rows[r].add(value);
                cols[c].add(value);
                boxes[b].add(value)
            }
        }


        return true
    }
}
