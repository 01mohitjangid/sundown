
function DesignExecution() {
  return (
    <div style={{background:'#ede9e2', width:'100vw', minHeight:'100vh', padding:'2vw 0'}}>
      <div className="w-full flex flex-col md:flex-row items-stretch min-h-[90vh] bg-black rounded-2xl mx-auto" style={{maxWidth:'92vw', boxShadow:'0 0 40px #0002'}}>
        {/* Left: Text */}
        <div className="md:w-[40%] w-full flex flex-col justify-center pl-[8vw] pr-[3vw] py-[10vh] text-left text-white bg-black">
          <div className="border-l-[2px] border-[#999] pl-6 flex flex-col">
            <span className="font-bold" style={{fontSize:'5.5vw', color:'#fff', lineHeight:0.9, fontFamily:'sans-serif', letterSpacing:'-3px', marginBottom:'10px'}}>Design</span>
            <span className="font-bold" style={{fontSize:'4.5vw', color:'#555', lineHeight:0.9, fontFamily:'sans-serif', letterSpacing:'-2px', marginBottom:'8px'}}>Project</span>
            <span className="font-bold" style={{fontSize:'4.5vw', color:'#555', lineHeight:0.9, fontFamily:'sans-serif', letterSpacing:'-2px', marginBottom:'30px'}}>Execution</span>
            <p style={{fontSize:'1.1rem', color:'#fff', fontWeight:400, lineHeight:1.5, fontFamily:'sans-serif', maxWidth:'90%'}}>
              Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.
            </p>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-[60%] w-full flex items-center justify-center bg-black">
          <img
            src={process.env.PUBLIC_URL + '/asset/page4-1.webp'}
            alt="Design Project Execution"
            className="object-cover w-full h-full"
            style={{ minHeight: '100vh', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignExecution;
