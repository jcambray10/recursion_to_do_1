function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

console.log(rSigma(5))

function rFact(num) {
    if(num > 1) {
        return rFact(num-1) * num;
    }
    return 1
}

console.log(rFact(6))

// echo "# recursion_to_do_1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jcambray10/recursion_to_do_1.git
// git push -u origin main