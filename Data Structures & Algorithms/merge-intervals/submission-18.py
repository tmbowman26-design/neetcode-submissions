class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        sortedIntervals = sorted(intervals, key=lambda interval: interval[0])
        result:  List[List[int]] = []
        for start, end in sortedIntervals:
            if len(result) == 0:
                result.append([start, end])
            lastInterval = result[-1]
            if start > lastInterval[1]:
                result.append([start, end])
            else:
                lastInterval[1] = max(lastInterval[1], end)
        return result

        