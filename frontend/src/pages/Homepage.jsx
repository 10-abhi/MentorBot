import bghome from '../assets/bghome.png';
export const Homepage = ()=>{
     return <div className="h-screen w-screen " style={{
        backgroundImage: `url(${bghome})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
     }}>
      
     </div>
}