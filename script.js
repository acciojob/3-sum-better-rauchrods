function threeSum(nums, target) {
// write your code here
	    let n = nums.length, ans = Number.MAX_SAFE_INTEGER;
     nums.sort(function (a,b){
         return a-b;
     });
     for(let i=0 ;i<n-2;i++){
         let l = i+1, r=n-1;
         while(l<r){
              
            let sum= nums[i] + nums[l] + nums[r];
           if(Math.abs(target-sum)<Math.abs(target-ans)){
               ans=sum;
           }
           else if(sum<target){
               l++;
           }
           else{
               r--;
           }
            
         }
     }
     return ans;
  
}

module.exports = threeSum;
