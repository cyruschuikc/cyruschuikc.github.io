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
print("ndarray-3 as below:\n", ndarr3, "\nDimension of ndarray-3:", ndarr3.ndim)

ndarr4 = np.array([1,2,3,4,5], ndim=5)
print(f"Dimension of ndarray-4{ndarr4}: {ndarr4.ndim}")

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
# Dimension of ndarray-3: 3
# Dimension of ndarray-4[[[[[1 2 3 4 5]]]]]: 5
# -------------------------------------------------------------------------------------------------------
# =======================================================================================================
