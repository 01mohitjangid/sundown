import React from 'react';

const projects = [
  { title: 'Makers Studio HOI', image: 'https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D' },
  { title: '50th Anniversary', image: 'https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8' },
  { title: 'NYFW Popup', image: 'https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Air Force 1 2021', image: 'https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'SOHO NYC', image: 'https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'SOHO 2023', image: 'https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Play New Kidvision', image: 'https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D' },
];

function ProjectList() {
  return (
    <div className="w-full">
      {projects.map((project, idx) => (
        <div
          className="group relative h-[150px] w-full border-b border-[#38383864] overflow-hidden flex items-center px-[2vw]"
          data-image={project.image}
          key={idx}
        >
          <div
            className="absolute left-0 top-[-100%] h-full w-full bg-orange-500 transition-all duration-200 ease-in group-hover:top-0"
          />
          <h2 className="text-[3vw] relative z-10">{project.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
