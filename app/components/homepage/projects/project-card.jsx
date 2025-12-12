// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-black border-purple/30 relative rounded-lg border bg-gradient-to-r to-black w-full shadow-elegant hover:border-pink/50 transition-all duration-300">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink to-purple shadow-pink-glow"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-purple to-transparent shadow-purple-glow"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-pink text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-purple/30 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink">=</span>
            <span className="text-white/50">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-white/50">{`'`}</span>
            <span className="text-pink">{project.name}</span>
            <span className="text-white/50">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-white/50">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-purple">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-white/50">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-white/50">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-pink">{project.role}</span>
            <span className="text-white/50">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-purple">{' ' + project.description}</span>
            <span className="text-white/50">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;