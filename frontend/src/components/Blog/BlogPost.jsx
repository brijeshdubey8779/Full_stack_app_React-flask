import { useParams } from "react-router-dom";

const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "This is the full content of the first blog post." },
    { id: 2, title: "Blog Post 2", content: "This is the full content of the second blog post." },
    { id: 3, title: "Blog Post 3", content: "This is the full content of the third blog post." },
];

function BlogPost() {
    const { id } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div className="text-red-500">Post not found!</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
            <p className="text-gray-700 mt-4">{post.content}</p>
        </div>
    );
}

export default BlogPost;
