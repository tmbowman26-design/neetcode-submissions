class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}
        for word in strs:
            sortedStr = "".join(sorted(word))
            if sortedStr in anagrams:
                anagrams[sortedStr].append(word)
            else:
                anagrams[sortedStr] = [word]
        return list(anagrams.values())