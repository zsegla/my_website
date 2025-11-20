import { Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Explore the best practices for creating scalable and maintainable web applications using React and TypeScript in 2024.",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"],
    featured: true
  },
  {
    title: "The Future of Frontend Development in Africa",
    excerpt: "A deep dive into the growing tech ecosystem in Africa and opportunities for frontend developers in the continent.",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    tags: ["Career", "Africa", "Tech"],
    featured: true
  },
  {
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Learn practical techniques to improve your React application's performance and user experience.",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization"],
    featured: false
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
    publishedAt: "2023-12-28",
    readTime: "7 min read",
    tags: ["CSS", "Layout", "Frontend"],
    featured: false
  },
  {
    title: "Getting Started with Node.js and Express",
    excerpt: "A beginner-friendly guide to building your first backend API with Node.js and Express framework.",
    publishedAt: "2023-12-20",
    readTime: "12 min read",
    tags: ["Node.js", "Express", "Backend"],
    featured: false
  },
  {
    title: "Design Systems: Building Consistent UIs",
    excerpt: "How to create and maintain design systems that scale across multiple products and teams.",
    publishedAt: "2023-12-15",
    readTime: "9 min read",
    tags: ["Design Systems", "UI/UX", "Frontend"],
    featured: false
  }
];

export default function Blogs() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-mono">Blog</h1>
        <p className="text-xl opacity-70 font-mono">
          Thoughts on development, design, and technology
        </p>
      </div>

      {/* Featured Posts */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold font-mono">Featured Posts</h2>
        
        <div className="space-y-6">
          {featuredPosts.map((post, index) => (
            <article
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm opacity-60">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span className="font-mono">{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span className="font-mono">{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-mono">
                  {post.title}
                </h3>
                
                <p className="opacity-80 leading-relaxed font-mono">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 opacity-80 font-mono"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Other Posts */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold font-mono">Recent Posts</h2>
        
        <div className="grid gap-6">
          {otherPosts.map((post, index) => (
            <article
              key={index}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-sm opacity-60">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span className="font-mono">{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span className="font-mono">{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-mono">
                  {post.title}
                </h3>
                
                <p className="opacity-80 text-sm leading-relaxed font-mono">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 opacity-80 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="text-center space-y-6 p-8 rounded-2xl bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold font-mono">Stay Updated</h3>
        <p className="opacity-80 font-mono">
          Subscribe to get notified about new blog posts and updates
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-mono">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
