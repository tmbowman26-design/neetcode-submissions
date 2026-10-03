class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        const stack: string[] = [];
        const parts = path.split('/');
        console.log(`parts: ${parts}`);
        for (const part of parts) {
            if (part === '' || part === '.' || (part === '..' && stack.length === 0)) continue;
            if (part === '..' && stack.length !== 0) {
                stack.pop();
            } else {
                stack.push(part);
            }
        }
        return `/${stack.join('/')}`;
    }
}
