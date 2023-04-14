import { useEffect, useState } from "react";
function Content() {
    // useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // - Gọi Callback sau khi component thêm element vào DOM
    // useEffect(callback,[])
    //- Chỉ gọi callback một lần sau khi component mounted
    // useEffect(callback,[deps])
    //- Callback sẽ được gọi lại mỗi khi deps thay đổi
    //----------------------------------------------------------------
    // 1. cả  3 trường hợp thì callback luôn được gọi sau khi component mounted
    // 2. Clean up function luôn được gọi trước khi component unmount
    // 3. Clean up function được gọi trước khi callback được gọi(trừ lần mounted đầu tiên)
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const tabs = ['posts', 'comments', 'albums'];
    const [type, setType] = useState('posts');
    const [showGotop, setShowGotop] = useState(false);
    //   useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(post => {
    //         setPosts(post)})
    //   },[]);\
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setPosts(post)
            })
    }, [type]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowGotop(true)
            } else {
                setShowGotop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    return (
        <div className="App">
            {tabs.map((tab) => (
                <button key={tab}
                    style={type === tab ? { color: '#fff', background: '#333' } : { color: 'black' }}
                    onClick={() => setType(tab)}>
                    {tab}</button>
            ))}
            <h1>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                {/* {console.log("Render")} */}
            </h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {
                showGotop && (<button
                    style={{
                        position: 'fixed',
                        bottom: 10,
                        right: 10,
                    }}
                    onClick={() => window.scrollTo(0, 0)}>Go to top</button>)
            }
            {/* {showGotop && (<button
                
                 onClick={}>Go to top</button>)} */}
        </div>

    );
}
export default Content;
