def solve(*args):
    if type(args[0]) == list:
        data = args[0]

    else:

        data = args

    if data.__len__() < 3:
        raise Exception('The input length must be equals or greater than 3')
    max_sum = 0
    ll = []
    matches = 1

    for x in range(len(data) - 2):
        if sum(data[x: x + 3]) > max_sum:
            max_sum = sum(data[x:x + 3])
            ll = data[x: x + 3]
        elif sum(data[x: x + 3]) == max_sum:
            max_sum = sum(data[x: x + 3])
            ll = data[x: x + 3]
            matches += 1
    if matches > 1:
        return list(ll)

    return f'{{ sequence: {list(ll)}, sum: {max_sum} }}'


"""Test cases"""

print(solve([11, 14, 10, 12]))
print(solve(12, 9, 1, 5, 11, 5))
print(solve(76, 80, 81, 77, 83, 78, 80))
print(solve(76, 80))
