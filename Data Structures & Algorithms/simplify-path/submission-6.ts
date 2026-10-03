class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        const parts = path.split('/');
        const stack: string[] = [];
        for (const part of parts) {
            if (part === '' || part === '.') continue;
            if (part === '..') {
                if (stack.length) stack.pop();
                continue;
            } else {
                stack.push(part);
            }
        }
        return `/${stack.join('/')}`;
    }
}
