# def arrayRev(arr,a,z):
#     arr[a:z+1]=arr[a:z+1][::-1]
#     return arr
# s=list(map(str,input().split()))
# a,b=map(int,input().split())
# arrayRev(str,a,b)


# s=input()
# up="ABCDEFGHIJKLMNOPQRSTUVWZYZ"
# lo="abcdefghijklmnopqrstuvwxyz"
# u=0
# l=0

# for i in range(len(s)):
#   if s[i] in up:
#     u=u+1
#   else :
#     l=l+1
# # print(u,l)
# if u<l:
#  print( s.lower())
# else :
#   print(s.upper())\
s =input()
u = 0
l=0
for i in range(len(s)):
    if s[i].isupper():
        u+=1
    elif s[i].islower():
        l +=1
if  u>l:
    print(s.upper())
else:
    print(s.lower())
