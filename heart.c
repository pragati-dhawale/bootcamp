# include <stdio.h>
int main()
{
int k,j,n;
scanf("%d",&n);
k=3;
int s=n-2;
for (int i=n; i>0; i--)
{    j=1;
    while (j<=n)
    {    while (j<s)
         { printf("  ");
           j++;
         }
         s--;
         for (int m=1; m<=k; m++)
         {
           printf ("* ");
           j++;
         }
         for (int p=1; p<i; p++)
         {
         printf("  ");
         } 
    }
    j=1;
    while (j<=n)
    {    while (j<i)
         { printf("  ");
           j++;
         }
         for (int m=1; m<=k; m++)
         {
           printf ("* ");
           j++;
         }
         for (int p=1; p<i; p++)
         {
         printf("  ");
         } 
    }
    printf("\n");
    k=k+2;
}
for (int i=1; i<n; i++)
{
    for (j=1; j<=(n*3)+(n-2); j++)
    {  printf("* ");
    }
    printf("\n");
} 
int h = n*3+(n-3);
for (int i=1; i<n+(n-1); i++)
{    
     for (int j=1; j<=h; j++)
     {
         if (j<=i) printf("  ");
         else printf ("* ");
     }
     h=h-1;
     printf("\n");
} 
for (int i=1; i<=n*3+(n-3); i++)
{
     printf (" ");    
}
printf("*\n");
return 0;
}
