import HoverCard from "./HoverCard"

const blogs = [
    {
        image: "https://images.unsplash.com/photo-1612636320854-776180f479d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "12 April 2025",
        heading:"Dr Lindsey Church has joined our team!",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit itaque ad repellendus numquam dolore fugit!"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661292018719-db932eb64e39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRvY3RvciUyMGltYWdlfGVufDB8fDB8fHww",
        date: "12 April 2025",
        heading:"Dr Lindsey Church has joined our team!",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit itaque ad repellendus numquam dolore fugit!"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxkb2N0b3IlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        date: "12 April 2025",
        heading:"Dr Lindsey Church has joined our team!",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit itaque ad repellendus numquam dolore fugit!"
    },

]

export default function BlogCards() {
    return (
      <div className="flex flex-col justify-center items-center px-4 py-20 space-y-6">
        <h4 className="text-violet-600 uppercase tracking-wider">Blog</h4>
        <h1 className="text-4xl font-semibold text-center">Keep up to date</h1>
        <p className="max-w-3xl text-center text-gray-500">
          Welcome to the Millersneuk Dental blog where we share insight into the world of cosmetic dentistry and facial aesthetics.
        </p>
  
        <div className="flex flex-wrap justify-center gap-16 mt-8">
          {blogs.map((ele, i) => (
            <HoverCard
              key={i}
              date={ele.date}
              description={ele.description}
              heading={ele.heading}
              image={ele.image}
            />
          ))}
        </div>
        <div className="flex p-4 mt-6 text-violet-600 border rounded-sm ">View all</div>
      </div>
    );
  }
  