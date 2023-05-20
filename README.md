#lm_random
Seedable pseudo random number generator based on Logistic map.
Returns value beetween 0 and 1
Default seed is 0.1
##API:
###Usage:
Import Random class to your project, use constructor to create new instance of Random class and you are ready to go:
`let rand = new Random();`
###Seeding:
Setting initial value for the generator
`seed(0.4);`
seed(0.1);`
##Improving results
Since logistic map's trajectories for two seeds that are close to themselves might lay close to each other initially - producing simmiliar sets of numbers for first several iterations, you might want to warm up the generator to get better quality of randomness.
You do that with warmUp function. This function performs 100 iterations without returning a result.
`warmUp()`
To get next random number:
`ran