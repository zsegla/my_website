import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Web Design", "Photography", "UI/UX", "Branding"];

const galleryItems = [
  {
    id: 1,
    title: "E-commerce Website Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description: "Modern e-commerce platform with clean design and intuitive user experience."
  },
  {
    id: 2,
    title: "Mountain Landscape",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Breathtaking mountain landscape captured during golden hour."
  },
  {
    id: 3,
    title: "Mobile App Interface",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    description: "Clean and modern mobile app interface design for productivity app."
  },
  {
    id: 4,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    description: "Complete brand identity package including logo, colors, and typography."
  },
  {
    id: 5,
    title: "Dashboard Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Analytics dashboard with data visualization and clean layout."
  },
  {
    id: 6,
    title: "Urban Architecture",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    description: "Modern urban architecture showcasing geometric patterns."
  },
  {
    id: 7,
    title: "Task Management App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    description: "Intuitive task management application with drag-and-drop functionality."
  },
  {
    id: 8,
    title: "Coffee Shop Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    description: "Warm and inviting brand identity for local coffee shop."
  },
  {
    id: 9,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    description: "Creative portfolio website with smooth animations and modern design."
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-mono">Gallery</h1>
        <p className="text-xl opacity-70 font-mono">
          A visual showcase of my creative work and photography
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 font-mono ${
              selectedCategory === category
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white space-y-2">
                <ZoomIn size={24} className="mx-auto" />
                <h3 className="font-semibold font-mono">{item.title}</h3>
                <p className="text-sm opacity-80 font-mono">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold font-mono">{selectedImage.title}</h3>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 font-mono">
                  {selectedImage.category}
                </span>
              </div>
              <p className="opacity-80 font-mono">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
