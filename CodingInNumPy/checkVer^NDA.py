import numpy as np

ver = np.__version__
s = f"my NumPy version: {ver}"
print(s)

ndarr1 = np.array(["Hi", "Hello"])  # ndarr ==> ndarray
ndarr2 = np.array((1,2,3,4,5))  # ndarr ==> ndarray
dt_arr = [type(ndarr1), type(ndarr2)] # dt ==> data type
s_ = f"The data type of Array{ndarr1} created with NumPy is {dt_arr[0]}. \n\
The data type of another Array{ndarr2} created with NumPy also is {dt_arr[1]}."
print(s_)

_x =  ndarr1.ndim
x_ =  ndarr2.ndim
print(f"Dimension of ndarry-1: {_x} | Dimensions of ndarray-2: {x_}")

ndarr3 = np.array([
    [[1,2,3],["ABC", "DEF", "GHI"]], 
    [[4,5,6],["JKL", "MNO", "PQR"]],
    [[7,8,9],["STU","VWX","YZ"]], [[0,00,000],[' ', ' ', ' ']]
])
print("ndarray-3 as below:\n", ndarr3, "\nData Type:", ndarr3.dtype,"\nDimension of ndarray-3:", ndarr3.ndim)

ndarr4 = np.array([1,2,3,4,5], ndmin=5)
print(f"Dimension of ndarray-4{ndarr4}: {ndarr4.ndim}\n Data Type: {ndarr4.dtype}\n")

nums = np.array((0,1,2,3,4,5,6,7,8,9))
_nums = nums.copy()
nums_ = nums.view()
print(f"Original: {nums}\nwith use copy(): {_nums}\nwith use view(): {nums_}\n")
_tmp = nums[0]
tmp_ = nums[len(nums)-1]
nums[len(nums)-1] = _tmp
nums[0] = tmp_
print(f"After Change: {nums}\nwith use copy(): {_nums}\nwith use view(): {nums_}\n")

# =======================================================================================================
# expected output as below
# -------------------------------------------------------------------------------------------------------
# my NumPy version: 2.3.2
# The data type of Array['Hi' 'Hello'] created with NumPy is <class 'numpy.ndarray'>. 
# The data type of another Array[1 2 3 4 5] created with NumPy also is <class 'numpy.ndarray'>.
# Dimension of ndarry-1: 1 | Dimensions of ndarray-2: 1
# ndarray-3 as below:
# [[['1' '2' '3']
#  ['ABC' 'DEF' 'GHI']]
#
# [['4' '5' '6']
#  ['JKL' 'MNO' 'PQR']]
#
# [['7' '8' '9']
#  ['STU' 'VWX' 'YZ']]
#
# [['0' '0' '0']
#  [' ' ' ' ' ']]] 
# Data Type: <U21 
# Dimension of ndarray-3: 3
# Dimension of ndarray-4[[[[[1 2 3 4 5]]]]]: 5
# Data Type: int64
# Original: [0 1 2 3 4 5 6 7 8 9]
# with use copy(): [0 1 2 3 4 5 6 7 8 9]
# with use view(): [0 1 2 3 4 5 6 7 8 9]
#
# After Change: [9 1 2 3 4 5 6 7 8 0]
# with use copy(): [0 1 2 3 4 5 6 7 8 9]
# with use view(): [9 1 2 3 4 5 6 7 8 0]
# -------------------------------------------------------------------------------------------------------
# =======================================================================================================
