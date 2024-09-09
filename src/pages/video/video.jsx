import React from 'react';

const videos = [
  "https://www.youtube.com/embed/6zIKq6OqWLo?si=4usbVtJO_ATaELQR",
  "https://www.youtube.com/embed/yAdAM0DUJA8?si=27ly-vcNfB-JWYot",
  "https://www.youtube.com/embed/BueDmzkAT2o?si=YSRXjv4gJ7K-kJaM",
  "https://www.youtube.com/embed/Yvp3MNA8AB4?si=h2cW0TTOadyvDJtW",
  "https://www.youtube.com/embed/Xf9130Ub8iY?si=zhHCWxkfFs7YLW7y",
  "https://www.youtube.com/embed/x-xPr-rYzE4?si=qsOMD9wP9v1FcTBk",
  "https://www.youtube.com/embed/Ids5g93lBsA?si=jV22wPjoA3UJlN1x",
  "https://www.youtube.com/embed/8pQqK75MCGo?si=R5Kkhdxbrq91FSWb",
  "https://www.youtube.com/embed/Dbxl26Og0nA?si=OvAynnCscVmFZjcF",
  "https://www.youtube.com/embed/wb4KiGNSxd0?si=hNTRJ97Skwv9kOzh",
  "https://www.youtube.com/embed/-YmWHNyowMo?si=SoO1iDFiEDzk9oTM",
  "https://www.youtube.com/embed/ReDBmkWHtGE?si=CXHh_jqQeecJ3Oup",
];

const Video = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10">The Muallimah Video</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              width="100%" 
              height="315" 
              src={video} 
              title={`YouTube Video ${index + 1}`} 
              frameBorder="22" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
