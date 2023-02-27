// Number 1
function instagramPost(handle, content, imageLink, views, likes){
    this.handle = handle,
    this.content = content,
    this.imageLink = imageLink,
    this.views = views,
    this.likes = likes
}

// Number 2
post1 = new instagramPost("Lily_hot", "picture", "www.instagram.com/p/CpD5VrP87PM/?utm_source=ig_web_copy_link", 7676, 689)
post2 = new instagramPost("BankyW", "reels", "www.instagram.com/reel/CpD1vrOIr/?utm_source=ig_web_copy_link", 197876, 8000)

//Number 3
//a
const applicant = (name, age, location) => {
    return{
        name,
        age,
        location
    }
}

const musa = applicant("Musa Dawodu", 19, "Lagos")


//b
const createJambScores = (eng, govt, lit, crk) => {
    return{
        eng,
        govt,
        lit,
        crk
    }
}

const jambScores = createJambScores(70, 85, 82, 94)
musa.jambScores = jambScores

//Number 4 Ways to clone an Object;
//i. the for...in method

const John = {
    name : "John",
    class : "SS3",
    course : "Art"
}

const Peter = {}

for (let key in John){
 Peter[key] = John[key]
}

//ii. object.assign

const Peace = Object.assign({}, John)

//iii. spread operator

const Dodo = {...John}

//Number 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

for (let entry of Object.entries(presidentialCandidates)){
    console.log(`${entry[1]} is the presidential candidate of ${entry[0]}`);
}