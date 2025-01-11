import { Link } from "react-router-dom";

const blogPosts = [
    { id: 1, title: "Blog Post 1", excerpt: "This is the first blog post." },
    { id: 2, title: "Blog Post 2", excerpt: "This is the second blog post." },
    { id: 3, title: "Blog Post 3", excerpt: "This is the third blog post." },
];

function Home() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Posts</h2>
            <div className="space-y-4">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                        <p className="text-gray-700 mt-2">{post.excerpt}</p>
                        <Link to={`/post/${post.id}`} className="text-blue-600 mt-4 inline-block">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
