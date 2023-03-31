// Bài Thực hành 2


// import axios from 'axios';

// const user = {
//   name: 'hungnv0902'
// }

// async function getUserProfile() {
//   try {
//     const githubUser = await axios.get(`https://api.github.com/users/${user.name}`);
//     console.log(githubUser.data)
//   } catch (err: any) {
//     console.log(err.message)
//   }
// }

// getUserProfile();
// bài thực hành 4
import axios from 'axios';

const getData = async () => {
    try {
        const listPost = await axios.get('http://jsonplaceholder.typicode.com/posts');
        console.log(listPost.data[0]);
        const dataDetail = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
        console.log(dataDetail.data);
    } catch (err) {
        console.log(err);
    }
}

getData();
